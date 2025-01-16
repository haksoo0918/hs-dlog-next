/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'HS dlog',
  author: 'HS',
  headerTitle: 'HS dlog',
  description: '화면 개발 관련 또는 잡담 - 기록',
  language: 'ko',
  theme: 'system', // system, dark 또는 light
  siteUrl: 'https://haksoo0918.github.io/hs-dlog-next/',
  siteRepo: 'https://github.com/haksoo0918/hs-dlog-next',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  // mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'haksoo0918@gmail.com',
  github: 'https://github.com/haksoo0918',
  // x: 'https://twitter.com/x',
  // twitter: 'https://twitter.com/Twitter',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  // linkedin: 'https://www.linkedin.com',
  // threads: 'https://www.threads.net',
  // instagram: 'https://www.instagram.com',
  // medium: 'https://medium.com',
  // bluesky: 'https://bsky.app/',
  locale: 'ko-KR',
  // 상단에 고정된 네비게이션 바를 원하면 true로 설정
  stickyNav: true,
  analytics: {
    // 분석 제공자를 사용하려면 이를
    // `next.config.js` 파일의 콘텐츠 보안 정책에 추가해야 합니다.
    // Plausible, Simple Analytics, Umami, Posthog 또는 Google Analytics를 지원합니다.
    // umamiAnalytics: {
    // 이 사이트에서는 다른 사용자가 우리의 분석 ID를 복제하지 않도록 환경 변수를 사용합니다.
    // umamiWebsiteId: process.env.NEXT_UMAMI_ID, // 예: 123e4567-e89b-12d3-a456-426614174000
    // 데이터를 미국에 저장하는 경우 스크립트를 덮어써야 할 수도 있습니다. 예:
    // src: 'https://us.umami.is/script.js'
    // `next.config.js` 파일의 CSP에 'us.umami.is'를 허용된 도메인으로 추가하는 것을 잊지 마세요.
    // },
    plausibleAnalytics: {
      plausibleDataDomain: 'hs-dlog.vercel.app', // 예: tailwind-nextjs-starter-blog.vercel.app
      // 자체 Plausible을 호스팅하는 경우.
      // src: '', // 예: https://plausible.my-domain.com/js/script.js
    },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // 예: 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // 예: G-XXXXXXX
    // },
  },
  // newsletter: {
  // mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive를 지원합니다.
  // .env 파일을 추가하고 선택에 따라 수정하세요
  // provider: 'buttondown',
  // },
  // comments: {
  // 분석 제공자를 사용하려면 이를
  // `next.config.js` 파일의 콘텐츠 보안 정책에 추가해야 합니다.
  // 제공자를 선택하고 관련 환경 변수를 사용하세요
  // https://vercel.com/docs/environment-variables
  // provider: 'giscus', // 지원되는 제공자: giscus, utterances, disqus
  // giscusConfig: {
  // 아래 링크를 방문하여 'configuration' 섹션의 단계를 따르세요
  // https://giscus.app/
  // repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
  // repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
  // category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
  // categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  // mapping: 'pathname', // 지원되는 옵션: pathname, url, title
  // reactions: '1', // 이모지 반응: 1 = 활성화 / 0 = 비활성화
  // 주기적으로 부모 창에 토론 메타데이터 전송: 1 = 활성화 / 0 = 비활성화
  // metadata: '0',
  // 테마 예시: light, dark, dark_dimmed, dark_high_contrast
  // transparent_dark, preferred_color_scheme, custom
  // theme: 'light',
  // 다크 모드일 때 테마
  // darkTheme: 'transparent_dark',
  // 위의 테마 옵션이 'custom'으로 설정된 경우
  // 아래에 사용자 정의 테마 CSS 파일에 대한 링크를 제공하세요.
  // 예시: https://giscus.app/themes/custom_example.css
  // themeURL: '',
  // 이는 giscus의 구성에서 `data-lang="en"`에 해당합니다.
  // lang: 'en',
  // },
  // },
  search: {
    provider: 'kbar', // kbar 또는 algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // 검색할 문서를 로드할 경로
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // Algolia에서 제공한 애플리케이션 ID
    //   appId: 'R2IYF7ETH7',
    //   // 공개 API 키: 클라이언트에서 노출되어도 괜찮습니다.
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
