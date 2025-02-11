import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { Tag as TagIcon } from 'lucide-react'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <header>
        <h1 className="text-xl font-bold">HS dlog 홈페이지입니다.</h1>
        <p className="prose my-4 dark:prose-invert">
          여기 소개 글을 적어둘까 하는데, 뭐 마땅히 적을 게 없네요.
          <br />
          퍼블리싱을 했었고, 지금은 FE 개발을 공부하고 있습니다. 공부 노트 정도로 사용 중입니다.
          만든지 얼마 되지 않아서 아직 별 내용이 없습니다. ㅎㅎ
          <br />
          아마도 조금씩이나마 콘텐츠도 늘어나고 모양도 이뻐질 꺼에요. 😊
        </p>
      </header>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            최근 블로그 글
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="mb-2 text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            <TagIcon className="mr-2 text-gray-400" />
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                          <Link
                            href={`/blog/${slug}`}
                            className="ml-2 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`더 읽어보기: "${title}"`}
                          >
                            더 읽어보기 &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            글 전체 보기 &rarr;
          </Link>
        </div>
      )}

      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
