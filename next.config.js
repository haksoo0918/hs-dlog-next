const { withContentlayer } = require('next-contentlayer2')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// 외부 서비스를 사용하는 경우 script-src에 추가 도메인이 필요할 수 있습니다
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is *.codepen.io;
  style-src 'self' 'unsafe-inline' *.codepen.io;
  img-src * blob: data:;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src 'self';
  frame-src giscus.app codepen.io *.codepen.io https://cdpn.io;
  frame-ancestors 'self';
  object-src 'none';
  base-uri 'self';
`

const securityHeaders = [
  // CSP 문서: https://developer.mozilla.org/ko/docs/Web/HTTP/CSP
  // 웹 페이지에서 로드할 수 있는 리소스를 제어하는 보안 계층
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // Referrer Policy 문서: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  // 요청 시 전송되는 리퍼러 정보를 제어 (한글 문서 없음)
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // X-Frame-Options 문서: https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/X-Frame-Options
  // 클릭재킹 공격을 방지하기 위한 iframe 제어
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  // X-Content-Type-Options 문서: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  // MIME 타입 스니핑 공격 방지 (한글 문서 없음)
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // DNS 프리페치 문서: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  // DNS 프리페치를 통한 성능 최적화 설정 (한글 문서 없음)
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // HSTS 문서: https://developer.mozilla.org/ko/docs/Glossary/HSTS
  // HTTPS 강제 사용을 통한 보안 강화
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // 권한 정책 문서: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  // 브라우저 기능 및 API 사용 권한 제어 (한글 문서 없음)
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

const output = process.env.EXPORT ? 'export' : undefined
const basePath = process.env.BASE_PATH || undefined
const unoptimized = process.env.UNOPTIMIZED ? true : undefined

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = () => {
  const plugins = [withContentlayer, withBundleAnalyzer]
  return plugins.reduce((acc, next) => next(acc), {
    output,
    basePath,
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['app', 'components', 'layouts', 'scripts'],
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
        },
      ],
      unoptimized,
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: securityHeaders,
        },
      ]
    },
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      return config
    },
  })
}
