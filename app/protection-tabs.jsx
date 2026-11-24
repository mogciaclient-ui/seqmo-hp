'use client';
import { useState } from 'react';

const ITEMS = [
  ['アクセス制限', ['許可されたネットワークからのアクセスを基本とし、登録されていないIPアドレスからの接続を制限', '会社の利用環境に合わせてアクセスルールを設定します'], 'sky', '図：許可したネットワークだけ通し、それ以外は制限するイメージ',
    <><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="M9 10h6"/></>],
  ['アカウント・ログイン保護', ['不審なログインやアカウントの異常が発生した場合に備え、対象アカウントの一時停止やセッションの無効化などを行える仕組みを提供します'], 'yellow', '図：不審なアカウントを一時停止するイメージ',
    <><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6"/><path d="M17 3l4 4M21 3l-4 4"/></>],
  ['重要データの保護', ['顧客情報などの重要なデータに対して、閲覧・編集・出力の権限を制御', '異常時にはデータ出力や重要操作を一時的に制限できるようにします'], 'mint', '図：重要なデータの出力を制限するイメージ',
    <><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>],
  ['緊急保護モード', ['重大な異常が発生した際、システム全体を止めるのではなく、必要な機能だけを制限', '被害の拡大を抑えるための対応を支援します'], 'pink', '図：必要な機能だけを制限するイメージ',
    <><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/><path d="M12 8v5"/><path d="M12 16h.01"/></>],
];

const PREVIEWS = [
  { src: '/seqmo-access-control.jpg', width: 1440, height: 1114, alt: 'seQmo.のアクセス制限設定画面。許可するネットワークとアクセスルール、最近のアクセス判定を確認できます' },
  { src: '/seqmo-login-protection.jpg', width: 1440, height: 1216, alt: 'seQmo.のアカウント・ログイン保護画面。対象アカウントやログインセッション、一時停止などの保護操作を確認できます' },
  { src: '/seqmo-data-protection.jpg', width: 1440, height: 1286, alt: 'seQmo.の重要データの保護画面。データの利用権限や出力・重要操作の一時的な制限を確認できます' },
  { src: '/seqmo-emergency-protection.jpg', width: 1440, height: 1380, alt: 'seQmo.の緊急保護モード画面。機能ごとの保護状態や制限内容、解除・復旧の手順を確認できます' },
];

export default function ProtectionTabs() {
  const [active, setActive] = useState(0);
  const [title, lines, tone, figure, icon] = ITEMS[active];
  const preview = PREVIEWS[active];
  return <div className="pt">
    <div className="pt-tabs" role="tablist" aria-label="保護機能">
      {ITEMS.map(([t], i) => (
        <button key={t} type="button" role="tab" id={`pt-tab-${i}`} aria-selected={active === i} aria-controls="pt-panel"
          className={'pt-tab' + (active === i ? ' is-active' : '')} onClick={() => setActive(i)}>
          <span className="pt-no">{String(i + 1).padStart(2, '0')}</span><span className="pt-name">{t}</span>
        </button>
      ))}
    </div>
    <div className="pt-panel" role="tabpanel" id="pt-panel" aria-labelledby={`pt-tab-${active}`}>
      <div>
        <span className={'pt-icon ' + tone}><svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg></span>
        <h3 className="pt-title">{title}</h3>
        <p className="pt-text">{lines.map((l, k) => <span key={k}>{l}{k < lines.length - 1 && <br/>}</span>)}</p>
      </div>
      {preview ? <figure className="pt-preview">
        <img src={preview.src} alt={preview.alt} width={preview.width} height={preview.height} loading="lazy" />
        <figcaption>※画像はイメージです</figcaption>
      </figure> : <div className="ph pt-figure"><svg aria-hidden="true" width="22" height="18" viewBox="0 0 24 20" fill="none" stroke="#1f1b18" strokeWidth="1.8"><rect x="1" y="1" width="22" height="18" rx="3"/><circle cx="7" cy="7" r="2"/><path d="M1 16l7-6 5 4 4-3 6 5"/></svg><span>{figure}</span></div>}
    </div>
  </div>;
}
