import Script from 'next/script';
import BrandText from '../brand-text';
import { phone, tel, mail, hours, privacy } from '../site';
import './contact.css';
export const metadata = { title: '無料診断の予約・お問い合わせ' };
const fields = [
  {id:'company', label:'会社名', placeholder:'株式会社〇〇', autoComplete:'organization', required:true},
  {id:'name', label:'お名前', placeholder:'山田 太郎', autoComplete:'name', required:true},
  {id:'phone', label:'電話番号', placeholder:'000-0000-0000', type:'tel', autoComplete:'tel', required:true},
  {id:'email', label:'メールアドレス', placeholder:'name@example.co.jp', type:'email', autoComplete:'email', required:true},
  {id:'url', label:'診断したいシステムのURL', placeholder:'https://', type:'url'},
  {id:'time', label:'ご希望の日時', placeholder:'例：11月25日の午後'},
];
export default function Page() {
  return <div className="contact-page"><section className="contact-heading"><div className="wrap"><p className="contact-eyebrow">CONTACT</p><h1>無料診断の予約・お問い合わせ</h1><p>今のシステムの安全性や、作り直し・保守について<br/>まずはお気軽にご相談ください</p></div></section>
    <div className="wrap contact-grid">
      <section className="panel contact-form-panel" aria-label="お問い合わせフォーム"><form className="formrun" action="https://form.run/api/v1/r/au5ujzkybooe0pla2suob6vt" method="post"><h2 className="contact-section-title">ご相談内容をお聞かせください</h2>
        <fieldset><legend>ご用件</legend>{['無料診断の予約','seQmo. の導入について','その他のご相談'].map((x,i)=><label className="choice" key={x}><input type="radio" name="ご用件" value={x} defaultChecked={i===0}/><BrandText>{x}</BrandText></label>)}</fieldset>
        {fields.map(({id,label,required,...props})=><label className="field" key={id} htmlFor={id}><span>{label} <small className={required?'required':''}>{required?'必須':'任意'}</small></span><input id={id} name={label} required={required} data-formrun-required={required ? true : undefined} data-formrun-type={id === 'email' ? 'email' : undefined} {...props}/><span className="contact-field-error" data-formrun-show-if-error={label}>{id === 'email' ? 'メールアドレスを正しく入力してください' : `${label}を入力してください`}</span></label>)}
        <label className="field" htmlFor="message"><span>ご相談内容 <small className="required">必須</small></span><textarea id="message" name="お問い合わせ" rows={5} required data-formrun-required/><span className="contact-field-error" data-formrun-show-if-error="お問い合わせ">お問い合わせ内容を入力してください</span></label>
        <div className="consent"><input id="consent" type="checkbox" name="個人情報利用同意" value="同意する" required data-formrun-required/><div><a href={privacy}>プライバシーポリシー</a><label htmlFor="consent">に同意する（必須）</label></div></div><p className="contact-field-error" data-formrun-show-if-error="個人情報利用同意">個人情報の利用に同意してください</p>
        <div className="_formrun_gotcha" aria-hidden="true"><label htmlFor="_formrun_gotcha">If you are a human, ignore this field</label><input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex={-1} autoComplete="off"/></div>
        <div className="center"><button className="button" type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信する</button></div></form>
      </section>
      <aside className="contact-aside">
        <section className="panel card contact-direct"><h2>お電話・メールでも</h2><a className="contact-number" href={tel}>{phone}</a><p>営業時間：{hours}</p><a href={'mailto:'+mail}>{mail}</a></section>
        <section className="panel card"><h2>無料診断の日程について</h2><p>ご連絡をいただいたあと、担当者が診断の日程をご案内します</p></section>
      </aside>
    </div>
    <Script src="https://sdk.form.run/js/v2/formrun.js" strategy="afterInteractive"/>
  </div>;
}
