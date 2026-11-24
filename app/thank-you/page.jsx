import Link from 'next/link';
import { phone, tel, mail, hours } from '../site';
import './thank-you.css';

export const metadata = {
  title: 'お問い合わせありがとうございます',
  description: 'seQmo.へのお問い合わせを受け付けました　内容を確認のうえ、担当者よりご連絡します',
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return <div className="thank-you-page"><div className="wrap">
    <section className="panel thank-you-card" aria-labelledby="thank-you-title">
      <span className="thank-you-check" aria-hidden="true"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l4 4L19 6"/></svg></span>
      <p className="thank-you-label">THANK YOU</p>
      <h1 id="thank-you-title">お問い合わせありがとうございます</h1>
      <p className="thank-you-message">お問い合わせを受け付けました<br/>内容を確認のうえ、担当者よりご連絡します</p>
      <div className="thank-you-details"><h2>このあとのご案内</h2><p>無料診断をご希望の方には、対象のWebサイトや日程について確認させていただきます<br/>開発・保守・監視のご相談は、ご希望と現在の環境を伺ったうえで進め方をご案内します</p></div>
      <Link className="button thank-you-home" href="/">トップページへ戻る</Link>
    </section>
    <aside className="thank-you-contact" aria-label="お電話・メールでのお問い合わせ"><p>お急ぎの場合は、お電話またはメールでご連絡ください</p><div><a href={tel}>{phone}</a><a href={'mailto:'+mail}>{mail}</a></div><p>営業時間：{hours}</p></aside>
  </div></div>;
}
