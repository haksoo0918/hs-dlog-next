import { ReactNode } from 'react'
import { Timer } from 'lucide-react'

import Link from '@/components/Link'

interface Props {
  children: ReactNode
}

export default function AppsLayout({ children }: Props) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Apps
          </h1>
        </div>

        <div className="grid grid-cols-[160px_1fr] gap-4">
          <aside className="py-4">
            <ul>
              <li>
                <Link href="/apps/timer" className="link-block">
                  <Timer />
                  Timer
                </Link>
              </li>
            </ul>
          </aside>

          <div className="py-4">{children}</div>
        </div>
      </div>
    </>
  )
}
