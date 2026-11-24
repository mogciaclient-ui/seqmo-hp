const ipa = 'https://www.ipa.go.jp/pressrelease/2024/press20250214.html';
const verizon = 'https://www.verizon.com/business/resources/reports/dbir/';
const rapid7 = 'https://www.rapid7.com/blog/post/tr-q3-2026-threat-update-attackers-exploiting-vulnerabilities-within-3-days/';

export function SecurityData() {
  const stats = [
    ['約7', '割', '組織的な体制が未整備', 'セキュリティの担当・役割が明確でない'],
    ['73', '万円', '被害額の平均', '最大で1億円のケースも'],
    ['5.8', '日', '復旧までの平均日数', '復旧に50日以上かかった企業も'],
    ['約7', '割', '取引先にも影響', 'サイバーインシデントが発生した企業のうち'],
  ];
  return <section className="s security-data" id="security-data"><div className="s-inner">
    <div className="head"><p className="label">SECURITY REPORT</p><h2>中小企業のセキュリティ、実はこんな状況です</h2></div>
    <div className="security-stat-grid">{stats.map(([value, unit, title, detail]) => <article className="panel security-stat" key={title}><h3>{title}</h3><p className="security-number">{value}<span>{unit}</span></p><p className="security-stat-detail">{detail}</p></article>)}</div>
    <p className="security-data-message">「うちは小さいから大丈夫」は、もう通用しません</p>
    <p className="security-source">出典：<a href={ipa}>IPA「2024年度 中小企業における情報セキュリティ対策の実態調査」速報版（2025年2月）</a><br/>全国の中小企業4,191社への調査　被害額・復旧日数は過去3期内に発生したサイバーインシデントについての平均</p>
  </div></section>;
}

export function ResponseGap() {
  return <section className="s security-data" id="response-gap"><div className="s-inner">
    <div className="head"><p className="label">DATA</p><h2>攻撃は速く、直すのは遅い</h2><p className="sub">公開されたシステムの弱点は、短期間で攻撃に使われています<br/>一方で、修正が完了するまでには時間がかかっています</p></div>
    <div className="panel security-timeline">
      <div className="security-time-row"><div><h3>攻撃に使われるまで</h3><p>高深刻度の脆弱性の公開から<br/>悪用までの平均</p></div><div className="security-bar-track"><span className="security-bar attack"/><strong>約3日</strong></div></div>
      <div className="security-time-row"><div><h3>修正が完了するまで</h3><p>脆弱性の完全な修正に<br/>要した日数の中央値</p></div><div className="security-bar-track"><span className="security-bar repair"/><strong>約43日</strong></div></div>
      <p className="security-gap-label">修正を待つ間も、リスクへの備えが必要です</p>
      <p className="security-chart-note">※異なる調査・対象・起点による参考比較です　同一の脆弱性における経過日数や差を示すものではありません</p>
    </div>
    <div className="security-facts"><article className="panel security-fact"><p className="security-number">31<span>%</span></p><div><h3>侵入経路の最多は「脆弱性の悪用」</h3><p>Verizonの2026年調査では、情報漏洩の初期侵入経路で最多</p></div></article><article className="panel security-fact"><p className="security-number">+11<span>日</span></p><div><h3>修正までの日数は、さらに長く</h3><p>完全な修正までの中央値は前年の32日から43日に</p></div></article></div>
    <p className="security-data-message">古いままのシステムを見直し、監視と改修の両面から備える</p>
    <p className="security-source">出典：<a href={verizon}>Verizon「2026 Data Breach Investigations Report」</a> ／ <a href={rapid7}>Rapid7「Q3 2026 Threat Landscape Report」</a><br/>約3日は高深刻度の脆弱性の公開から悪用までの平均　約43日はVerizonの調査における完全な修正までの中央値</p>
  </div></section>;
}
