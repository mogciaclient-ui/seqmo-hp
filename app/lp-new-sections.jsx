import BrandText from './brand-text';

export function Evolution() {
  const before = ['外からの不正な通信を止める（ファイアウォール・UTM）', 'ウイルスの侵入を防ぐ（ウイルス対策ソフト）', '怪しいメールやサイトを止める（メール・Webフィルタ）'];
  const after = ['システムの状態を継続的に監視', '異常やリスクを早期に検知', 'AIで原因や影響を分かりやすく分析', '必要な対応につなげられる'];
  return <section className="s white" id="evolution"><div className="s-inner">
    <div className="evolution-intro">
      <div className="head evolution-heading"><p className="label">SECURITY CHECK</p><h2><span className="heading-phrase">そのセキュリティ対策</span><span className="heading-phrase">本当に十分ですか？</span></h2><p className="evolution-description">ファイアウォール・UTM・ウイルス対策ソフトなどで「外側」は守れても<br className="pc"/>システム内部の弱点や設定の問題は見えません</p></div>
      <div className="evolution-concerns"><div className="evolution-bubbles">{['UTMは入れている', 'ウイルス対策ソフトもある', 'ファイアウォールも設定している', 'これで大丈夫…？'].map((text, i) => <p className={i === 3 ? 'is-worried' : ''} key={text}>{text}</p>)}</div><img src="/security-worried-worker.png" width="1254" height="1254" alt="セキュリティ対策が十分か悩む担当者" loading="lazy"/></div>
    </div>
    <div className="evolution-comparison">
      <article className="panel evolution-card"><p className="label">BEFORE</p><h3>外側のブロックだけの対策</h3><div className="evolution-card-illustration"><img src="/security-firewall-office.png" width="1254" height="1254" alt="ファイアウォールが外部からの通信を防ぐ一方、オフィス内部には不明な状態が残るイラスト" loading="lazy"/></div><ul>{before.map(text => <li key={text}><span aria-hidden="true">✓</span>{text}</li>)}</ul><p className="evolution-warning">システムの弱点・設定ミス・内部の異常までは分からない</p></article>
      <span className="evolution-next" aria-hidden="true">→</span>
      <article className="panel evolution-card evolution-card-after"><p className="label">WITH seQmo.</p><h3><BrandText>seQmo.で、もう一歩先の対策</BrandText></h3><div className="evolution-card-illustration"><img src="/security-monitored-office.png" width="1254" height="1254" alt="外側の対策に加え、seQmo.でシステムの状態や異常を監視するオフィスのイラスト" loading="lazy"/></div><ul>{after.map(text => <li key={text}><span aria-hidden="true">✓</span>{text}</li>)}</ul></article>
    </div>
    <p className="evolution-summary">今の外側の対策に<BrandText>seQmo.</BrandText>の「見える・気づける」監視をプラス</p>
  </div></section>;
}

const REBUILD_STEPS = [
  ['無料診断', 'sky', '現状を確認', ['外部から確認できる設定や', '使用技術・脆弱性情報を調査']],
  ['MOGCIA', 'pink', '作り直す', ['見つかった問題を', 'MOGCIAが改修・作り直し']],
  ['seQmo.', 'mint', '見守り続ける', ['新しいシステムも', '24時間見守る']],
];

export function Rebuild() {
  return <section className="s white" id="rebuild"><div className="s-inner">
    <div className="head">
      <p className="label">FROM CHECK TO REBUILD</p>
      <h2><span className="heading-phrase">システムの改修・再構築も</span><span className="heading-phrase">サポート</span></h2>
      <p className="sub" style={{fontWeight:"400",lineHeight:"2"}}><BrandText>{'診断結果をもとに必要な追加調査を行い、MOGCIAが改修・作り直しをご提案します'}</BrandText><br/><BrandText>{'既存の仕組みを活かす改修か、新たなシステムへの再構築か、状態とご要望に合わせてご提案します'}</BrandText></p>
    </div>
    <ol className="rebuild-flow">
      {REBUILD_STEPS.map(([who, tone, title, lines], i) => (
        <li key={title} className="rebuild-step">
          <div className="card rebuild-card">
            <span className={'rebuild-tag ' + tone}><BrandText>{who}</BrandText></span>
            <h3>{title}</h3>
            <p>{lines[0]}<br/>{lines[1]}</p>
          </div>
          {i < REBUILD_STEPS.length - 1 && <span className="rebuild-arrow" aria-hidden="true">→</span>}
        </li>
      ))}
    </ol>
    <div className="rebuild-cta">
      <a className="development-details" href="https://www.mogcia.net/services/system">
        <span>開発について相談する</span>
        <span className="header-contact-arrow-circle" aria-hidden="true">
      <svg className="header-contact-icon" width="27" height="14" viewBox="0 0 27 14" fill="none">
        <path d="M1 11.5H25L17.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
      </a>
    </div>
  </div></section>;
}
