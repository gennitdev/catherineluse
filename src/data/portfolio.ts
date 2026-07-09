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
      'A community platform combining forums, wikis, event calendars, and file sharing for niche communities. Built with TypeScript, Vue 3 / Nuxt 3, Neo4j, Apollo GraphQL, and Node.js, with Node.js-based backend tests and Cypress end-to-end tests.'
    ],
    techStack: [
      'TypeScript',
      'Vue 3 / Nuxt 3',
      'Neo4j',
      'Apollo GraphQL',
      'Node.js',
      'Cypress'
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/gennitdev/multiforum-nuxt' },
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
    period: '',
    body: [
      'Add a description of AI Beta Reader here.'
    ],
    techStack: [],
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
    period: '',
    body: [
      'Add a description of Clockwork Town here.'
    ],
    techStack: [],
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
