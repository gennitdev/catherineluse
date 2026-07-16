---
title: Why I migrated Beta-bot from localStorage to IndexedDB
createdAt: '2026-07-15'
---

[Beta-bot](https://www.beta-bot.net/) is a local-first AI beta reader for fiction writers. It stores books, chapters, summaries, reviews, wiki pages, and other project data on the user's device instead of sending the manuscript to an application server.

The browser version has always used SQLite through [sql.js](https://sql.js.org/), which compiles SQLite to WebAssembly. SQLite runs in memory, and the app exports its database when it needs to persist changes.

Originally, I saved that exported database in `localStorage`. That was simple and worked well while projects were mostly text. It stopped being a good fit when I wanted the browser version to support the same image features as the Electron desktop app.

## Why localStorage became a problem

`localStorage` is useful for small preferences, but it has several limitations for application data:

- It only stores strings.
- Browsers usually give it a relatively small quota.
- Binary data has to be converted to text, usually base64, which makes it larger.
- Its API is synchronous, so large reads and writes can block the interface.
- Saving an exported SQLite database means rewriting the entire string whenever the database changes.

A manuscript database can fit within those limits for a while. Images cannot. A few chapter illustrations—especially after base64 encoding adds roughly one-third to their size—can use the available space very quickly.

This created an awkward platform difference. Electron could store image files on disk, but the browser could not safely persist them. A browser user could restore a backup containing images and view them, but full image management was not practical.

## Why IndexedDB was a better fit

IndexedDB is an asynchronous browser storage API designed for larger, structured data. More importantly for Beta-bot, it can store binary values directly.

The migration uses IndexedDB in two ways:

1. The exported SQLite database is stored as a `Uint8Array` instead of being encoded as a string.
2. Image content is stored as native `Blob` records, keyed by image ID.

SQLite still owns the relational data: books, chapters, wiki pages, image metadata, ordering, and relationships. IndexedDB is the persistence layer around it. This let me keep the existing schema and database queries rather than rewriting the application around IndexedDB object stores.

The image metadata stays in SQLite while the larger binary content lives separately. That is similar to the Electron build, where SQLite stores metadata and the image itself lives in the app-data filesystem.

## Migrating without risking manuscripts

The hardest part was not writing to IndexedDB. It was making sure an upgrade could not silently lose someone's work.

On startup, the browser now:

1. Looks for an IndexedDB database snapshot.
2. Falls back to the old `localStorage` value when no IndexedDB snapshot exists.
3. Opens the legacy SQLite data before attempting to migrate it.
4. Writes the exported bytes to IndexedDB.
5. Reads the new copy back and opens it with SQLite to verify it.
6. Retains the legacy copy as a recovery path instead of immediately deleting it.

Database writes are also serialized so that an older, slower save cannot finish after a newer one and overwrite it. Errors are surfaced instead of replacing an unreadable database with an empty one.

Those details matter more than the happy-path write call. Local-first software makes the browser responsible for data that would normally be protected by a server-side database and backups.

## What the migration unlocked

With IndexedDB in place, the browser can now support the same core image workflow as Electron:

- Add chapter illustrations
- Use images as book, part, or chapter covers
- View, download, and delete images
- Associate images with wiki pages
- Include image data in user-initiated encrypted Google Drive backups

The change also gives larger text-only projects more room to grow and moves database persistence off the synchronous `localStorage` API.

## What did not change

IndexedDB did not introduce a backend. Beta-bot is still one local-first codebase for the browser, Electron, and Android. AI requests go directly to OpenAI using the API key configured by the user, and Google Drive is only contacted when the user chooses to back up or restore an encrypted snapshot.

It also did not replace SQLite. Keeping sql.js meant preserving the same relational model and most of the existing application logic. The migration changed where browser data is persisted, not how the rest of the app thinks about that data.

## The main lesson

`localStorage` was not a bad initial choice. It helped the browser version get working quickly, and it was adequate for early text-focused projects. The mistake would have been forcing it to keep doing a job it was not designed for.

IndexedDB became the right choice when the data changed: larger projects, binary images, cross-platform backups, and a need for closer feature parity between the web and desktop builds. By putting it behind the existing SQLite layer, I could make that change without turning it into a rewrite.
