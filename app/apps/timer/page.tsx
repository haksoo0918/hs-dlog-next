import { genPageMetadata } from 'app/seo'
import AppsLayout from '@/layouts/AppsLayout'

export const metadata = genPageMetadata({ title: 'Apps' })

export default function Page() {
  return (
    <AppsLayout>
      <p>Timer 페이지 입니다.</p>
    </AppsLayout>
  )
}
