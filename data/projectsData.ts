interface Project {
  title: string
  description: string
  repository?: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Open mind',
    description: `익명 질문 및 답변 서비스를 만들었다. 프로젝트 기본 셋팅과 글로벌 스타일, 피드 목록 페이지와 로딩 컴포넌트를 담당해서 개발했다. css nesting 과 tailwind가 build에서 깨지는 현상에 발생해서 고생을 했었다. 그 외에는 순탄하게 작업했던거 같다.`,
    imgSrc: '/static/images/capture-openmind.png',
    repository: 'https://github.com/fe11-part2-team8/openmind',
    href: 'https://team8-openmind.netlify.app/',
  },
  {
    title: 'Wikied',
    description: `남들이 만드는 나만의 위키 서비스를 만들었다. 공통 버튼 컴포넌트, 위키목록 페이지, 게시글 작성 페이지를 맏아 작업 하였는데, 텍스트 에디터 플러그인을 가져와 커스터마이징 하는데 애를 먹었다. 리액트쿼리를 처음으로 사용해 봐서 고생을 조금 했지만 좋은 경험이었다.`,
    imgSrc: '/static/images/capture-wikied.png',
    repository: 'https://github.com/codeitFE11-part3-team7/wikid',
    href: 'https://wikied-ten.vercel.app/',
  },
]

export default projectsData
