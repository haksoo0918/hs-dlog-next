import Image from 'next/image'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import NavIcons from './NavIcons'
import { cn } from './lib/utils'

const Header = () => {
  return (
    <header
      className={cn(
        'gnb',
        siteMetadata.stickyNav && 'sticky top-0 z-50',
        'flex w-full items-center justify-between bg-white py-10 dark:bg-gray-950'
      )}
    >
      <Link
        href="/"
        aria-label={siteMetadata.headerTitle}
        className="transition-colors hover:text-primary-500 hover:no-underline dark:text-gray-100 dark:hover:text-primary-400"
      >
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Image
              src="/static/favicons/logo.svg"
              alt="HS Logo"
              className="logo"
              width={64}
              height={64}
            />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>

      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="flex gap-2 font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              >
                <NavIcons title={link.title} />
                {link.title}
              </Link>
            ))}
        </div>

        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export { Header as default, NavIcons }
