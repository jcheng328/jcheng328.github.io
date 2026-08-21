import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import type { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

export default function Home({ posts }: { posts: CoreContent<Blog>[] }) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-4 pt-6 pb-8">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 dark:text-gray-100">
          Jiahui Cheng
        </h1>
        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
          <p>
            Hi, I&apos;m Jiahui. I work on {'{pre, mid, post}'}-training for vision and language
            models, and on machine learning theory with data-driven methods.
          </p>
          <p>
            More <Link href="/about">about me</Link>.
          </p>
        </div>
      </div>

      {/* Nothing is published yet, so the list stays hidden rather than showing
          an empty state. Note that restoring posts also needs the /blog and
          /tags routes back — a static export cannot build a dynamic route with
          no params, so they were removed alongside the posts. */}
      {posts.length > 0 && (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.map((post) => {
            const { slug, date, title, summary } = post
            return (
              <li key={slug} className="py-6">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-2 xl:col-span-3">
                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                      <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                        {title}
                      </Link>
                    </h2>
                    {summary && (
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                    )}
                    <div className="text-base leading-6 font-medium">
                      <Link
                        href={`/blog/${slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read more: "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
