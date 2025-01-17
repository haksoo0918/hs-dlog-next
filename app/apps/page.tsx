import { genPageMetadata } from 'app/seo'
import AppsLayout from '@/layouts/AppsLayout'

export const metadata = genPageMetadata({ title: 'Apps' })

export default function Page() {
  return (
    <AppsLayout>
      <p>
        Apps 기본 페이지 입니다.
        <br /> 여기도 나중에 넣을 내용이 생각이 나겠죠. ㅎ
      </p>
    </AppsLayout>
  )
}
