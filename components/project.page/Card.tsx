import Image from '../Image'
import Link from '../Link'
import { Github, Link2 } from 'lucide-react'

import styles from './Card.module.css'

const Card = ({ title, description, imgSrc, github, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex gap-4">
          {github && (
            <Link href={github} className={styles.link} aria-label="Github URL" target="_blank">
              <Github size={24} /> Github
            </Link>
          )}
          {href && (
            <Link href={href} className={styles.link} aria-label="배포 URL" target="_blank">
              <Link2 size={24} /> 배포
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Card
