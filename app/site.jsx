import Link from 'next/link';

export const company = 'https://www.mogcia.net';
export const privacy = company + '/privacy-policy';
export const phone = '092-517-9804';
export const tel = 'tel:0925179804';
export const mail = 'info@mogcia.jp';
export const hours = '平日 10:00 - 17:00（土日祝除く）';
export const nav = [
  ['機能', '/#features'],
  ['無料診断', '/#freecheck'],
  ['料金', '/#pricing'],
  ['よくある質問', '/#faq'],
];

export function Button({href='/contact/', tone='pink', children='無料診断を予約する'}) {
  const cls='button '+tone;
  return href.startsWith('/') ? <Link className={cls} href={href}>{children}</Link> : <a className={cls} href={href}>{children}</a>;
}
export function Badge({tone='yellow',children}) { return <span className={'badge '+tone}>{children}</span>; }
export function Mascot({tone='yellow',label}) {
  return <div className={'mascot '+tone} aria-hidden="true">
    <svg viewBox="0 0 220 220"><path d="M109 36 135 9 149 50 188 31 178 75 216 87 187 111 216 143 174 150 181 193 144 174 130 214 109 181 76 204 71 163 29 177 48 138 9 119 47 100 25 63 69 65 71 19Z" fill="var(--tone)" stroke="var(--ink)" strokeWidth="8" strokeLinejoin="round"/>
    <g stroke="var(--ink)" strokeWidth="5" fill="white"><ellipse cx="92" cy="107" rx="23" ry="32"/><ellipse cx="139" cy="107" rx="23" ry="32"/></g>
    <g fill="var(--ink)"><ellipse cx="85" cy="119" rx="12" ry="16"/><ellipse cx="132" cy="119" rx="12" ry="16"/></g>
    <g fill="white"><circle cx="81" cy="113" r="4"/><circle cx="128" cy="113" r="4"/></g></svg>
    {label && <span>{label}</span>}
  </div>;
}
export function Subhero({tag,title,description,tone='yellow',label}) {
  return <div className="wrap subhero">
    <div><Badge>{tag}</Badge><h1>{title}</h1><p>{description}</p></div>
    <Mascot tone={tone} label={label}/>
  </div>;
}
export function Band({tone='white',title,tag,desc,children}) {
  return <section className={'band '+tone}><div className="wrap">
    {title && <div className="section-title">{tag && <Badge>{tag}</Badge>}<h2>{title}</h2>{desc && <p>{desc}</p>}</div>}
    {children}
  </div></section>;
}
export function Cards({items,cols=3,tone='yellow'}) {
  return <div className={'cards cols-'+cols}>{items.map(([title,body,tag,color],i)=><article key={title} className="panel card">
    {tag !== false && <Badge tone={color || tone}>{tag || String(i+1).padStart(2,'0')}</Badge>}
    <h3>{title}</h3><p>{body}</p>
  </article>)}</div>;
}
export function Callout() {
  return <section className="callout-area"><div className="wrap"><div className="panel callout pink">
    <span className="eye" aria-hidden="true"/><h2>まずは、今のシステムを見てみませんか？</h2>
    <p>無料診断は、スタッフが伺ってその場でご説明します</p>
    <div className="actions centered"><Button tone="white"/><Button href={tel} tone="yellow">電話で相談する {phone}</Button></div>
  </div></div></section>;
}
export const features = [
  ['見張る','ログイン、API、権限の動きを24時間記録　SDKを入れるだけで見張りを始められます','STEP 1','sky'],
  ['気づく','ログイン失敗の急増や、大量のデータ取得を見つけて、すぐお知らせ','STEP 2','pink'],
  ['伝える','何が起きて、何をすればいいか　AIが事実と推測を分けて、わかる言葉で説明します','STEP 3','purple'],
  ['守る','内容を確認し、承認してからブロック　もしもの時には緊急保護モード','STEP 4','mint'],
];
export const timeline = [
  ['02:14','ログイン失敗が5分で48回','検知','pink'],['02:15','担当者にメールと管理画面でお知らせ','通知','yellow'],
  ['02:16','AIが考えられる原因と対応をまとめる','説明','purple'],['08:40','朝、内容を確認してブロックを承認','防御','mint'],
];
export const scanPlaces = [
  ['ドメイン・メール','会社の住所にあたる場所　なりすましメールやドメインの期限切れに備えます'],
  ['サーバー（入口）','システムが置かれている場所　外部に公開されている入口を確認します'],
  ['システム本体（部品）','システムを組み立てている部品　古い部品に既知の弱点が残っていないか確認します'],
  ['ログイン・管理画面','システムの玄関と管理者の部屋　外から見えるログイン画面などを確認します'],
  ['データの窓口（API）','画面の裏でデータを出し入れする窓口　外から見える情報を確認します'],
  ['つながり・評判','外部サービスなどとのつながりや、危険なサイトとして扱われていないかを確認します'],
];
export const onboarding = [['無料診断','URLをもとに診断し、結果はPDFでお渡しします'],['守り方のご提案','どこを見張るかを一緒に決めます'],['導入・見張り開始','設定はseQmo.におまかせください']];
export function DataTable({columns,rows}) {
  return <div className="table-frame"><table><thead><tr>{columns.map(x=><th key={x} scope="col">{x}</th>)}</tr></thead>
    <tbody>{rows.map(([name,...cells])=><tr key={name}><th scope="row">{name}</th>{cells.map((x,i)=><td key={i}>{x}</td>)}</tr>)}</tbody>
  </table></div>;
}
