/**
 * Teaching, service, workshops and awards -- the content that used to live in
 * teachings.jemdoc, refereeservices.jemdoc and workshops.jemdoc.
 */

export interface TeachingEntry {
  course: string
  title: string
  institution: string
  terms: string[]
  role?: string
}

export interface WorkshopEntry {
  name: string
  location: string
  date: string
  role?: string
  link?: string
}

export interface ServiceEntry {
  venue: string
  detail: string
}

export interface AwardEntry {
  year: number
  name: string
}

export interface EducationEntry {
  degree: string
  field: string
  institution: string
  /** Rendered as "Advised by <title> <name>", linked when a url is given. */
  advisor?: { title?: string; name: string; url?: string }
  /** Any other note, e.g. a program or honors college. */
  detail?: string
}

export const education: EducationEntry[] = [
  {
    degree: 'Ph.D.',
    field: 'Mathematics',
    institution: 'Georgia Institute of Technology',
    advisor: {
      title: 'Prof.',
      name: 'Wenjing Liao',
      url: 'https://people.math.gatech.edu/~wliao60/',
    },
  },
  {
    degree: 'B.S.',
    field: 'Mathematics',
    institution: 'University of Science and Technology of China',
    detail: 'School of the Gifted Young',
  },
]

export const teaching: TeachingEntry[] = [
  {
    course: 'MATH 2551',
    title: 'Multivariable Calculus',
    institution: 'Georgia Tech',
    terms: ['2023 Fall', '2023 Summer', '2023 Spring', '2022 Fall', '2022 Summer', '2022 Spring'],
    role: 'Teaching Assistant',
  },
  {
    course: 'MATH 3670',
    title: 'Probability and Statistics',
    institution: 'Georgia Tech',
    terms: ['2021 Fall'],
    role: 'Learning Assistant',
  },
]

export const workshops: WorkshopEntry[] = [
  {
    name: 'ByteDance PhD Research Intern Expo',
    location: 'Bellevue, WA',
    date: 'August 5, 2024',
  },
  {
    name: 'NSF CompMath PI Meeting 2024',
    location: 'University of Washington, Seattle, WA',
    date: 'July 15-16, 2024',
  },
  {
    name: 'Southeast Applied and Computational Math Student Workshop',
    location: 'Georgia Institute of Technology, Atlanta, GA',
    date: 'April 5-6, 2024',
    role: 'Student organizer',
    link: 'https://wliao60.math.gatech.edu/2024ACMWorkshop.html',
  },
  {
    name: 'Florida-Georgia ACM Student Workshop 2023',
    location: 'Florida State University, Tallahassee, FL',
    date: 'April 1-2, 2023',
    link: 'https://www.math.fsu.edu/~lee/2023_FGACMW/',
  },
]

export const service: ServiceEntry[] = [
  {
    venue: 'AISTATS',
    detail:
      'Reviewer, 25th and 26th International Conference on Artificial Intelligence and Statistics (2022, 2023)',
  },
  {
    venue: 'NeurIPS',
    detail: 'Reviewer, 36th Conference on Neural Information Processing Systems (2022)',
  },
]

export const awards: AwardEntry[] = [
  { year: 2020, name: 'Excellent College Graduate, Anhui Province' },
  { year: 2015, name: 'National Mathematical Competition for High School Students, First Prize' },
]
