import Link from 'next/link';
import Image from 'next/image';
import { nav, company, privacy, phone, tel, mail, hours } from './site';
import './globals.css';

const siteTitle = 'seQmo.｜セキュリティに、AIという視点を';
const siteDescription = '古い業務システムの見直し・作り直しから、保守・セキュリティ監視までまとめてサポート　AIでアクセスや操作、稼働状況を分析し、システムの中を見える化します';
const shareLogo = { url: '/seqmo-logo.png', width: 1808, height: 495, alt: 'seQmo.' };

export const metadata = {
  title: { default: siteTitle, template: '%s｜seQmo.' },
  description: siteDescription,
  applicationName: 'seQmo.',
  other: {
    'og:image': shareLogo.url,
    'og:image:width': String(shareLogo.width),
    'og:image:height': String(shareLogo.height),
    'og:image:alt': shareLogo.alt,
    'twitter:image': shareLogo.url,
    'twitter:image:alt': shareLogo.alt,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'seQmo.',
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
};
export default function RootLayout({children}) {
  return <html lang="ja"><body>
    <a className="skip" href="#main">本文に移動</a>
    <header className="header"><div className="wrap header-inner">
      <Link href="/" className="brand"><Image src="/seqmo-logo.png" width={1808} height={495} unoptimized priority alt="seQmo. ホーム"/></Link>
      <nav className="header-nav" aria-label="メインメニュー">
        {nav.map(([name, href]) => <Link key={href} href={href}>{name}</Link>)}
      </nav>
      <Link href="/contact/" className="header-contact">
        <span>お問合せ</span>
        <span className="header-contact-arrow-circle" aria-hidden="true"><svg className="header-contact-icon" width="27" height="14" viewBox="0 0 27 14" fill="none" aria-hidden="true">
          <path d="M1 11.5H25L17.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg></span>
      </Link>
    </div></header>
    <main id="main">{children}</main>
    <footer><div className="wrap footer-inner">
      <div><Link className="footer-brand" href="/"><Image src="/seqmo-logo.png" width={1808} height={495} unoptimized alt="seQmo. ホーム"/></Link><p><a href={company}>運営会社</a></p></div>
      <div><div className="footer-links">{[...nav,['お問い合わせ','/contact/']].map(([name,href])=><Link href={href} key={href}>{name}</Link>)}<a href={privacy}>プライバシーポリシー</a></div>
      <p><a href={tel}>{phone}</a>　<a href={'mailto:'+mail}>{mail}</a></p><p>営業時間：{hours}</p></div>
    </div></footer>
  </body></html>;
}
