/**
 * Selected work — shipped things, newest first.
 *
 * One line per project in the style of a résumé highlight: what it was, where,
 * when, and what you did on it. `note` is optional if a line of context helps.
 */

export interface Work {
  /** Stable id, used as the React key. */
  id: string
  title: string
  org: string
  /** Free text: '2021', '2020–2021', 'since 2025'. */
  year: string
  /** Your part in it. Kept short — this is the "— multimodal pod lead" bit. */
  role: string
  /** Optional sentence of context. */
  note?: string
  links?: { label: string; href: string }[]
}

export const selectedWork: Work[] = [
  {
    id: 'douyin-spring-festival',
    title: 'Douyin Spring Festival AR effects',
    org: 'TikTok',
    year: '2020–2021',
    role: 'data cleaning, data generation, and post-training',
    links: [{ label: 'engineering write-up', href: 'https://zhuanlan.zhihu.com/p/354132633' }],
  },
]
