import Link from 'next/link';
import BrandText from './brand-text';
import ProblemResolution from './problem-resolution';

export function Problem() {
  return <section className="s white" id="problem"><div className="s-inner">

<div className="head problem-heading"><h2>こんな<span className="problem-heading-emphasis"><span className="problem-heading-rays" aria-hidden="true"><i/><i/><i/></span>お悩み</span>、<span className="problem-heading-ending">ありませんか？</span></h2>
<p className="sub" style={{fontWeight:"400"}}>セキュリティ対策から日々のシステム管理まで<br />こんな不安や疑問を抱えていませんか？</p></div><div className="problem-design" data-circle-design="double"><div className="problem-circles"><div className="problem-circle" style={{"--problem-shadow":"#8fd4fe"}}>
<p className="problem-circle-title"><span >情報漏洩のニュースを<br/>見るたび、<br/>自社も心配になる</span></p><span className="problem-person-icon"><img src="/problem-security-news.png" alt="自社のセキュリティを心配するオフィスワーカー" width="1254" height="1254" loading="lazy"/></span></div><div className="problem-circle" style={{"--problem-shadow":"#8fd4fe"}}>
<p className="problem-circle-title"><span >セキュリティ対策、<br/>何から手をつければ<br/>いいか分からない</span></p><span className="problem-person-icon"><img src="/problem-security-measures.png" alt="セキュリティ対策に悩むITワーカー" width="1254" height="1254" loading="lazy"/></span></div><div className="problem-circle" style={{"--problem-shadow":"#8fd4fe"}}>
<p className="problem-circle-title"><span >古い業務システムを、<br/>このまま使い続けて<br/>いいのか不安</span></p><span className="problem-person-icon"><img src="/problem-legacy-system.png" alt="古いシステムに不安を感じるワーカー" width="1254" height="1254" loading="lazy"/></span></div><div className="problem-circle" style={{"--problem-shadow":"#8fd4fe"}}>
<p className="problem-circle-title"><span >システムに詳しい<br/>社員がいない</span></p><span className="problem-person-icon"><img src="/problem-it-staff.png" alt="IT人材不足に悩むビジネスマン" width="1254" height="1254" loading="lazy"/></span></div></div></div><div style={{position:"relative",maxWidth:"1040px",margin:"64px auto 0"}}>
<div style={{height:"3px",background:"#1f1b18"}}></div>
<span className="problem-divider-arrow" aria-hidden="true"/>
</div>
<ProblemResolution/>


  </div></section>;
}

export function Solution() {
  const items = [
    {
      title: <>日々の見守りは、seQmo<span className="brand-dot">.</span>に</>,
      image: '管理画面：監視・保護状況',
      imageSrc: '/reference-home-live.jpg',
      imageAlt: 'seQmo.の管理画面。アクセスの動きやシステム稼働状況、確認が必要なお知らせを一覧で確認できます',
      imageHeight: 940,
      description: 'アクセスや稼働状況を継続的に見守り、日々の変化や確認が必要なポイントを管理画面で把握できます',
    },
    {
      title: '何かあれば、知らせてくれる',
      image: '通知画面：確認が必要なお知らせ',
      imageSrc: '/seqmo-notifications.jpg',
      imageAlt: 'seQmo.のお知らせ画面。不審なログインやシステムの異常、確認が必要な内容と対応方法を確認できます',
      imageHeight: 1096,
      description: '不審なアクセスやシステムの異常を検知し、確認が必要な内容を分かりやすく通知します',
    },
    {
      title: '困ったときも、対応が分かる',
      image: 'AIの説明画面：対応方法',
      imageSrc: '/seqmo-ai-assistant.jpg',
      imageAlt: 'seQmo.のAIアシスタント画面。問題の状況や対応手順、保守会社への相談内容を確認できます',
      imageHeight: 1080,
      imageCaption: '※画像はイメージです',
      description: 'AIが問題の内容や対応方法を整理し、必要に応じて保守会社への相談につなげられます',
    },
  ];

  return <section className="s white" id="solution">
    <div className="s-inner">
      <div className="head">
        <h2>システムの状況も、異常のお知らせも、ひとつの画面で</h2>
        <p className="sub solution-intro">
          管理画面で稼働状況を確認し、気になる通知から詳細をチェック
          <span className="solution-intro-ending">確認から相談までの流れを、3つの画面でご紹介します</span>
        </p>
      </div>
      <div className="solution-cards">
        {items.map(item => (
          <article className="solution-card" key={item.image}>
            {item.imageSrc ? <figure className="solution-card-preview">
              <img src={item.imageSrc} alt={item.imageAlt} width="1440" height={item.imageHeight} loading="lazy" />
              <figcaption>{item.imageCaption ?? '※画面はイメージです'}</figcaption>
            </figure> : <div className="solution-card-image">
              <svg aria-hidden="true" width="24" height="20" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="1" y="1" width="22" height="18" rx="3"/>
                <circle cx="7" cy="7" r="2"/>
                <path d="M1 16l7-6 5 4 4-3 6 5"/>
              </svg>
              <span>{item.image}</span>
            </div>}
            <div className="solution-card-copy">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>;
}

export function BeforeAfter() {
  return <section className="s soft" id="beforeafter"><div className="s-inner">

<div className="head" style={{marginBottom:"46px"}}><p className="label">BEFORE / AFTER</p><h2>導入すると、システム管理はどう変わる？</h2>
<p className="sub" style={{fontWeight:"400",lineHeight:"1.9"}}>担当者への確認や、問題が起きてからの調査に頼っていた管理から<br />記録をもとに確認・共有できる運用へ変わります</p></div><div className="grid3" style={{gap:"26px",alignItems:"stretch"}}><div style={{display:"flex",flexDirection:"column"}}>
<div style={{border:"2.5px solid #1f1b18",borderRadius:"13px 13px 0 0",background:"#ffffff",padding:"22px 24px",flex:"1"}}><span className="badge" style={{background:"#ffffff",borderColor:"#1f1b18",color:"#1f1b18"}}>BEFORE 01</span><h3 style={{marginTop:"12px",color:"#1f1b18",fontSize:"1rem"}}>システムの状況は、詳しい担当者に聞かないと分からない</h3><p style={{marginTop:"8px",fontSize:".9rem",lineHeight:"1.8",color:"#1f1b18"}}>確認方法が担当者の経験に依存し、不在時や引き継ぎの際に状況を把握しにくい</p></div>
<div style={{display:"flex",justifyContent:"center",margin:"-16px 0",position:"relative",zIndex:"1"}}><span style={{display:"flex",width:"44px",height:"44px",borderRadius:"999px",border:"2.5px solid #1f1b18",background:"#ffe86c",alignItems:"center",justifyContent:"center",transform:"rotate(90deg)"}}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></div>
<div style={{border:"2.5px solid #1f1b18",borderRadius:"0 0 13px 13px",background:"#d9effd",boxShadow:"5px 6px 0 #1f1b18",padding:"30px 24px 22px",flex:"1"}}><span className="badge yellow">AFTER 01</span><h3 style={{marginTop:"12px",fontSize:"1rem"}}>共通の管理画面をもとに、状況を共有できる</h3><p style={{marginTop:"8px",fontSize:".9rem",lineHeight:"1.8",fontWeight:"400"}}>権限を持つ担当者が同じ監視状況や通知を確認でき、引き継ぎや社内共有の材料にできる</p></div></div><div style={{display:"flex",flexDirection:"column"}}>
<div style={{border:"2.5px solid #1f1b18",borderRadius:"13px 13px 0 0",background:"#ffffff",padding:"22px 24px",flex:"1"}}><span className="badge" style={{background:"#ffffff",borderColor:"#1f1b18",color:"#1f1b18"}}>BEFORE 02</span><h3 style={{marginTop:"12px",color:"#1f1b18",fontSize:"1rem"}}>問題が起きるたびに、記憶や聞き取りから調べている</h3><p style={{marginTop:"8px",fontSize:".9rem",lineHeight:"1.8",color:"#1f1b18"}}>発生時刻や直前の操作が分からず、保守担当者への説明や調査の準備に時間がかかる</p></div>
<div style={{display:"flex",justifyContent:"center",margin:"-16px 0",position:"relative",zIndex:"1"}}><span style={{display:"flex",width:"44px",height:"44px",borderRadius:"999px",border:"2.5px solid #1f1b18",background:"#ffe86c",alignItems:"center",justifyContent:"center",transform:"rotate(90deg)"}}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></div>
<div style={{border:"2.5px solid #1f1b18",borderRadius:"0 0 13px 13px",background:"#d9effd",boxShadow:"5px 6px 0 #1f1b18",padding:"30px 24px 22px",flex:"1"}}><span className="badge yellow">AFTER 02</span><h3 style={{marginTop:"12px",fontSize:"1rem"}}>残された記録から、調査を始められる</h3><p style={{marginTop:"8px",fontSize:".9rem",lineHeight:"1.8",fontWeight:"400"}}>記録された日時・利用者・操作を手がかりに経緯を追い、保守担当者と具体的な情報を共有できる</p></div></div><div style={{display:"flex",flexDirection:"column"}}>
<div style={{border:"2.5px solid #1f1b18",borderRadius:"13px 13px 0 0",background:"#ffffff",padding:"22px 24px",flex:"1"}}><span className="badge" style={{background:"#ffffff",borderColor:"#1f1b18",color:"#1f1b18"}}>BEFORE 03</span><h3 style={{marginTop:"12px",color:"#1f1b18",fontSize:"1rem"}}>異常への対応が、連絡を受けてからの後追いになる</h3><p style={{marginTop:"8px",fontSize:".9rem",lineHeight:"1.8",color:"#1f1b18"}}>利用者や取引先から指摘されるまで問題を把握できず、確認と対応が後手に回りやすい</p></div>
<div style={{display:"flex",justifyContent:"center",margin:"-16px 0",position:"relative",zIndex:"1"}}><span style={{display:"flex",width:"44px",height:"44px",borderRadius:"999px",border:"2.5px solid #1f1b18",background:"#ffe86c",alignItems:"center",justifyContent:"center",transform:"rotate(90deg)"}}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></div>
<div style={{border:"2.5px solid #1f1b18",borderRadius:"0 0 13px 13px",background:"#d9effd",boxShadow:"5px 6px 0 #1f1b18",padding:"30px 24px 22px",flex:"1"}}><span className="badge yellow">AFTER 03</span><h3 style={{marginTop:"12px",fontSize:"1rem"}}>通知を起点に、確認と対応の判断を進められる</h3><p style={{marginTop:"8px",fontSize:".9rem",lineHeight:"1.8",fontWeight:"400"}}>検知された異常の内容を通知から確認し、必要に応じて調査の依頼や保護操作の判断につなげられる</p></div></div></div>

  </div></section>;
}

export function Features() {
  return <section className="s white" id="features"><div className="s-inner">

<div className="head" style={{marginBottom:"46px"}}><p className="label">FEATURES</p><h2>監視・記録・保護を支える8つの機能</h2>
<p className="sub" style={{fontWeight:"400",lineHeight:"1.9"}}>ログインやデータ操作の記録から、アクセス制限・緊急保護まで<br />システムの構成や連携状況に合わせて、必要な機能を組み合わせます</p></div><div className="grid3" style={{gap:"22px"}}><div className="panel" style={{padding:"26px 24px"}}><div style={{display:"flex",alignItems:"center",gap:"14px"}}><span className="sky" style={{flex:"none",display:"flex",width:"58px",height:"58px",borderRadius:"16px",border:"2.5px solid #1f1b18",alignItems:"center",justifyContent:"center"}}><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><path d="M10 17l5-5-5-5" /><path d="M15 12H3" /></svg></span><p style={{fontWeight:"700",fontSize:"1.6rem",color:"#cfe6f5",lineHeight:"1",fontFamily:"system-ui,sans-serif"}}>01</p></div><h3 style={{marginTop:"16px",fontSize:"1.15rem"}}>アクセス・ログイン監視</h3><p style={{marginTop:"8px",fontSize:".9rem",lineHeight:"1.8"}}>誰が、いつ、どこからシステムにアクセスしたのかを記録。普段と異なるアクセスや不審なログインを検知します</p></div><div className="panel" style={{padding:"26px 24px"}}><div style={{display:"flex",alignItems:"center",gap:"14px"}}><span className="pink" style={{flex:"none",display:"flex",width:"58px",height:"58px",borderRadius:"16px",border:"2.5px solid #1f1b18",alignItems:"center",justifyContent:"center"}}><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M10 8.5v5l4-2.5z" /><path d="M8 21h8" /></svg></span><p style={{fontWeight:"700",fontSize:"1.6rem",color:"#cfe6f5",lineHeight:"1",fontFamily:"system-ui,sans-serif"}}>02</p></div><h3 style={{marginTop:"16px",fontSize:"1.15rem"}}>操作履歴・Session Replay</h3><p style={{marginTop:"8px",fontSize:".9rem",lineHeight:"1.8"}}>システム内での操作履歴を記録。必要に応じて操作画面を再現し、エラーや不審な動きの調査に役立てます</p></div><div className="panel" style={{padding:"26px 24px"}}><div style={{display:"flex",alignItems:"center",gap:"14px"}}><span className="mint" style={{flex:"none",display:"flex",width:"58px",height:"58px",borderRadius:"16px",border:"2.5px solid #1f1b18",alignItems:"center",justifyContent:"center"}}><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-8 6 16 3-8h4" /></svg></span><p style={{fontWeight:"700",fontSize:"1.6rem",color:"#cfe6f5",lineHeight:"1",fontFamily:"system-ui,sans-serif"}}>03</p></div><h3 style={{marginTop:"16px",fontSize:"1.15rem"}}>システム稼働・エラー監視</h3><p style={{marginTop:"8px",fontSize:".9rem",lineHeight:"1.8"}}>システムの停止や処理エラーを監視。注文・請求・データ連携などの業務処理に問題が発生した際も把握できます</p></div><div className="panel" style={{padding:"26px 24px"}}><div style={{display:"flex",alignItems:"center",gap:"14px"}}><span className="yellow" style={{flex:"none",display:"flex",width:"58px",height:"58px",borderRadius:"16px",border:"2.5px solid #1f1b18",alignItems:"center",justifyContent:"center"}}><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></svg></span><p style={{fontWeight:"700",fontSize:"1.6rem",color:"#cfe6f5",lineHeight:"1",fontFamily:"system-ui,sans-serif"}}>04</p></div><h3 style={{marginTop:"16px",fontSize:"1.15rem"}}>データ操作・情報保護監視</h3><p style={{marginTop:"8px",fontSize:".9rem",lineHeight:"1.8"}}>顧客情報の大量取得やCSV出力、重要なデータの変更・削除を監視。通常と異なる操作の兆候を確認できます</p></div><div className="panel" style={{padding:"26px 24px"}}><div style={{display:"flex",alignItems:"center",gap:"14px"}}><span className="sky" style={{flex:"none",display:"flex",width:"58px",height:"58px",borderRadius:"16px",border:"2.5px solid #1f1b18",alignItems:"center",justifyContent:"center"}}><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h18v13H3zM8 21h8M12 17v4"/></svg></span><p style={{fontWeight:"700",fontSize:"1.6rem",color:"#cfe6f5",lineHeight:"1",fontFamily:"system-ui,sans-serif"}}>05</p></div><h3 style={{marginTop:"16px",fontSize:"1.15rem"}}>アクセス制限</h3><p style={{marginTop:"8px",fontSize:".9rem",lineHeight:"1.8"}}>許可されたネットワークからの接続を基本とし、未登録のIPアドレスからのアクセスを制限します</p></div><div className="panel" style={{padding:"26px 24px"}}><div style={{display:"flex",alignItems:"center",gap:"14px"}}><span className="yellow" style={{flex:"none",display:"flex",width:"58px",height:"58px",borderRadius:"16px",border:"2.5px solid #1f1b18",alignItems:"center",justifyContent:"center"}}><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 9a4 4 0 1 0 8 0a4 4 0 1 0-8 0M4 21c1-7 15-7 16 0"/></svg></span><p style={{fontWeight:"700",fontSize:"1.6rem",color:"#cfe6f5",lineHeight:"1",fontFamily:"system-ui,sans-serif"}}>06</p></div><h3 style={{marginTop:"16px",fontSize:"1.15rem"}}>アカウント・ログイン保護</h3><p style={{marginTop:"8px",fontSize:".9rem",lineHeight:"1.8"}}>不審なログインに備え、対象アカウントの一時停止やログインセッションの無効化を行えます</p></div><div className="panel" style={{padding:"26px 24px"}}><div style={{display:"flex",alignItems:"center",gap:"14px"}}><span className="mint" style={{flex:"none",display:"flex",width:"58px",height:"58px",borderRadius:"16px",border:"2.5px solid #1f1b18",alignItems:"center",justifyContent:"center"}}><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11h16v10H4zM8 11V7a4 4 0 0 1 8 0v4M12 15v2"/></svg></span><p style={{fontWeight:"700",fontSize:"1.6rem",color:"#cfe6f5",lineHeight:"1",fontFamily:"system-ui,sans-serif"}}>07</p></div><h3 style={{marginTop:"16px",fontSize:"1.15rem"}}>重要データの保護</h3><p style={{marginTop:"8px",fontSize:".9rem",lineHeight:"1.8"}}>閲覧・編集・出力の権限を制御し、異常時にはデータ出力や重要操作を一時的に制限できます</p></div><div className="panel" style={{padding:"26px 24px"}}><div style={{display:"flex",alignItems:"center",gap:"14px"}}><span className="pink" style={{flex:"none",display:"flex",width:"58px",height:"58px",borderRadius:"16px",border:"2.5px solid #1f1b18",alignItems:"center",justifyContent:"center"}}><svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-8 10-8 10S4 17 4 12V6zM12 8v5M12 16h.01"/></svg></span><p style={{fontWeight:"700",fontSize:"1.6rem",color:"#cfe6f5",lineHeight:"1",fontFamily:"system-ui,sans-serif"}}>08</p></div><h3 style={{marginTop:"16px",fontSize:"1.15rem"}}>緊急保護モード</h3><p style={{marginTop:"8px",fontSize:".9rem",lineHeight:"1.8"}}>重大な異常が発生した際、必要な機能だけを制限し、業務への影響と被害の拡大を抑える対応を支援します</p></div></div>

  </div></section>;
}

export function AiAnalysis() {
  return <section className="s soft" id="aianalysis"><div className="s-inner">

<div className="head" style={{marginBottom:"44px"}}><p className="label">AI ANALYSIS</p><h2>蓄積した記録から、異常の原因や影響をAIで分析</h2>
<p className="sub" style={{fontWeight:"400",lineHeight:"1.9"}}>アクセス・操作・エラーの記録を照合し、普段と異なる傾向や原因の候補を整理<br />チャットでの質問にも、監視記録をもとに回答します</p></div>
<div style={{display:"grid",gridTemplateColumns:"600px 1fr",gap:"48px",alignItems:"center"}}>
<div><div style={{width:"100%",border:"2.5px solid #1f1b18",borderRadius:"22px",background:"#f4faff",boxShadow:"8px 9px 0 #1f1b18",overflow:"hidden"}}>
<div style={{display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",background:"#8fd4fe",borderBottom:"2.5px solid #1f1b18",fontWeight:"700",fontSize:".9rem"}}>
<span style={{display:"flex",gap:"5px"}}><i style={{width:"12px",height:"12px",borderRadius:"50%",border:"1.5px solid #1f1b18",background:"#ff799a"}}></i><i style={{width:"12px",height:"12px",borderRadius:"50%",border:"1.5px solid #1f1b18",background:"#ffe86c"}}></i><i style={{width:"12px",height:"12px",borderRadius:"50%",border:"1.5px solid #1f1b18",background:"#8be0c3"}}></i></span>
seQmo<span className="brand-dot">.</span> AIアシスタント</div>
<div style={{display:"grid",gap:"14px",padding:"20px"}}><div style={{display:"flex",justifyContent:"flex-end"}}><p style={{maxWidth:"75%",background:"#1f1b18",color:"#fff",borderRadius:"18px 18px 4px 18px",padding:"12px 18px",fontWeight:"400",fontSize:".95rem"}}>昨日、変なアクセスはあった？</p></div><div style={{display:"flex",gap:"10px",alignItems:"flex-start"}}><span aria-hidden="true" style={{flex:"none",display:"flex",width:"38px",height:"38px",borderRadius:"999px",background:"#ffe86c",border:"2.5px solid #1f1b18",alignItems:"center",justifyContent:"center"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3"/><circle cx="12" cy="2.5" r="1" fill="#1f1b18" stroke="none"/><rect x="5" y="6" width="14" height="14" rx="4" fill="#fff"/><path d="M2 11v5M22 11v5M9 16h6"/><circle cx="9" cy="11" r="1.2" fill="#1f1b18" stroke="none"/><circle cx="15" cy="11" r="1.2" fill="#1f1b18" stroke="none"/></svg></span><div style={{maxWidth:"82%",background:"#fff",border:"2.5px solid #1f1b18",borderRadius:"4px 18px 18px 18px",padding:"14px 18px",fontSize:".92rem",lineHeight:"1.75"}}>普段と異なるログインが<b>1件</b>ありました<div style={{marginTop:"8px",padding:"10px 12px",borderRadius:"10px",background:"#fff0f3",border:"1.5px solid #1f1b18",fontSize:".85rem"}}><b>02:14</b>　海外からのログイン失敗が続いています<br /><b>対応候補</b>　このアクセス元をブロック／パスワード変更の案内</div></div></div><div style={{display:"flex",justifyContent:"flex-end"}}><p style={{maxWidth:"75%",background:"#1f1b18",color:"#fff",borderRadius:"18px 18px 4px 18px",padding:"12px 18px",fontWeight:"400",fontSize:".95rem"}}>今月のシステムは正常だった？</p></div><div style={{display:"flex",gap:"10px",alignItems:"flex-start"}}><span aria-hidden="true" style={{flex:"none",display:"flex",width:"38px",height:"38px",borderRadius:"999px",background:"#ffe86c",border:"2.5px solid #1f1b18",alignItems:"center",justifyContent:"center"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3"/><circle cx="12" cy="2.5" r="1" fill="#1f1b18" stroke="none"/><rect x="5" y="6" width="14" height="14" rx="4" fill="#fff"/><path d="M2 11v5M22 11v5M9 16h6"/><circle cx="9" cy="11" r="1.2" fill="#1f1b18" stroke="none"/><circle cx="15" cy="11" r="1.2" fill="#1f1b18" stroke="none"/></svg></span><div style={{maxWidth:"82%",background:"#fff",border:"2.5px solid #1f1b18",borderRadius:"4px 18px 18px 18px",padding:"14px 18px",fontSize:".92rem",lineHeight:"1.75"}}>大きな停止はありませんでした<br />今月のレポートをまとめました<div style={{marginTop:"8px"}}><span className="badge sky" style={{fontSize:".78rem"}}>月次レポートを見る →</span></div></div></div></div>
<div style={{display:"flex",gap:"10px",alignItems:"center",padding:"12px 16px",borderTop:"2.5px solid #1f1b18",background:"#fff"}}><span style={{flex:"1",border:"2px solid #1f1b18",borderRadius:"999px",padding:"9px 16px",fontSize:".88rem",color:"#6b665f"}}>普段の言葉で質問してください</span><span style={{display:"flex",width:"40px",height:"40px",borderRadius:"999px",background:"#ff799a",border:"2.5px solid #1f1b18",alignItems:"center",justifyContent:"center"}}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4z" /></svg></span></div>
</div><p style={{textAlign:"center",marginTop:"16px",fontSize:".75rem"}}>※画面はイメージです</p></div><div style={{borderBottom:"2.5px solid #1f1b18"}}><div style={{display:"grid",gridTemplateColumns:"70px 1fr",gap:"14px",padding:"18px 0",borderTop:"2.5px solid #1f1b18"}}><p aria-hidden="true" style={{fontWeight:"700",fontSize:"2.8rem",lineHeight:".9",color:"#cfe6f5",fontFamily:"system-ui,sans-serif"}}>01</p><div><h3 style={{fontSize:"1.1rem"}}>AIによる定期分析</h3><p style={{marginTop:"6px",fontSize:".88rem",lineHeight:"1.8"}}>日々のアクセスやシステムの利用状況を分析<br />普段と異なる動きや、確認が必要な変化を見つけます</p></div></div><div style={{display:"grid",gridTemplateColumns:"70px 1fr",gap:"14px",padding:"18px 0",borderTop:"2.5px solid #1f1b18"}}><p aria-hidden="true" style={{fontWeight:"700",fontSize:"2.8rem",lineHeight:".9",color:"#cfe6f5",fontFamily:"system-ui,sans-serif"}}>02</p><div><h3 style={{fontSize:"1.1rem"}}>AI異常・原因分析</h3><p style={{marginTop:"6px",fontSize:".88rem",lineHeight:"1.8"}}>不審なログインやシステムエラーが発生した際、関連する情報を照合<br />原因の候補や影響範囲を整理します</p></div></div><div style={{display:"grid",gridTemplateColumns:"70px 1fr",gap:"14px",padding:"18px 0",borderTop:"2.5px solid #1f1b18"}}><p aria-hidden="true" style={{fontWeight:"700",fontSize:"2.8rem",lineHeight:".9",color:"#cfe6f5",fontFamily:"system-ui,sans-serif"}}>03</p><div><h3 style={{fontSize:"1.1rem"}}>AIセキュリティアシスタント</h3><p style={{marginTop:"6px",fontSize:".88rem",lineHeight:"1.8"}}>「昨日、変なアクセスはあった？」「今月のシステムは正常だった？」など、普段の言葉で質問できます</p></div></div><div style={{display:"grid",gridTemplateColumns:"70px 1fr",gap:"14px",padding:"18px 0",borderTop:"2.5px solid #1f1b18"}}><p aria-hidden="true" style={{fontWeight:"700",fontSize:"2.8rem",lineHeight:".9",color:"#cfe6f5",fontFamily:"system-ui,sans-serif"}}>04</p><div><h3 style={{fontSize:"1.1rem"}}>AIレポート作成</h3><p style={{marginTop:"6px",fontSize:".88rem",lineHeight:"1.8"}}>監視結果や異常の発生状況を、AIが分かりやすくまとめます<br />専門用語の多いレポートを読み解く必要はありません</p></div></div></div></div>

  </div></section>;
}

export function FreeCheck() {
  return <section className="s soft" id="freecheck"><div className="s-inner">

<div className="head" style={{marginBottom:"44px"}}><p className="label">FREE SECURITY CHECK</p><h2>まずは無料診断で、今のWebサイトの課題を確認</h2>
<p className="sub" style={{fontWeight:"400",lineHeight:"2"}}>通信や設定を外部から確認し、見直すべき点を分かりやすいレポートでお届けします</p></div>
<div style={{textAlign:"center",margin:"0 0 24px"}}><h3 style={{fontSize:"1.6rem"}}>無料診断で確認できる6つの項目</h3></div><div className="grid3"><div className="card" style={{padding:"22px"}}><span className="badge sky" style={{borderRadius:"10px"}}>01</span><h3 style={{marginTop:"10px"}}>通信の安全性</h3><p style={{marginTop:"6px",fontSize:".88rem",lineHeight:"1.8"}}>Webサイトの通信が適切に保護されているか、証明書の期限や設定を確認します</p></div><div className="card" style={{padding:"22px"}}><span className="badge yellow" style={{borderRadius:"10px"}}>02</span><h3 style={{marginTop:"10px"}}>Webサイトの保護設定</h3><p style={{marginTop:"6px",fontSize:".88rem",lineHeight:"1.8"}}>ブラウザの保護設定やCookie、フォームの送信先などをチェックします</p></div><div className="card" style={{padding:"22px"}}><span className="badge mint" style={{borderRadius:"10px"}}>03</span><h3 style={{marginTop:"10px"}}>ドメイン・メール設定</h3><p style={{marginTop:"6px",fontSize:".88rem",lineHeight:"1.8"}}>ドメインの期限や、なりすましメールへの対策状況を確認します</p></div><div className="card" style={{padding:"22px"}}><span className="badge pink" style={{borderRadius:"10px"}}>04</span><h3 style={{marginTop:"10px"}}>システムの古さ</h3><p style={{marginTop:"6px",fontSize:".88rem",lineHeight:"1.8"}}>公開情報から確認できる使用技術やバージョン、サポート状況を調べます</p></div><div className="card" style={{padding:"22px"}}><span className="badge purple" style={{borderRadius:"10px"}}>05</span><h3 style={{marginTop:"10px"}}>公開されている脆弱性情報</h3><p style={{marginTop:"6px",fontSize:".88rem",lineHeight:"1.8"}}>確認できた技術情報と、公開済みの脆弱性情報との関連を調べます</p></div><div className="card" style={{padding:"22px"}}><span className="badge sky" style={{borderRadius:"10px"}}>06</span><h3 style={{marginTop:"10px"}}>見直すべき項目の優先順位</h3><p style={{marginTop:"6px",fontSize:".88rem",lineHeight:"1.8"}}>確認された問題を整理し、何から対応すべきかを分かりやすくご案内します</p></div></div>
<div style={{marginTop:"64px"}}><div style={{textAlign:"center",margin:"0 0 24px"}}><h3 style={{fontSize:"1.6rem"}}>無料診断の利用方法</h3></div><div style={{display:"grid",gridTemplateColumns:"1fr 40px 1fr 40px 1fr",gap:"8px"}}><div className="card" style={{padding:"22px",background:"#fff"}}><span className="badge">STEP 01</span><h3 style={{marginTop:"10px"}}>お申し込み・ご案内</h3><p style={{marginTop:"6px",fontSize:".88rem",lineHeight:"1.8"}}>HPからの申し込み、またはseQmo<span className="brand-dot">.</span>の営業担当者による訪問時に診断をご案内します</p></div><div className="freecheck-step-arrow" style={{display:"flex",alignItems:"center",justifyContent:"center"}}><svg aria-hidden="true" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div><div className="card" style={{padding:"22px",background:"#fff"}}><span className="badge">STEP 02</span><h3 style={{marginTop:"10px"}}>seQmo<span className="brand-dot">.</span>が診断</h3><p style={{marginTop:"6px",fontSize:".88rem",lineHeight:"1.8"}}>お客さまのWebサイトを対象に、外部から確認できるセキュリティ項目を診断します</p></div><div className="freecheck-step-arrow" style={{display:"flex",alignItems:"center",justifyContent:"center"}}><svg aria-hidden="true" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div><div className="card" style={{padding:"22px",background:"#fff"}}><span className="badge">STEP 03</span><h3 style={{marginTop:"10px"}}>診断結果をご案内</h3><p style={{marginTop:"6px",fontSize:".88rem",lineHeight:"1.8"}}>診断結果をレポートにまとめ、気になる点や改善の優先順位を分かりやすくお伝えします</p></div></div></div>

  </div></section>;
}

export function Development() {
  return <section className="s white" id="development"><div className="s-inner">

<div className="head" style={{marginBottom:"44px"}}><p className="label">SYSTEM DEVELOPMENT</p><h2>見つかった課題を、システムの改善につなげる</h2><p className="sub" style={{fontWeight:"400",lineHeight:"2"}}>長年使い続けている業務システムや、更新が止まっているWebサイト<br />セキュリティ上の問題が見つかっても、古い仕組みのままでは対応が難しい場合があります<br />seQmo<span className="brand-dot">.</span>では、既存システムの改修から新たなシステムの開発・再構築まで対応<br />セキュリティだけでなく、使いやすさや運用のしやすさも考えたシステムをご提案します</p></div>
<h3 style={{textAlign:"center",fontSize:"1.5rem",marginBottom:"22px"}}>こんなシステムのお悩みに</h3>
<div className="grid3"><div className="card" style={{padding:"22px"}}><div className="row" style={{gap:"10px"}}><span className="check"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg></span><h3>古いシステムを使い続けている</h3></div><p style={{marginTop:"10px",fontSize:".88rem",lineHeight:"1.8"}}>長期間更新されていないシステムや、サポートが終了した技術を利用している</p></div><div className="card" style={{padding:"22px"}}><div className="row" style={{gap:"10px"}}><span className="check"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg></span><h3>修正や改修を依頼できない</h3></div><p style={{marginTop:"10px",fontSize:".88rem",lineHeight:"1.8"}}>開発した会社と連絡が取れない、担当者が退職したなどの理由で、改善が進まない</p></div><div className="card" style={{padding:"22px"}}><div className="row" style={{gap:"10px"}}><span className="check"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg></span><h3>業務に合わなくなっている</h3></div><p style={{marginTop:"10px",fontSize:".88rem",lineHeight:"1.8"}}>操作が複雑だったり、手作業が多かったりと、現在の業務に合わない仕組みになっている</p></div></div>
<div className="panel development-support">
<div>
  <p className="label">DEVELOP &amp; PROTECT</p>
  <h3 style={{fontSize:"1.7rem"}}>システムを作るところから、<br/>公開後の見守りまで</h3>
  <p style={{marginTop:"18px",fontWeight:"400",lineHeight:"1.9"}}>
    システムの開発・改修に加え、公開後の監視もご相談いただけます
  </p>
  <p style={{marginTop:"12px",fontWeight:"400",lineHeight:"1.9"}}>
    エラーや不審なアクセスを検知してお知らせし、確認が必要な内容を整理<br/>
    保守や改善のご相談まで、継続してサポートします
  </p>
  <a className="development-details" href="https://www.mogcia.net/services/system">
    <span>詳しくはコチラ</span>
    <span className="header-contact-arrow-circle" aria-hidden="true">
      <svg className="header-contact-icon" width="27" height="14" viewBox="0 0 27 14" fill="none">
        <path d="M1 11.5H25L17.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  </a>
</div>
<div className="development-cycle" aria-label="開発・監視・保守の循環">
  <svg className="development-cycle-path" viewBox="0 0 380 380" aria-hidden="true">
    <defs><marker id="development-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#6f9cbb"/></marker></defs>
    <g fill="none" stroke="#6f9cbb" strokeWidth="1.7" strokeDasharray="5 5" markerEnd="url(#development-arrow)">
      <path d="M268 94Q326 125 323 195"/>
      <path d="M265 305Q190 351 115 305"/>
      <path d="M57 195Q54 125 112 94"/>
    </g>
  </svg>
  <p className="development-cycle-center">DEVELOP<br/>&amp; PROTECT</p>
  <div className="development-cycle-step development-cycle-build">システム開発</div>
  <div className="development-cycle-step development-cycle-monitor">監視・保護</div>
  <div className="development-cycle-step development-cycle-maintain">保守・改善</div>
</div></div>

  </div></section>;
}

export function Pricing() {
  return <section className="s soft" id="pricing"><div className="s-inner">

<div style={{position:"absolute",right:"70px",top:"46px",rotate:"10deg"}}><svg aria-hidden="true" viewBox="0 0 220 220" width="110" height="110" style={{}}><path d="M109 36 135 9 149 50 188 31 178 75 216 87 187 111 216 143 174 150 181 193 144 174 130 214 109 181 76 204 71 163 29 177 48 138 9 119 47 100 25 63 69 65 71 19Z" fill="#ffe86c" stroke="#1f1b18" strokeWidth="8" strokeLinejoin="round" /><g stroke="#1f1b18" strokeWidth="5" fill="white"><ellipse cx="92" cy="107" rx="23" ry="32" /><ellipse cx="139" cy="107" rx="23" ry="32" /></g><g fill="#1f1b18"><ellipse cx="85" cy="119" rx="12" ry="16" /><ellipse cx="132" cy="119" rx="12" ry="16" /></g><g fill="white"><circle cx="81" cy="113" r="4" /><circle cx="128" cy="113" r="4" /></g></svg></div><div className="head" style={{marginBottom:"44px"}}><p className="label">PRICING</p><h2>料金プラン</h2><p className="sub" style={{fontWeight:"400"}}>システムに合わせた、シンプルな料金体系</p></div><div className="grid2" style={{gap:"32px",maxWidth:"960px",margin:"0 auto"}}><div className="panel" style={{overflow:"hidden"}}>
<div style={{padding:"14px",textAlign:"center",borderBottom:"2.5px solid #1f1b18",background:"#ffe86c",fontWeight:"700"}}>保守・監視サービス</div>
<div style={{padding:"30px 32px",textAlign:"center"}}>
<div style={{minHeight:"64px",display:"flex",flexDirection:"column",justifyContent:"flex-end"}}><h3 style={{fontSize:"1.5rem"}}>トータルサポートプラン</h3></div>
<p style={{marginTop:"10px",fontWeight:"400",lineHeight:"1.8",minHeight:"56px"}}>開発から保守・セキュリティ監視まで<br />まとめてサポート</p>
<div style={{margin:"22px auto 0",padding:"18px",border:"2.5px solid #1f1b18",borderRadius:"16px",background:"#fff",boxShadow:"3px 4px 0 #1f1b18"}}><p style={{fontWeight:"700",lineHeight:"1"}}><span style={{fontSize:"1.6rem"}}>¥</span><span style={{fontSize:"3.4rem",letterSpacing:"-.01em"}}>35,000</span><span style={{fontSize:"1rem",marginLeft:"4px"}}>/ 月</span></p></div><p style={{marginTop:"12px",fontSize:".8rem",fontWeight:"400",lineHeight:"1.7",color:"#717680"}}>※開発費用は別途お見積もりとなります。</p></div></div><div className="panel" style={{overflow:"hidden"}}>
<div style={{padding:"14px",textAlign:"center",borderBottom:"2.5px solid #1f1b18",background:"#ff799a",fontWeight:"700"}}>外部監視サービス</div>
<div style={{padding:"30px 32px",textAlign:"center"}}>
<div style={{minHeight:"64px",display:"flex",flexDirection:"column",justifyContent:"flex-end"}}><p className="label" style={{marginBottom:"2px"}}>EXTERNAL MONITORING</p><h3 style={{fontSize:"1.5rem"}}>他社開発システム</h3></div>
<p style={{marginTop:"10px",fontWeight:"400",lineHeight:"1.8",minHeight:"56px"}}>現在お使いのシステムに<br />外部からのセキュリティ監視を追加</p>
<div style={{margin:"22px auto 0",padding:"18px",border:"2.5px solid #1f1b18",borderRadius:"16px",background:"#fff",boxShadow:"3px 4px 0 #1f1b18"}}><p style={{fontWeight:"700",lineHeight:"1"}}><span style={{fontSize:"1.6rem"}}>¥</span><span style={{fontSize:"3.4rem",letterSpacing:"-.01em"}}>55,000</span><span style={{fontSize:"1rem",marginLeft:"4px"}}>/ 月</span></p></div></div></div></div>

  </div></section>;
}

export function Flow() {
  return <section className="s white" id="flow"><div className="s-inner">

<div style={{position:"absolute",right:"70px",top:"46px",rotate:"10deg"}}><svg aria-hidden="true" viewBox="0 0 220 220" width="110" height="110" style={{}}><path d="M109 36 135 9 149 50 188 31 178 75 216 87 187 111 216 143 174 150 181 193 144 174 130 214 109 181 76 204 71 163 29 177 48 138 9 119 47 100 25 63 69 65 71 19Z" fill="#8be0c3" stroke="#1f1b18" strokeWidth="8" strokeLinejoin="round" /><g stroke="#1f1b18" strokeWidth="5" fill="white"><ellipse cx="92" cy="107" rx="23" ry="32" /><ellipse cx="139" cy="107" rx="23" ry="32" /></g><g fill="#1f1b18"><ellipse cx="85" cy="119" rx="12" ry="16" /><ellipse cx="132" cy="119" rx="12" ry="16" /></g><g fill="white"><circle cx="81" cy="113" r="4" /><circle cx="128" cy="113" r="4" /></g></svg></div><div className="head" style={{marginBottom:"44px"}}><p className="label">GETTING STARTED</p><h2>ご相談から監視開始までの4ステップ</h2><p className="sub" style={{fontWeight:"400",lineHeight:"2"}}>専門的な設定や監視環境の構築は、seQmo<span className="brand-dot">.</span>がサポート<br />現在のシステム環境を確認し、必要な監視機能を整えてから運用を開始します</p></div>
<div style={{position:"relative"}}><span style={{position:"absolute",left:"12%",right:"12%",top:"55px",borderTop:"3px dashed #1f1b18"}}></span><div className="grid4" style={{gap:"28px"}}><div style={{textAlign:"center",position:"relative",zIndex:"1"}}><span style={{display:"inline-grid",placeContent:"center",width:"110px",height:"110px",borderRadius:"999px",border:"2.5px solid #1f1b18",background:"#8fd4fe",boxShadow:"4px 5px 0 #1f1b18",fontWeight:"700",fontSize:"2.4rem",lineHeight:"1"}}>01</span><h3 style={{marginTop:"18px",fontSize:"1.15rem"}}>お問い合わせ・ご相談</h3><p style={{marginTop:"8px",fontSize:".85rem",lineHeight:"1.8",textAlign:"left",padding:"0 6px"}}>監視したいWebサイトや業務システムについて、お困りごとやご希望をお聞かせください</p></div><div style={{textAlign:"center",position:"relative",zIndex:"1"}}><span style={{display:"inline-grid",placeContent:"center",width:"110px",height:"110px",borderRadius:"999px",border:"2.5px solid #1f1b18",background:"#ffe86c",boxShadow:"4px 5px 0 #1f1b18",fontWeight:"700",fontSize:"2.4rem",lineHeight:"1"}}>02</span><h3 style={{marginTop:"18px",fontSize:"1.15rem"}}>システム環境の確認</h3><p style={{marginTop:"8px",fontSize:".85rem",lineHeight:"1.8",textAlign:"left",padding:"0 6px"}}>現在のシステム構成や運用状況を確認し、監視できる範囲と必要な設定をご案内します</p></div><div style={{textAlign:"center",position:"relative",zIndex:"1"}}><span style={{display:"inline-grid",placeContent:"center",width:"110px",height:"110px",borderRadius:"999px",border:"2.5px solid #1f1b18",background:"#b8a4f8",boxShadow:"4px 5px 0 #1f1b18",fontWeight:"700",fontSize:"2.4rem",lineHeight:"1"}}>03</span><h3 style={{marginTop:"18px",fontSize:"1.15rem"}}>お申し込み・初期設定</h3><p style={{marginTop:"8px",fontSize:".85rem",lineHeight:"1.8",textAlign:"left",padding:"0 6px"}}>プランをご確認いただいた後、監視対象の登録や必要な連携・設定を行います</p></div><div style={{textAlign:"center",position:"relative",zIndex:"1"}}><span style={{display:"inline-grid",placeContent:"center",width:"110px",height:"110px",borderRadius:"999px",border:"2.5px solid #1f1b18",background:"#8be0c3",boxShadow:"4px 5px 0 #1f1b18",fontWeight:"700",fontSize:"2.4rem",lineHeight:"1"}}>04</span><h3 style={{marginTop:"18px",fontSize:"1.15rem"}}>監視・運用スタート</h3><p style={{marginTop:"8px",fontSize:".85rem",lineHeight:"1.8",textAlign:"left",padding:"0 6px"}}>設定内容を確認して監視を開始<br />異常通知やレポートを通じて、システムの状態を継続的に確認できます</p></div></div></div><div style={{marginTop:"56px"}}><p style={{textAlign:"center",fontWeight:"700",fontSize:"1.1rem",marginBottom:"18px"}}>プランによって導入方法が異なります</p><div className="grid2" style={{gap:"28px",maxWidth:"900px",margin:"0 auto"}}><div className="panel" style={{overflow:"hidden",boxShadow:"4px 5px 0 #1f1b18"}}><div style={{padding:"10px",textAlign:"center",borderBottom:"2.5px solid #1f1b18",background:"#ffe86c",fontWeight:"700"}}>トータルサポートプラン</div><p style={{padding:"18px 22px",fontWeight:"400",fontSize:".92rem",lineHeight:"1.8",textAlign:"center"}}>システムの開発・保守とあわせて<br />監視・保護機能を導入します</p></div><div className="panel" style={{overflow:"hidden",boxShadow:"4px 5px 0 #1f1b18"}}><div style={{padding:"10px",textAlign:"center",borderBottom:"2.5px solid #1f1b18",background:"#ff799a",fontWeight:"700"}}>外部監視プラン</div><p style={{padding:"18px 22px",fontWeight:"400",fontSize:".92rem",lineHeight:"1.8",textAlign:"center"}}>現在ご利用中のシステムに合わせて<br />外部からの監視環境を設定します</p></div></div></div>

  </div></section>;
}

const FAQS = [
 [
  "セキュリティの専門知識がなくても利用できますか？",
  [
   "はい",
   "seQmo.では、専門知識がない方でも監視状況や異常の内容を確認できるよう、分かりやすい管理画面やAIによる説明機能をご用意しています"
  ]
 ],
 [
  "現在利用しているシステムにも導入できますか？",
  [
   "システムの構成や制作・開発会社の対応状況によって異なります",
   "外部から監視できる項目は既存システムを変更せずに利用できる場合がありますが、ログイン履歴や操作履歴などの詳細な監視には、開発会社による設定や連携が必要です",
   "seQmo.では、現在の環境を確認したうえで対応可能な範囲をご案内します"
  ]
 ],
 [
  "トータルサポートプランと外部監視プランの違いは何ですか？",
  [
   "トータルサポートプランは、システムの開発・保守とあわせて、内部のアクセスや操作履歴、エラーなどの監視・保護機能を提供するプランです",
   "外部監視プランは、既存のWebサイトやシステムを対象に、外部から確認できる範囲を継続的に監視するプランです"
  ]
 ],
 [
  "セキュリティ対策ソフトやUTMを導入していても必要ですか？",
  [
   "セキュリティ対策ソフトやUTMは、ウイルスや不正な通信などへの対策として重要です",
   "一方、seQmo.はWebサイトや業務システムの状態を継続的に監視し、異常や変化を把握するためのサービスです",
   "既存の対策を置き換えるのではなく、補完する役割があります"
  ]
 ],
 [
  "異常が検知された場合はどうなりますか？",
  [
   "監視対象で異常を検知した場合、設定された通知先へお知らせします",
   "管理画面では異常の内容や確認すべきポイントを確認でき、AIによる分析が利用できる場合は原因の候補や対応方法もご案内します"
  ]
 ],
 [
  "異常が発生した際、復旧や修正まで対応してもらえますか？",
  [
   "seQmo.の監視サービスでは、異常の検知・通知・状況の確認を行います",
   "実際の修正や復旧作業は、システムの保守契約や管理体制によって対応範囲が異なります",
   "必要に応じて、システムの改修・再構築についてもご相談いただけます"
  ]
 ],
 [
  "seQmo.を導入すれば、情報漏洩や不正アクセスを防げますか？",
  [
   "すべての不正アクセスや情報漏洩を防ぐことを保証するものではありません",
   "seQmo.は異常の早期発見や状況把握を支援し、対応するシステムではアクセス制限などの保護機能も利用できます",
   "既存のセキュリティ対策と組み合わせてご利用ください"
  ]
 ],
 [
  "無料セキュリティ診断では何を確認できますか？",
  [
   "WebサイトのHTTPSや証明書、ブラウザの保護設定、ドメイン・メール設定、公開情報から確認できる使用技術、既知の脆弱性情報との関連などを確認します",
   "結果はレポートにまとめ、優先して見直したい項目をご案内します",
   "サーバー内部や実際の情報漏洩の有無を判断する診断ではありません"
  ]
 ],
 [
  "無料診断だけでも申し込めますか？",
  [
   "はい",
   "無料診断のみのお申し込みも可能です",
   "Webからのお申し込みのほか、営業担当者による訪問時にもご案内しています",
   "診断後に有料プランへの加入が必須になることはありません"
  ]
 ],
 [
  "料金はいくらですか？",
  [
   "トータルサポートプランは月額35,000円、外部監視プランは月額55,000円です",
   "開発費用は別途お見積もりとなります　追加の設定・改修費用についても内容に応じてご案内します",
   "料金の適用条件や税込・税別の詳細は、お問い合わせ時にご案内します"
  ]
 ],
 [
  "導入までにどのくらいの期間がかかりますか？",
  [
   "対象となるシステムの構成や、必要な設定・連携内容によって異なります",
   "現在の環境を確認したうえで、導入方法と開始時期をご案内します"
  ]
 ],
 [
  "古いシステムの改修や作り直しも相談できますか？",
  [
   "はい",
   "seQmo.では、セキュリティ診断や監視を通じて見つかった課題について、既存システムの改修や再構築のご相談も承っています",
   "システムの状態や運用状況に合わせて、必要な改善方法をご提案します"
  ]
 ]
];

export function Faq() {
  return <section className="s soft" id="faq"><div className="s-inner">

<div style={{display:"grid",gridTemplateColumns:"320px 1fr",gap:"56px"}}>
<div><p className="label">FAQ / FREQUENTLY ASKED QUESTIONS</p><h2>よくあるご質問</h2><p style={{marginTop:"14px",fontWeight:"400",fontSize:".88rem"}}>seQmo<span className="brand-dot">.</span>のサービス内容や導入について<br />お客さまからよくいただくご質問をまとめました</p><div style={{marginTop:"28px"}}><svg aria-hidden="true" viewBox="0 0 220 220" width="120" height="120" style={{}}><path d="M109 36 135 9 149 50 188 31 178 75 216 87 187 111 216 143 174 150 181 193 144 174 130 214 109 181 76 204 71 163 29 177 48 138 9 119 47 100 25 63 69 65 71 19Z" fill="#8fd4fe" stroke="#1f1b18" strokeWidth="8" strokeLinejoin="round" /><g stroke="#1f1b18" strokeWidth="5" fill="white"><ellipse cx="92" cy="107" rx="23" ry="32" /><ellipse cx="139" cy="107" rx="23" ry="32" /></g><g fill="#1f1b18"><ellipse cx="85" cy="119" rx="12" ry="16" /><ellipse cx="132" cy="119" rx="12" ry="16" /></g><g fill="white"><circle cx="81" cy="113" r="4" /><circle cx="128" cy="113" r="4" /></g></svg></div></div>
<div className="faq-list">{FAQS.map(([q, a], i) => (
  <details className="faq-item" key={q} open={i === 0}>
    <summary><span className="faq-no">Q{String(i + 1).padStart(2, '0')}</span><span><BrandText>{q}</BrandText></span><span className="faq-sign" aria-hidden="true"/></summary>
    <p className="faq-answer">{a.map((line, k) => <span key={k}><BrandText>{line}</BrandText>{k < a.length - 1 && <br/>}</span>)}</p>
  </details>
))}</div></div>

  </div></section>;
}

export function Contact() {
  return <section className="s white" id="contact"><div className="s-inner">

<div style={{display:"grid",gridTemplateColumns:"1fr auto",gap:"40px",alignItems:"center",maxWidth:"1120px",margin:"0 auto",padding:"44px 52px",borderRadius:"22px",background:"#fff",border:"2.5px solid #1f1b18",boxShadow:"6px 7px 0 #1f1b18"}}>
<div><p className="label">SECURITY STARTS HERE.</p><h2>無料診断・開発・導入のご相談はこちら</h2><p style={{marginTop:"12px",fontWeight:"400",fontSize:".92rem",lineHeight:"1.9"}}>診断したいWebサイトや、見直したい業務システムについて<br />ご希望に合う進め方と対応範囲をご案内します</p></div>
<div style={{display:"flex",alignItems:"center",gap:"28px"}}><div><Link href="/contact/" className="btn" style={{background:"#ff799a",whiteSpace:"nowrap",padding:".95rem 1.9rem"}}>お問い合わせはこちら<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f1b18" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft:"10px"}}><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link><p style={{marginTop:"12px",fontSize:".8rem",fontWeight:"400",textAlign:"center"}}>ご相談だけでもお気軽にお問い合わせください</p></div></div></div>

  </div></section>;
}
