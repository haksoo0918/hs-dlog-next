import projectsData from '@/data/projectsData'
import Card from '@/components/project.page/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Front-end 개발 프로젝트
        </p>
      </div>

      <div className="container py-12">
        <h2 className="mb-5 text-2xl font-bold leading-8 tracking-tight">
          코드잇(Codeit) 부트캠프 - Front-end 개발 교육과정 동안 만든 팀 프로젝트
        </h2>

        <div className="-m-4 flex flex-wrap">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              repository={d.repository}
              href={d.href}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
