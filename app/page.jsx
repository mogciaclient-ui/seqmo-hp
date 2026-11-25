import Image from 'next/image';
import Link from 'next/link';
import { Problem, Solution, BeforeAfter, Features, AiAnalysis, FreeCheck, Pricing, Flow, Faq, Contact } from './lp-sections';
import './home.css';
import './lp.css';
import { Rebuild } from './lp-new-sections';
import './lp-new.css';
import { SecurityData } from './security-data';

const securityHighlights = [
  '24/7 MONITORING',
  'THREAT DETECTION',
  'AI INSIGHTS',
  'SECURITY SUPPORT',
];

export default function Home() {
  return <div className="home lp">
    <section className="home-hero">
      <div className="wrap hero-content">
        <div className="hero-design" data-design="layer"><div className="hero-copy">
          <p className="hero-english hero-english-label">INTELLIGENCE BEHIND SECURITY.</p>
          <h1>セキュリティに<br/><span className="hero-title-accent">AIという視点</span>を</h1>
          <p>「動いているから大丈夫」で、使い続けていませんか？<br/>古い業務システムの見直し・作り直しから、保守・セキュリティ監視まで　日々の業務を支えるシステムを、まとめてサポートします</p>
          <div className="hero-cta">
            <Link className="hero-cta-primary" href="/contact/">無料診断を相談する<span className="header-contact-arrow-circle" aria-hidden="true">
                <svg className="header-contact-icon" width="27" height="14" viewBox="0 0 27 14" fill="none">
                  <path d="M1 11.5H25L17.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span></Link>
            <Link className="hero-cta-secondary" href="https://www.mogcia.net/services/system">開発を依頼する<span className="header-contact-arrow-circle" aria-hidden="true">
                <svg className="header-contact-icon" width="27" height="14" viewBox="0 0 27 14" fill="none">
                  <path d="M1 11.5H25L17.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span></Link>
          </div>
        </div></div>
        <figure className="hero-illustration">
          <Image src="/security-hero.png" width={1628} height={966} alt="Webシステムの監視や保護を表すセキュリティのイラスト" priority unoptimized/>
        </figure>
      </div>
    </section>
    <div className="security-marquee" role="img" aria-label={securityHighlights.join(' / ')}>
      <div className="security-marquee-track" aria-hidden="true">
        {[0, 1].map(copy => (
          <div className="security-marquee-group" key={copy}>
            {securityHighlights.map(text => <span key={text}>{text}</span>)}
          </div>
        ))}
      </div>
    </div>

    <Problem/>
    <Solution/>
    <SecurityData/>
    <Rebuild/>
    <AiAnalysis/>
    <Features/>
    <BeforeAfter/>
    <FreeCheck/>
    <Pricing/>
    <Flow/>
    <Faq/>
    <Contact/>
  </div>;
}
