import { FolderGit, Globe, ExternalLink } from 'lucide-react'
import { projectGroupLabels, type ProjectGroupKey } from '@/data/projectsData'

import Image from '../Image'
import Link from '../Link'

import styles from './Card.module.css'
import { cn } from '../lib/utils'

type CardProps = {
  title: string
  description: string
  imgSrc?: string
  repository?: string
  href?: string
  group?: ProjectGroupKey
  date?: string
}

const Card = ({ title, description, imgSrc, repository, href, group, date }: CardProps) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={cn(
        imgSrc && 'h-full',
        'group overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 bg-white transition duration-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-slate-950 dark:hover:bg-slate-900'
      )}
    >
      {imgSrc && (
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={306}
        />
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title} <ExternalLink className="inline size-4 align-top" />
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          {group && (
            <span className="rounded-full bg-gray-100 px-2.5 py-1 font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              {projectGroupLabels[group]}
            </span>
          )}
          {date && <span>{date}</span>}
        </div>
        <div className="flex gap-4">
          {repository && (
            <Link
              href={repository}
              className={styles.link}
              aria-label="Repository URL"
              target="_blank"
            >
              <FolderGit size={24} /> 저장소
            </Link>
          )}
          {href && (
            <Link href={href} className={styles.link} aria-label="배포 URL" target="_blank">
              <Globe size={24} /> 사이트
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Card
