/**
 * Single source of truth for publications.
 *
 * The old jemdoc site maintained this list twice -- once on the home page grouped
 * by topic, once on papersYear.html grouped by year -- and the two had already
 * drifted apart. Everything that renders a paper now reads from this array, so
 * that class of bug is structurally impossible.
 */

export const ME = 'Jiahui Cheng'

export type PublicationKind = 'journal' | 'conference' | 'preprint' | 'thesis'

export interface Publication {
  /** Stable id, used for anchors and React keys. */
  id: string
  title: string
  /** In publication order. Entries matching ME are emphasized when rendered. */
  authors: string[]
  /** Journal, conference, or e.g. "Preprint" / "Bachelor's thesis". */
  venue: string
  year: number
  kind: PublicationKind
  /** Research area, used for the topic-grouped view on the home page. */
  topic: string
  links?: {
    arxiv?: string
    pdf?: string
    code?: string
    doi?: string
  }
  /** Shown in the expandable panel. Plain prose, no markup. */
  abstract?: string
  /** Slug of a related post under /blog, if one exists. */
  relatedPost?: string
  /** Surfaced on the home page. */
  selected?: boolean
}

export const publications: Publication[] = [
  {
    id: 'adaptive-regularity',
    title:
      'Deep Neural Networks are Adaptive to Function Regularity and Data Distribution in Approximation and Estimation',
    authors: ['Hao Liu', ME, 'Wenjing Liao'],
    venue: 'Preprint',
    year: 2024,
    kind: 'preprint',
    topic: 'Estimation Theory',
    links: { arxiv: 'https://arxiv.org/abs/2406.05320', pdf: 'https://arxiv.org/pdf/2406.05320' },
    abstract:
      'Most theoretical studies of deep learning examine how well neural networks model functions with uniform regularity. We explore a different angle: how deep neural networks adapt to different regularity across locations and scales, and to nonuniform data distributions. We focus on a broad class of functions defined by nonlinear tree-based approximation, which encompasses both uniformly regular and discontinuous functions, and develop nonparametric approximation and estimation theories for this class using deep ReLU networks. Our results show that deep neural networks are adaptive to varying regularity and nonuniform data distributions at different locations and scales.',
    selected: true,
  },
  {
    id: 'ensemble-weak-form',
    title: 'Ensemble Dynamics Guided Weak Formulation for Identifying Differential Equations',
    authors: [ME, 'Sungha Kang', 'Haomin Zhou', 'Wenjing Liao'],
    venue: 'Preprint',
    year: 2023,
    kind: 'preprint',
    topic: 'PDE Identification',
    abstract:
      'Identifying a differential equation from noisy trajectory data requires building a library of candidate terms, which in turn requires estimating high-order derivatives -- an operation that amplifies noise. We use a weak formulation, integrating against compactly supported smooth test functions so that derivatives fall on the test function rather than on the data, and guide the choice of test functions and sampling regions using an ensemble of trajectories. This improves the conditioning of the resulting sparse regression problem and the robustness of the recovered equation at high noise levels.',
    relatedPost: 'why-the-weak-form-beats-finite-differences',
    selected: true,
  },
  {
    id: 'label-shift',
    title:
      'High Dimensional Binary Classification under Label Shift: Phase Transition and Regularization',
    authors: [ME, 'Minshuo Chen', 'Hao Liu', 'Tuo Zhao', 'Wenjing Liao'],
    venue: 'Sampling Theory, Signal Processing, and Data Analysis',
    year: 2022,
    kind: 'journal',
    topic: 'High Dimensional Statistics',
    links: { arxiv: 'https://arxiv.org/abs/2212.00700' },
    abstract:
      'Label shift has been widely believed to be harmful to generalization, and many mitigations -- such as balancing the training data -- have been proposed. These methods typically consider the underparametrized regime, where the sample size is much larger than the data dimension. We propose a new asymptotic analysis of the Fisher Linear Discriminant classifier for binary classification with label shift, and prove a phase transition: under a certain overparametrized regime, the classifier trained on imbalanced data outperforms the counterpart trained on reduced balanced data. The phase transition vanishes as regularization becomes strong.',
    relatedPost: 'double-descent-and-what-the-peak-is-telling-you',
    selected: true,
  },
  {
    id: 'affine-spectrum',
    title:
      'Estimate the spectrum of affine dynamical systems from partial observations of a single trajectory data',
    authors: [ME, 'Sui Tang'],
    venue: 'Inverse Problems',
    year: 2021,
    kind: 'journal',
    topic: 'Inverse Problems',
    links: { arxiv: 'https://arxiv.org/abs/2105.02945' },
    abstract:
      'We study the nonlinear inverse problem of estimating the spectrum of a system matrix driving a finite-dimensional affine dynamical system, from partial observations of a single trajectory. In the noiseless case we prove that an annihilating polynomial of the system matrix, whose roots are a subset of the spectrum, is uniquely determined by the data. We then characterize which eigenvalues are recoverable in terms of the observation locations, and propose reconstruction algorithms with theoretical guarantees that generalize the classical Prony method, ESPIRIT, and the matrix pencil method. We validate these on graph signal processing, disease modeling, and a real human motion dataset.',
    selected: true,
  },
  {
    id: 'mpm-thesis',
    title: 'Continuum simulation based on the Material Point Method',
    authors: [ME, 'Weihua Tong'],
    venue: "Bachelor's thesis",
    year: 2020,
    kind: 'thesis',
    topic: 'Solids and Fluids Simulation',
    abstract:
      'We study the hybrid Eulerian/Lagrangian Material Point Method (MPM) and propose a new discretization for its weak form, based on the weak form of force balance, which alleviates energy dissipation. We improve stability and energy dissipation compared with MPM and the Affine Particle in Cell method, and implement a Java GUI to visualize the algorithm on snow simulation.',
    selected: true,
  },
]

/** Publications newest-first. */
export const byYear = (): [number, Publication[]][] => {
  const groups = new Map<number, Publication[]>()
  for (const p of publications) {
    const list = groups.get(p.year) ?? []
    list.push(p)
    groups.set(p.year, list)
  }
  return [...groups.entries()].sort((a, b) => b[0] - a[0])
}

/** Publications grouped by research area, in the order topics first appear. */
export const byTopic = (only?: 'selected'): [string, Publication[]][] => {
  const groups = new Map<string, Publication[]>()
  for (const p of publications) {
    if (only === 'selected' && !p.selected) continue
    const list = groups.get(p.topic) ?? []
    list.push(p)
    groups.set(p.topic, list)
  }
  return [...groups.entries()]
}
