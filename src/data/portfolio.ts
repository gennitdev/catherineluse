// Portfolio content is supplied here in source, the same way blog posts are.
// To add real photos: drop image files into `public/portfolio/<work|fun>/<id>/`
// and set each image's `url` to the public path (e.g. '/portfolio/work/heartflow/demo.png').
// Images with an empty `url` render as a styled placeholder tile so the layout
// works before real photos are added. Edit captions right here.

export type AlbumImage = {
  // Public path to the image. Leave empty to show a placeholder tile.
  url?: string
  // Alt text for accessibility.
  alt?: string
  // Caption shown under the image and in the lightbox.
  caption?: string
}

export type PortfolioSection = {
  id: string
  // Project or role title.
  title: string
  // Company / context line (e.g. "HeartFlow · Remote").
  org?: string
  // Time period (e.g. "Feb 2025 – Present").
  period?: string
  // One or more paragraphs of description.
  body: string[]
  // Comma-separated tech stack, rendered as chips.
  techStack?: string[]
  // Optional external links (repo, live demo, etc.).
  links?: { label: string; url: string }[]
  // Optional caption shown above the photo album (e.g. image source).
  albumNote?: string
  // Photo album for the section.
  album: AlbumImage[]
}

export const workPortfolio: PortfolioSection[] = [
  {
    id: 'heartflow',
    title: 'Software Engineer',
    org: 'HeartFlow · Remote',
    period: 'Feb 2025 – Present',
    body: [
      'Built critical features for cardiovascular imaging software used in surgical planning, spanning Vue 3 frontend development and Node.js backend integration. Developed TypeScript components with the Composition API, Pinia, modular composables, Vitest unit tests, and Playwright coverage.',
      'Contributed to production Node.js/AWS Lambda services, including an Express-based web server for authentication, secure clinical-data proxying, and protected asset delivery. Added Datadog APM to an HMAC generation Lambda and helped expose plaque disease-stage data to the frontend.',
      'Worked in a medical-grade software environment focused on reliability, documentation, comprehensive testing, and safe deployment.'
    ],
    techStack: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'Vitest',
      'Playwright',
      'Node.js',
      'Express',
      'AWS Lambda',
      'AWS CDK',
      'S3',
      'CloudFront',
      'Datadog'
    ],
    album: [
      {
        url: '/portfolio/work/heartflow/pci-navigator.png',
        alt: 'PCI navigator',
        caption: 'PCI navigator'
      },
      {
        url: '/portfolio/work/heartflow/heartflow-interactive-plaque.jpg',
        alt: 'Interactive plaque view',
        caption: 'Interactive plaque view'
      }
    ]
  },
  {
    id: 'flightcrew',
    title: 'Software Engineer',
    org: 'Flightcrew · Remote',
    period: 'Jan 2023 – Oct 2024',
    body: [
      'Built core features for an early-stage DevOps automation platform that helped teams evaluate and apply Kubernetes configuration recommendations. Implemented a GitOps diff view showing users exactly what infrastructure configuration changes would be made before applying them, helping build trust in automated DevOps workflows.',
      'Built user onboarding flows, permission-management features, and data visualizations showing recommendation impact. Collaborated closely with founders and backend engineers, including proposing GraphQL schema changes and implementing frontend work in parallel with backend API development.',
      'Shipped quickly in a fast-moving startup environment while maintaining code quality and product reliability.'
    ],
    techStack: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'GraphQL',
      'Victory Charts / D3',
      'Kubernetes',
      'GitOps'
    ],
    links: [
      {
        label: 'Product demo',
        url: 'https://www.youtube.com/watch?v=_Rp7d2uncLw'
      }
    ],
    albumNote: "Screenshots from Flightcrew's Early Access demo video.",
    album: [
      {
        url: '/portfolio/work/flightcrew/flightcrew-config-recommendations.png',
        alt: 'Config recommendations',
        caption: 'Config recommendations'
      },
      {
        url: '/portfolio/work/flightcrew/flightcrew-metrics-impact.png',
        alt: 'Metrics impact',
        caption: 'Metrics impact'
      }
    ]
  },
  {
    id: 'suse',
    title: 'Software Engineer',
    org: 'SUSE (Rancher) · Remote',
    period: 'Sep 2021 – Jan 2023',
    body: [
      'Contributed to Rancher, an open-source Kubernetes management platform used by over 30,000 teams globally. Built frontend features for complex enterprise Kubernetes workflows, including multi-tenancy scenarios and selective monitoring deployment across namespace subsets.',
      'Worked in a large Vue/TypeScript codebase, collaborating across engineering teams to support cluster management, observability, and configuration workflows.'
    ],
    techStack: ['JavaScript', 'TypeScript', 'Vue', 'Kubernetes', 'Docker'],
    album: [
      {
        url: '/portfolio/work/suse/rancher-cluster-dashboard-overview.png',
        alt: 'Cluster dashboard overview',
        caption: 'Cluster dashboard overview'
      },
      {
        url: '/portfolio/work/suse/rancher-cluster-administration.png',
        alt: 'Cluster administration',
        caption: 'Cluster administration'
      },
      {
        url: '/portfolio/work/suse/rancher-cluster-provisioning.png',
        alt: 'Cluster provisioning',
        caption: 'Cluster provisioning'
      },
      {
        url: '/portfolio/work/suse/rancher-namespace-filtering.png',
        alt: 'Namespace filtering',
        caption: 'Namespace filtering'
      },
      {
        url: '/portfolio/work/suse/rancher-auth-providers.png',
        alt: 'Auth providers',
        caption: 'Auth providers'
      },
      {
        url: '/portfolio/work/suse/rancher-cloud-integrations.png',
        alt: 'Cloud integrations',
        caption: 'Cloud integrations'
      },
      {
        url: '/portfolio/work/suse/rancher-helm-charts.png',
        alt: 'Helm charts',
        caption: 'Helm charts'
      },
      {
        url: '/portfolio/work/suse/rancher-installing-helm-chart.png',
        alt: 'Installing a Helm chart',
        caption: 'Installing a Helm chart'
      }
    ]
  }
]

export const funPortfolio: PortfolioSection[] = [
  {
    id: 'multiforum',
    title: 'Multiforum',
    org: 'Personal full-stack project',
    period: '2019 – Present',
    body: [
      'Multiforum is an open-source community platform where people create topic-focused forums that go beyond plain discussion threads. Each forum can host discussions, events, wikis, and downloadable files, and any piece of content can be cross-posted to several forums at once.',
      'Discussions support voting and threaded comments; events offer calendar and map-based views for finding things nearby; wikis are collaborative documents with revision history; and downloads can be organized with forum-specific filters. Moderation is granular, with controls at both the individual forum and server level, and members can collect favorites into personal libraries.',
      'The app is split into a Nuxt frontend and a separate GraphQL backend that talk exclusively over GraphQL, with data stored in Neo4j and authentication handled by Auth0.'
    ],
    techStack: [
      'TypeScript',
      'Nuxt 3 / Vue 3',
      'Pinia',
      'Tailwind CSS',
      'GraphQL',
      'Neo4j',
      'Node.js',
      'Auth0',
      'Playwright',
      'Cypress'
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/gennit-project/multiforum-nuxt' },
      { label: 'Live demo', url: 'https://topical.space' }
    ],
    album: [
      {
        url: '/portfolio/fun/multiforum/multiforum-channel-plugins.png',
        alt: 'Channel plugins',
        caption: 'Channel plugins'
      },
      {
        url: '/portfolio/fun/multiforum/multiforum-admin-installs-plugin.png',
        alt: 'Admin installs a plugin',
        caption: 'Admin installs a plugin'
      },
      {
        url: '/portfolio/fun/multiforum/multiforum-channel-download-filters.png',
        alt: 'Channel download filters',
        caption: 'Channel download filters'
      },
      {
        url: '/portfolio/fun/multiforum/multiforum-download-detail.png',
        alt: 'Download detail',
        caption: 'Download detail'
      }
    ]
  },
  {
    id: 'ai-beta-reader',
    title: 'AI Beta Reader',
    org: 'Personal project',
    period: '2025 – Present',
    body: [
      'AI Beta Reader is a local-first writing app that pairs manuscript management with AI-powered feedback. Authors organize books into chapters, parts, and sections in a responsive editor with live preview, while the app auto-generates structured chapter summaries that track plot points, characters, and events to keep continuity across a long manuscript.',
      'It can produce contextual reviews in several styles — fan commentary, editorial notes, or line-editing suggestions — using customizable reviewer profiles that understand the story so far. A built-in story bible holds character sheets and wiki pages with change tracking and cross-document search, plus global find-and-replace across every chapter.',
      'Data stays on-device by default, with optional AES-encrypted backups to Google Drive, and the app ships to both desktop (Electron) and Android (Capacitor).'
    ],
    techStack: [
      'Vue 3',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Pinia',
      'TanStack Query',
      'SQLite (sql.js)',
      'Capacitor',
      'Electron',
      'OpenAI API'
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/gennitdev/ai-beta-reader-frontend'
      }
    ],
    album: [
      {
        url: '/portfolio/fun/ai-beta-reader/betabot-ai-generate-chapter-summary.png',
        alt: 'AI generates a chapter summary',
        caption: 'AI generates a chapter summary'
      },
      {
        url: '/portfolio/fun/ai-beta-reader/betabot-ai-auto-updates-wiki-pages.png',
        alt: 'AI auto-updates wiki pages',
        caption: 'AI auto-updates wiki pages'
      },
      {
        url: '/portfolio/fun/ai-beta-reader/betabot-ai-wiki-updates-in-progress.png',
        alt: 'AI wiki updates in progress',
        caption: 'AI wiki updates in progress'
      },
      {
        url: '/portfolio/fun/ai-beta-reader/betabot-chapter-illustrations-and-covers.png',
        alt: 'Chapter illustrations and covers',
        caption: 'Chapter illustrations and covers'
      },
      {
        url: '/portfolio/fun/ai-beta-reader/betabot-wiki-with-illustration.png',
        alt: 'Wiki page with illustration',
        caption: 'Wiki page with illustration'
      },
      {
        url: '/portfolio/fun/ai-beta-reader/betabot-wiki-collected-images.png',
        alt: 'Wiki collected images',
        caption: 'Wiki collected images'
      },
      {
        url: '/portfolio/fun/ai-beta-reader/betabot-tag-links-image-to-wiki-page.png',
        alt: 'Tag links an image to a wiki page',
        caption: 'Tag links an image to a wiki page'
      },
      {
        url: '/portfolio/fun/ai-beta-reader/betabot-find-and-replace.png',
        alt: 'Find and replace',
        caption: 'Find and replace'
      }
    ]
  },
  {
    id: 'clockwork-town',
    title: 'Clockwork Town',
    org: 'Personal project',
    period: '2025 – Present',
    body: [
      'Clockwork Town is a browser-based life simulator that renders human experience as an IT monitoring dashboard: residents are nodes, their needs are metrics, and their emotional states surface as alerts. It treats inner life with deadpan affection by describing psychology in the flat language of uptime monitoring.',
      'Residents move through daily routines — commuting to work or school and returning home to sleep — on schedules that shift across the week, while a live relationship graph shows friendships and family ties forming and drifting over time. You can build and run multiple towns at once, each with its own households, community spaces, and characters, all displayed through a Grafana-inspired real-time dashboard.',
      'Play is single-player and offline-capable, with encrypted Google Drive backup and restore. The frontend talks to a schema-first GraphQL backend backed by an embedded Kùzu graph database.'
    ],
    techStack: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'Vite',
      'Tailwind CSS',
      'ECharts',
      'Node.js',
      'GraphQL Yoga',
      'Kùzu'
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/gennit-project/clockwork-town'
      }
    ],
    album: [
      {
        url: '/portfolio/fun/clockwork-town/clockwork-town-overview.png',
        alt: 'Clockwork Town overview',
        caption: 'Clockwork Town overview'
      },
      {
        url: '/portfolio/fun/clockwork-town/clockwork-town-day.png',
        alt: 'Clockwork Town by day',
        caption: 'Clockwork Town by day'
      },
      {
        url: '/portfolio/fun/clockwork-town/clockwork-town-night.png',
        alt: 'Clockwork Town by night',
        caption: 'Clockwork Town by night'
      },
      {
        url: '/portfolio/fun/clockwork-town/clockwork-town-relationship-graph.png',
        alt: 'Relationship graph',
        caption: 'Relationship graph'
      }
    ]
  }
]
