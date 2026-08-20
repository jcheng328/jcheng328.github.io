import { Authors, allAuthors } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import Image from '@/components/Image'
import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'
import { awards, education, service, teaching, workshops } from '@/data/cv'
import { selectedWork } from '@/data/work'

export const metadata = genPageMetadata({ title: 'About Me' })

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-8">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const { name, avatar, occupation, company, email, github, linkedin, twitter, bluesky } = author

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          About Me
        </h1>
      </div>

      {/* Profile in a left column, page content beside it — the arrangement the
          template's AuthorLayout used, minus the bio prose. */}
      <div className="items-start xl:grid xl:grid-cols-3 xl:gap-x-8">
        <div className="flex flex-col items-center pt-8">
          {avatar && (
            <Image
              src={avatar}
              alt={name}
              width={192}
              height={192}
              className="h-48 w-48 rounded-full object-cover"
            />
          )}
          <h2 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {name}
          </h2>
          {occupation && <div className="text-gray-500 dark:text-gray-400">{occupation}</div>}
          {company && <div className="text-gray-500 dark:text-gray-400">{company}</div>}
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={email ? `mailto:${email}` : undefined} />
            <SocialIcon kind="github" href={github} />
            <SocialIcon kind="linkedin" href={linkedin} />
            <SocialIcon kind="x" href={twitter} />
            <SocialIcon kind="bluesky" href={bluesky} />
          </div>
        </div>

        <div className="divide-y divide-gray-100 xl:col-span-2 dark:divide-gray-800">
          <Section title="Selected Work">
            <ul className="space-y-6">
              {selectedWork.map((work) => (
                <li key={work.id}>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      {work.title}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      ({work.org}, {work.year})
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">— {work.role}</span>
                  </div>
                  {work.note && (
                    <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {work.note}
                    </p>
                  )}
                  {work.links && work.links.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-x-3 text-sm">
                      {work.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Research">
            <ul>
              <li>
                <Link
                  href="https://scholar.google.com/citations?user=OqVRn70AAAAJ&hl=en"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Google Scholar
                </Link>
              </li>
            </ul>
          </Section>

          <Section title="Education">
            <ul className="space-y-3">
              {education.map((e) => (
                <li key={`${e.degree}-${e.institution}`}>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {e.degree}, {e.field}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400"> — {e.institution}</span>
                  {e.advisor && (
                    <span className="block text-sm text-gray-500 italic dark:text-gray-400">
                      Advised by{' '}
                      {e.advisor.url ? (
                        <Link
                          href={e.advisor.url}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {[e.advisor.title, e.advisor.name].filter(Boolean).join(' ')}
                        </Link>
                      ) : (
                        [e.advisor.title, e.advisor.name].filter(Boolean).join(' ')
                      )}
                    </span>
                  )}
                  {e.detail && (
                    <span className="block text-sm text-gray-500 italic dark:text-gray-400">
                      {e.detail}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Teaching">
            <ul className="space-y-4">
              {teaching.map((t) => (
                <li key={t.course}>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {t.course} {t.title}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {' '}
                    — {t.institution}
                    {t.role ? `, ${t.role}` : ''}
                  </span>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {t.terms.map((term) => (
                      <span
                        key={term}
                        className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Referee Services">
            <ul className="space-y-2">
              {service.map((s) => (
                <li key={s.venue} className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{s.venue}</span>{' '}
                  — {s.detail}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Workshops">
            <ul className="space-y-4">
              {workshops.map((w) => (
                <li key={w.name}>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {w.link ? <Link href={w.link}>{w.name}</Link> : w.name}
                  </span>
                  {w.role && <span className="text-gray-600 dark:text-gray-400"> ({w.role})</span>}
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {w.location} · {w.date}
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Awards">
            <ul className="space-y-2">
              {awards.map((a) => (
                <li key={a.name} className="text-gray-600 dark:text-gray-400">
                  <span className="font-mono text-sm text-gray-500 dark:text-gray-400">
                    {a.year}
                  </span>{' '}
                  — {a.name}
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </div>
  )
}
