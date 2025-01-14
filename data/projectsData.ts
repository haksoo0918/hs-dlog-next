interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Open mind',
    description: `익명 질문 및 답변 서비스`,
    imgSrc: '/static/images/capture-openmind.png',
    href: 'https://team8-openmind.netlify.app/',
  },
  {
    title: 'Wikied',
    description: `남들이 만드는 나만의 위키 서비스`,
    imgSrc: '/static/images/capture-wikied.png',
    href: 'https://wikied-ten.vercel.app/',
  },
]

export default projectsData
