'use client'

import { useState } from 'react'
import './japonica.css'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [showPromptModal, setShowPromptModal] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const totalPages = 8

  const openNotebook = () => {
    setIsOpen(true)
  }

  const closeNotebook = () => {
    setIsOpen(false)
    setCurrentPage(1)
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    } else if (currentPage === 1) {
      closeNotebook()
    }
  }

  const openPromptModal = () => {
    setShowPromptModal(true)
  }

  const closePromptModal = () => {
    setShowPromptModal(false)
  }

  const copyPromptText = () => {
    const promptText = `以下の業務を細かく要素分解して、Geminiを使って業務効率化できる作業をブレインストーミングしてください。水平思考でアイデアをアウトプットするようにお願いします。

■業務内容
{ここに業務内容をできるだけ詳しく書く}`

    navigator.clipboard.writeText(promptText).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000) // 2秒後にリセット
    }).catch((err) => {
      console.error('コピーに失敗しました: ', err)
      alert('プロンプトのコピーに失敗しました。手動でコピーしてください。')
    })
  }

  return (
    <div className="notebook-container">
      {/* 背表紙（常に表示） */}
      <div className={`spine ${isOpen ? 'hidden' : ''}`}>
        <div className="spine-line"></div>
      </div>
      
      {/* 表紙（B5サイズ） */}
      <div className={`cover ${isOpen ? 'hidden' : ''}`} onClick={openNotebook}>
        <div className="cover-header">
          <div className="main-title">
            リジョブ学習帳
            <div className="showa-logo">
              <img src="/images/logo.png" alt="ロゴ" />
            </div>
          </div>
        </div>
        
        <div className="image-container">
          <img src="/images/cover.png" alt="表紙画像" />
        </div>
        
        <div className="bottom-label">
          <span className="muji-label">20行</span>
          <span className="jiyucho-large">AIかつよう</span>
        </div>
        
        <div className="name-field">
          <span>事業部</span>
          <span className="filled" style={{ marginLeft: '8px', fontFamily: 'Zen Kurenaido, sans-serif', fontSize: '19px', fontWeight: 900, color: '#1a1a1a', transform: 'rotate(-1.8deg) translateY(-1px)', display: 'inline-block', textShadow: '0.5px 0.5px 0.5px rgba(0,0,0,0.3)', WebkitTextStroke: '0.4px #1a1a1a' }}>成果</span>
          <span style={{ marginLeft: '30px' }}>div.</span>
          <span className="filled" style={{ marginRight: '40px', fontFamily: 'Zen Kurenaido, sans-serif', fontSize: '18px', fontWeight: 900, color: '#1a1a1a', transform: 'rotate(1.3deg) translateY(0.5px)', display: 'inline-block', textShadow: '0.5px 0.5px 0.5px rgba(0,0,0,0.3)', WebkitTextStroke: '0.4px #1a1a1a' }}>more</span>
          <span style={{ marginLeft: '-15px' }}>名前</span>
          <span className="filled" style={{ fontFamily: 'Zen Kurenaido, sans-serif', fontSize: '19px', fontWeight: 900, color: '#1a1a1a', transform: 'rotate(-0.7deg) translateY(-0.5px)', display: 'inline-block', textShadow: '0.5px 0.5px 0.5px rgba(0,0,0,0.3)', letterSpacing: '0.8px', WebkitTextStroke: '0.4px #1a1a1a' }}>義村 遼</span>
        </div>
      </div>
      
      {/* 見開きページ（B5×2） */}
      {isOpen && (
        <div className="pages">
          <div className="binding"></div>
          <div className="nav-left" onClick={previousPage}></div>
          <div className="nav-right" onClick={nextPage}></div>
          
          {/* ページセット1（1-2ページ） */}
          <div className={`page-set ${currentPage === 1 ? '' : 'hidden'}`}>
            {/* 左ページ（1ページ目） */}
            <div className="page-left">
              <div className="content">
                <h2>自己紹介</h2>
                <p><strong>▪️名前:</strong> 義村 遼</p>
                
                <div style={{ width: '150px', height: '150px', border: '2px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '25px 0 25px 10px', borderRadius: '8px', transform: 'rotate(-3deg)', boxShadow: '2px 2px 8px rgba(0,0,0,0.15)', overflow: 'hidden' }}>
                  <img src="/images/1_1.png" alt="プロフィール画像" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                
                <p style={{ marginBottom: '8px' }}><strong>▪️詳細:</strong></p>
                <div style={{ marginLeft: '0' }}>
                  <p style={{ margin: '0 0 4px 0', paddingLeft: '15px', textIndent: '-15px' }}>・副業としてゲーム会社にてAI活用の顧問</p>
                  <p style={{ margin: '0 0 4px 0', paddingLeft: '15px', textIndent: '-15px' }}>・非エンジニア向けAIプログラミング講座で登壇</p>
                  <p style={{ margin: '0 0 4px 0', paddingLeft: '15px', textIndent: '-15px' }}>・AIアートコンテスト グランプリ作品</p>
                  <p style={{ margin: '0 0 8px 0', paddingLeft: '15px', textIndent: '-15px' }}>・Claude機能紹介動画(公式)でゲームが紹介される</p>
                </div>
              </div>
              <div className="page-number page-number-left">1</div>
            </div>
            
            {/* 右ページ（2ページ目） */}
            <div className="page-right">
              <div className="content">
                <h2>実績紹介</h2>
                {/* 画像 2_1: AIアートコンテスト グランプリ作品 */}
                <div style={{ width: '80%', height: '200px', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '16px auto 16px auto', overflow: 'hidden' }}>
                  <img src="/images/2_1.png" alt="AIアートコンテスト グランプリ作品" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <p style={{ textAlign: 'left', marginBottom: '32px' }}>
                  <strong>URL:</strong> <a href="https://claude.ai/public/artifacts/8c461555-579d-49f3-88e4-a13fd34dfeba" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none', background: 'linear-gradient(transparent 60%, #ffeb3b 60%, #ffeb3b 90%, transparent 90%)', padding: '0 2px', fontWeight: 'bold' }}>AIアートコンテスト グランプリ作品</a>
                </p>
                
                {/* 画像 2_2: Claude公式紹介動画で紹介されたゲーム */}
                <div style={{ width: '80%', height: '180px', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '16px auto 16px auto', overflow: 'hidden' }}>
                  <img src="/images/2_2.png" alt="Claude公式紹介動画で紹介されたゲーム" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <p style={{ textAlign: 'left' }}>
                  <strong>URL:</strong> <a href="https://claude.ai/public/artifacts/12f83fee-ff6b-4fc6-9ccd-c9ce69a65130" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none', background: 'linear-gradient(transparent 60%, #ffeb3b 60%, #ffeb3b 90%, transparent 90%)', padding: '0 2px', fontWeight: 'bold' }}>Claude公式紹介動画で紹介されたゲーム</a>
                </p>
              </div>
              <div className="page-number page-number-right">2</div>
              {/* パラパラ漫画: 歩く1 */}
              <div className="flipbook">
                <svg viewBox="0 0 60 80">
                  {/* 棒人間が歩いている（左足前） */}
                  <circle cx="15" cy="35" r="5" fill="none" stroke="black" strokeWidth="1.5"/>
                  <line x1="15" y1="40" x2="15" y2="60" stroke="black" strokeWidth="1.5"/>
                  <line x1="15" y1="45" x2="10" y2="53" stroke="black" strokeWidth="1.5"/>
                  <line x1="15" y1="45" x2="20" y2="53" stroke="black" strokeWidth="1.5"/>
                  <line x1="15" y1="60" x2="11" y2="75" stroke="black" strokeWidth="1.5"/>
                  <line x1="15" y1="60" x2="19" y2="75" stroke="black" strokeWidth="1.5"/>
                  {/* 動きの線 */}
                  <line x1="5" y1="40" x2="3" y2="40" stroke="black" strokeWidth="0.5" opacity="0.5"/>
                  <line x1="5" y1="50" x2="2" y2="50" stroke="black" strokeWidth="0.5" opacity="0.5"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* ページセット2（3-4ページ） */}
          <div className={`page-set ${currentPage === 2 ? '' : 'hidden'}`}>
            <div className="page-left">
              <div className="content">
                <h2>現状: AIの急速な進化</h2>
                
                <div style={{ width: '350px', height: '350px', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '40px auto', overflow: 'hidden' }}>
                  <img src="/images/3_1.jpg" alt="AI概念図" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              </div>
              <div className="page-number page-number-left">3</div>
            </div>
            
            <div className="page-right">
              <div className="content">
                <h2>AIへの業務リプレイス(海外)</h2>
                
                <p style={{ margin: '0 0 4px 0' }}><strong>・IBM</strong><br />
                <span style={{ paddingLeft: '15px' }}>人事部門を中心にAIで代替し、</span><br />
                <span style={{ paddingLeft: '15px' }}>約8000人を解雇。</span></p>
                <p style={{ margin: '0 0 16px 0', paddingLeft: '15px' }}><strong>URL:</strong> <a href="https://unity-connect.com/our-resources/news/ibm-lays-off-8000-as-ai-takes-over-back-office-ops/" target="_blank" style={{ color: '#333', textDecoration: 'none', background: 'linear-gradient(transparent 60%, #ffeb3b 60%, #ffeb3b 90%, transparent 90%)', padding: '0 2px', fontWeight: 'bold' }}>ニュース記事</a></p>
                
                <p style={{ margin: '0 0 4px 0' }}><strong>・Puma</strong><br />
                <span style={{ paddingLeft: '15px' }}>コンセプト開発から脚本、映像制作まで</span><br />
                <span style={{ paddingLeft: '15px' }}>全てAIで制作。</span></p>
                <p style={{ margin: '0 0 16px 0', paddingLeft: '15px' }}><strong>URL:</strong> <a href="https://thecrankycreative.com/ad-review-pumas-worlds-first-fully-ai-generated-ad/" target="_blank" style={{ color: '#333', textDecoration: 'none', background: 'linear-gradient(transparent 60%, #ffeb3b 60%, #ffeb3b 90%, transparent 90%)', padding: '0 2px', fontWeight: 'bold' }}>ニュース記事</a></p>
                
                <p style={{ margin: '0 0 4px 0' }}><strong>・Baidu</strong><br />
                <span style={{ paddingLeft: '15px' }}>AIアバターが6時間の配信で133商品をPR、</span><br />
                <span style={{ paddingLeft: '15px' }}>約10億円以上の売上を記録。</span></p>
                <p style={{ margin: '0 0 16px 0', paddingLeft: '15px' }}><strong>URL:</strong> <a href="https://x.com/Baidu_Inc/status/1934982099112751197" target="_blank" style={{ color: '#333', textDecoration: 'none', background: 'linear-gradient(transparent 60%, #ffeb3b 60%, #ffeb3b 90%, transparent 90%)', padding: '0 2px', fontWeight: 'bold' }}>ニュース記事</a></p>
              </div>
              <div className="page-number page-number-right">4</div>
              {/* パラパラ漫画: 歩く2 */}
              <div className="flipbook">
                <svg viewBox="0 0 60 80">
                  {/* 棒人間が歩いている（右足前） */}
                  <circle cx="18" cy="35" r="5" fill="none" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="40" x2="18" y2="60" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="45" x2="13" y2="53" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="45" x2="23" y2="53" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="60" x2="22" y2="75" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="60" x2="14" y2="75" stroke="black" strokeWidth="1.5"/>
                  {/* 動きの線 */}
                  <line x1="8" y1="40" x2="5" y2="40" stroke="black" strokeWidth="0.5" opacity="0.5"/>
                  <line x1="7" y1="50" x2="4" y2="50" stroke="black" strokeWidth="0.5" opacity="0.5"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* ページセット3（5-6ページ） */}
          <div className={`page-set ${currentPage === 3 ? '' : 'hidden'}`}>
            <div className="page-left">
              <div className="content">
                <h2>AIへの業務リプレイス(日本)</h2>
                
                <p style={{ margin: '0 0 4px 0' }}><strong>・アフラック</strong><br />
                <span style={{ paddingLeft: '15px' }}>コールセンター人員5割解雇。</span><br />
                <span style={{ paddingLeft: '15px' }}>500億円のコスト削減を見込む。</span></p>
                <p style={{ margin: '0 0 16px 0', paddingLeft: '15px' }}><strong>URL:</strong> <a href="https://www.nikkei.com/article/DGXZQOUB16BO80W5A610C2000000/?n_cid=SNSTW001&n_tw=1750200195" target="_blank" style={{ color: '#333', textDecoration: 'none', background: 'linear-gradient(transparent 60%, #ffeb3b 60%, #ffeb3b 90%, transparent 90%)', padding: '0 2px', fontWeight: 'bold' }}>ニュース記事</a></p>
                
                <p style={{ margin: '0 0 4px 0' }}><strong>・サイバーエージェント</strong><br />
                <span style={{ paddingLeft: '15px' }}>デザイン作業工数が5→1人に！</span><br />
                <span style={{ paddingLeft: '15px' }}>広告制作本数: 約30本→170本</span></p>
                <p style={{ margin: '0 0 16px 0', paddingLeft: '15px' }}><strong>URL:</strong> <a href="https://journal.meti.go.jp/p/38847/" target="_blank" style={{ color: '#333', textDecoration: 'none', background: 'linear-gradient(transparent 60%, #ffeb3b 60%, #ffeb3b 90%, transparent 90%)', padding: '0 2px', fontWeight: 'bold' }}>ニュース記事</a></p>
                
                <p style={{ margin: '0 0 4px 0' }}><strong>・しまむら</strong><br />
                <span style={{ paddingLeft: '15px' }}>生成AIモデル 瑠菜(るな)を採用。</span><br />
                <span style={{ paddingLeft: '15px' }}>モデル撮影のコストを最大70％削減。</span><br />
                <span style={{ paddingLeft: '15px' }}>スキャンダルなし。</span></p>
                <p style={{ margin: '0 0 16px 0', paddingLeft: '15px' }}><strong>URL:</strong> <a href="https://realsound.jp/book/2024/06/post-1685192.html" target="_blank" style={{ color: '#333', textDecoration: 'none', background: 'linear-gradient(transparent 60%, #ffeb3b 60%, #ffeb3b 90%, transparent 90%)', padding: '0 2px', fontWeight: 'bold' }}>ニュース記事</a></p>
              </div>
              <div className="page-number page-number-left">5</div>
            </div>
            
            <div className="page-right">
              <div className="content">
                <h2>AIとどう向き合うか？</h2>
                
                {/* 付箋風名言カード */}
                <div style={{ position: 'relative', marginTop: '25px' }}>
                  
                  {/* 付箋1 - 黄色（左上） */}
                  <div style={{ background: 'linear-gradient(135deg, #fff9c4 0%, #ffeb3b 100%)', borderRadius: '0 0 3px 3px', padding: '18px 15px 14px', boxShadow: '2px 4px 8px rgba(0,0,0,0.15), inset 0 -1px 0 rgba(0,0,0,0.05)', position: 'relative', transform: 'rotate(-3deg) translateX(-10px)', margin: '0 0 25px', maxWidth: '340px' }}>
                    {/* 付箋の上部の折れ（粘着部分） */}
                    <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '12px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.03) 50%, transparent 100%)', borderRadius: '3px 3px 0 0' }}></div>
                    {/* 引用符 */}
                    <span style={{ position: 'absolute', top: '10px', left: '8px', fontSize: '24px', color: 'rgba(249,168,37,0.4)', fontWeight: 'bold' }}>"</span>
                    <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.6', color: '#2c3e50', fontWeight: '600', paddingLeft: '20px' }}>AIが君の仕事を奪うんじゃない。<br />
                    AIを活用した人が君の仕事を奪うんだ</p>
                    <span style={{ fontSize: '10px', color: '#795548', marginTop: '8px', display: 'block', textAlign: 'right', fontStyle: 'italic', fontWeight: '500' }}>— NVIDIA CEO ジェンスン・フアン</span>
                  </div>
                  
                  {/* 付箋2 - 青（右） */}
                  <div style={{ background: 'linear-gradient(135deg, #bbdefb 0%, #90caf9 100%)', borderRadius: '0 0 3px 3px', padding: '18px 15px 14px', boxShadow: '2px 4px 8px rgba(0,0,0,0.15), inset 0 -1px 0 rgba(0,0,0,0.05)', position: 'relative', transform: 'rotate(2.5deg) translateX(20px)', margin: '0 0 25px', maxWidth: '340px', marginLeft: 'auto' }}>
                    {/* 付箋の上部の折れ（粘着部分） */}
                    <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '12px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.03) 50%, transparent 100%)', borderRadius: '3px 3px 0 0' }}></div>
                    {/* 引用符 */}
                    <span style={{ position: 'absolute', top: '10px', left: '8px', fontSize: '24px', color: 'rgba(2,136,209,0.3)', fontWeight: 'bold' }}>"</span>
                    <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.6', color: '#2c3e50', fontWeight: '600', paddingLeft: '20px' }}>AIは私たちの仕事を奪うものではなく、<br />
                    スキルを強化し新しい可能性を開くパートナーだ</p>
                    <span style={{ fontSize: '10px', color: '#37474f', marginTop: '8px', display: 'block', textAlign: 'right', fontStyle: 'italic', fontWeight: '500' }}>— Microsoft CEO サティア・ナデラ</span>
                  </div>
                  
                  {/* 付箋3 - ピンク（左下） */}
                  <div style={{ background: 'linear-gradient(135deg, #ffcdd2 0%, #ef9a9a 100%)', borderRadius: '0 0 3px 3px', padding: '18px 15px 14px', boxShadow: '2px 4px 8px rgba(0,0,0,0.15), inset 0 -1px 0 rgba(0,0,0,0.05)', position: 'relative', transform: 'rotate(-2.2deg) translateX(-5px)', margin: '0 0 10px', maxWidth: '340px' }}>
                    {/* 付箋の上部の折れ（粘着部分） */}
                    <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '12px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.03) 50%, transparent 100%)', borderRadius: '3px 3px 0 0' }}></div>
                    {/* 引用符 */}
                    <span style={{ position: 'absolute', top: '10px', left: '8px', fontSize: '24px', color: 'rgba(211,47,47,0.3)', fontWeight: 'bold' }}>"</span>
                    <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.6', color: '#2c3e50', fontWeight: '600', paddingLeft: '20px' }}>AIは一人ひとりをエンパワーする存在であり、<br />
                    組織全体の成果を飛躍的に向上させる</p>
                    <span style={{ fontSize: '10px', color: '#5d4037', marginTop: '8px', display: 'block', textAlign: 'right', fontStyle: 'italic', fontWeight: '500' }}>— DeNA 南場智子</span>
                  </div>
                  
                </div>
              </div>
              <div className="page-number page-number-right">6</div>
              {/* パラパラ漫画: ロボット発見 */}
              <div className="flipbook">
                <svg viewBox="0 0 60 80">
                  {/* 棒人間が立ち止まる */}
                  <circle cx="12" cy="35" r="5" fill="none" stroke="black" strokeWidth="1.5"/>
                  <line x1="12" y1="40" x2="12" y2="60" stroke="black" strokeWidth="1.5"/>
                  <line x1="12" y1="45" x2="7" y2="53" stroke="black" strokeWidth="1.5"/>
                  <line x1="12" y1="45" x2="17" y2="53" stroke="black" strokeWidth="1.5"/>
                  <line x1="12" y1="60" x2="10" y2="75" stroke="black" strokeWidth="1.5"/>
                  <line x1="12" y1="60" x2="14" y2="75" stroke="black" strokeWidth="1.5"/>
                  {/* ! マーク */}
                  <text x="20" y="30" fontSize="8" fontWeight="bold" fill="black">!</text>
                  
                  {/* ロボット（遠くだけど詳細に） */}
                  <rect x="40" y="42" width="7" height="8" fill="none" stroke="black" strokeWidth="1.2"/>
                  <circle cx="43.5" cy="38" r="3.5" fill="none" stroke="black" strokeWidth="1.2"/>
                  {/* ロボットの目 */}
                  <circle cx="41.5" cy="37" r="0.8" fill="black"/>
                  <circle cx="45.5" cy="37" r="0.8" fill="black"/>
                  {/* ロボットの口 */}
                  <path d="M 41 39.5 Q 43.5 41 46 39.5" stroke="black" strokeWidth="0.8" fill="none"/>
                  {/* アンテナ */}
                  <line x1="43.5" y1="34.5" x2="43.5" y2="31" stroke="black" strokeWidth="0.8"/>
                  <circle cx="43.5" cy="30" r="1.2" fill="black"/>
                  {/* 腕と脚 */}
                  <line x1="40" y1="50" x2="39" y2="57" stroke="black" strokeWidth="1.2"/>
                  <line x1="47" y1="50" x2="48" y2="57" stroke="black" strokeWidth="1.2"/>
                  <line x1="40" y1="45" x2="37" y2="48" stroke="black" strokeWidth="1.2"/>
                  <line x1="47" y1="45" x2="50" y2="48" stroke="black" strokeWidth="1.2"/>
                  {/* ボルト飾り（小さめ） */}
                  <circle cx="42" cy="44" r="0.5" fill="black"/>
                  <circle cx="45" cy="44" r="0.5" fill="black"/>
                  <circle cx="43.5" cy="47" r="0.5" fill="black"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* ページセット4（7-8ページ） */}
          <div className={`page-set ${currentPage === 4 ? '' : 'hidden'}`}>
            <div className="page-left">
              <div className="content">
                <h2>社内で個人AI活用5段階</h2>
                
                {/* AI活用成熟度5段階の図解 */}
                <div style={{ width: '100%', maxWidth: '420px', height: '480px', background: 'linear-gradient(135deg, #1e3c32 0%, #2d5a4b 50%, #1e3c32 100%)', borderRadius: '12px', padding: '30px', boxShadow: 'inset 0 0 60px rgba(0, 0, 0, 0.5), 0 15px 35px rgba(0, 0, 0, 0.6)', position: 'relative', display: 'flex', flexDirection: 'column', overflow: 'hidden', margin: '5px auto', fontFamily: 'Klee One, cursive, sans-serif' }}>
                  
                  {/* 黒板の質感 */}
                  <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.01) 2px, rgba(255, 255, 255, 0.01) 4px)', pointerEvents: 'none', opacity: '0.5' }}></div>
                  
                  {/* チョークの粉 */}
                  <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', background: 'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
                  
                  {/* タイトル */}
                  <div style={{ textAlign: 'center', fontSize: '1.1em', fontWeight: '600', color: 'rgba(255, 255, 255, 0.95)', marginBottom: '15px', letterSpacing: '2px', position: 'relative', zIndex: '1', transform: 'rotate(-0.5deg)' }}>
                    AI活用成熟度5段階
                    <div style={{ position: 'absolute', bottom: '-3px', left: '50%', transform: 'translateX(-50%) rotate(0.5deg)', width: '120px', height: '2px', background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.8) 80%, transparent)', opacity: '0.9' }}></div>
                  </div>
                  
                  {/* 階段視覚 */}
                  <div style={{ position: 'relative', flex: '1', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', zIndex: '1' }}>
                    
                    {/* レベル5 */}
                    <div style={{ position: 'relative', width: '100%', flex: '1', display: 'flex', alignItems: 'center', margin: '2px 0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', width: '60%', height: '100%', background: 'rgba(255, 255, 255, 0.03)', border: '1px dashed rgba(255, 255, 255, 0.5)', borderRadius: '5px', padding: '5px 8px', position: 'relative', overflow: 'hidden', backdropFilter: 'blur(1px)', marginLeft: '40%', transform: 'rotate(-0.1deg)' }}>
                        <div style={{ width: '20px', height: '20px', border: '2px solid rgba(240, 98, 146, 0.8)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7em', fontWeight: '600', flexShrink: '0', marginRight: '6px', background: 'rgba(255, 255, 255, 0.02)', transform: 'rotate(-5deg)', color: 'rgba(240, 98, 146, 0.95)' }}>5</div>
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                          <div style={{ fontSize: '0.85em', fontWeight: '600', marginBottom: '1px', display: 'flex', alignItems: 'center', gap: '3px', transform: 'rotate(0.3deg)', color: 'rgba(240, 98, 146, 0.95)' }}>
                            <span style={{ fontSize: '0.8em', filter: 'saturate(0.6) brightness(1.2)', opacity: '0.8' }}>🤖</span>
                            <span>自動化</span>
                          </div>
                          <div style={{ fontSize: '0.6em', lineHeight: '1.2', transform: 'rotate(-0.2deg)', color: 'rgba(255, 255, 255, 0.85)' }}>AIエージェントを使いこなせているか？</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* レベル4 */}
                    <div style={{ position: 'relative', width: '100%', flex: '1', display: 'flex', alignItems: 'center', margin: '2px 0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', width: '70%', height: '100%', background: 'rgba(255, 255, 255, 0.03)', border: '1px dashed rgba(255, 255, 255, 0.5)', borderRadius: '5px', padding: '5px 8px', position: 'relative', overflow: 'hidden', backdropFilter: 'blur(1px)', marginLeft: '30%', transform: 'rotate(0.3deg)' }}>
                        <div style={{ width: '20px', height: '20px', border: '2px solid rgba(255, 138, 101, 0.8)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7em', fontWeight: '600', flexShrink: '0', marginRight: '6px', background: 'rgba(255, 255, 255, 0.02)', transform: 'rotate(-5deg)', color: 'rgba(255, 138, 101, 0.95)' }}>4</div>
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                          <div style={{ fontSize: '0.85em', fontWeight: '600', marginBottom: '1px', display: 'flex', alignItems: 'center', gap: '3px', transform: 'rotate(0.3deg)', color: 'rgba(255, 138, 101, 0.95)' }}>
                            <span style={{ fontSize: '0.8em', filter: 'saturate(0.6) brightness(1.2)', opacity: '0.8' }}>🌟</span>
                            <span>ノウハウ展開</span>
                          </div>
                          <div style={{ fontSize: '0.6em', lineHeight: '1.2', transform: 'rotate(-0.2deg)', color: 'rgba(255, 255, 255, 0.85)' }}>他者や組織の生産性向上を実現</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* レベル3 */}
                    <div style={{ position: 'relative', width: '100%', flex: '1', display: 'flex', alignItems: 'center', margin: '2px 0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', width: '80%', height: '100%', background: 'rgba(255, 255, 255, 0.03)', border: '1px dashed rgba(255, 255, 255, 0.5)', borderRadius: '5px', padding: '5px 8px', position: 'relative', overflow: 'hidden', backdropFilter: 'blur(1px)', marginLeft: '20%', transform: 'rotate(-0.2deg)' }}>
                        <div style={{ width: '20px', height: '20px', border: '2px solid rgba(100, 181, 246, 0.8)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7em', fontWeight: '600', flexShrink: '0', marginRight: '6px', background: 'rgba(255, 255, 255, 0.02)', transform: 'rotate(-5deg)', color: 'rgba(100, 181, 246, 0.95)' }}>3</div>
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                          <div style={{ fontSize: '0.85em', fontWeight: '600', marginBottom: '1px', display: 'flex', alignItems: 'center', gap: '3px', transform: 'rotate(0.3deg)', color: 'rgba(100, 181, 246, 0.95)' }}>
                            <span style={{ fontSize: '0.8em', filter: 'saturate(0.6) brightness(1.2)', opacity: '0.8' }}>🔄</span>
                            <span>体系化</span>
                          </div>
                          <div style={{ fontSize: '0.6em', lineHeight: '1.2', transform: 'rotate(-0.2deg)', color: 'rgba(255, 255, 255, 0.85)' }}>既存業務にAIを組み込めているか？</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* レベル2 */}
                    <div style={{ position: 'relative', width: '100%', flex: '1', display: 'flex', alignItems: 'center', margin: '2px 0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', width: '90%', height: '100%', background: 'rgba(255, 255, 255, 0.03)', border: '1px dashed rgba(255, 255, 255, 0.5)', borderRadius: '5px', padding: '5px 8px', position: 'relative', overflow: 'hidden', backdropFilter: 'blur(1px)', marginLeft: '10%', transform: 'rotate(0.2deg)' }}>
                        <div style={{ width: '20px', height: '20px', border: '2px solid rgba(129, 199, 132, 0.8)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7em', fontWeight: '600', flexShrink: '0', marginRight: '6px', background: 'rgba(255, 255, 255, 0.02)', transform: 'rotate(-5deg)', color: 'rgba(129, 199, 132, 0.95)' }}>2</div>
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                          <div style={{ fontSize: '0.85em', fontWeight: '600', marginBottom: '1px', display: 'flex', alignItems: 'center', gap: '3px', transform: 'rotate(0.3deg)', color: 'rgba(129, 199, 132, 0.95)' }}>
                            <span style={{ fontSize: '0.8em', filter: 'saturate(0.6) brightness(1.2)', opacity: '0.8' }}>💡</span>
                            <span>業務相談</span>
                          </div>
                          <div style={{ fontSize: '0.6em', lineHeight: '1.2', transform: 'rotate(-0.2deg)', color: 'rgba(255, 255, 255, 0.85)' }}>AIに正しく仕事の悩み相談ができているか？</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* レベル1 */}
                    <div style={{ position: 'relative', width: '100%', flex: '1', display: 'flex', alignItems: 'center', margin: '2px 0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.03)', border: '1px dashed rgba(255, 255, 255, 0.5)', borderRadius: '5px', padding: '5px 8px', position: 'relative', overflow: 'hidden', backdropFilter: 'blur(1px)', marginLeft: '0', transform: 'rotate(-0.3deg)' }}>
                        <div style={{ width: '20px', height: '20px', border: '2px solid rgba(255, 235, 59, 0.8)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7em', fontWeight: '600', flexShrink: '0', marginRight: '6px', background: 'rgba(255, 255, 255, 0.02)', transform: 'rotate(-5deg)', color: 'rgba(255, 235, 59, 0.95)' }}>1</div>
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                          <div style={{ fontSize: '0.85em', fontWeight: '600', marginBottom: '1px', display: 'flex', alignItems: 'center', gap: '3px', transform: 'rotate(0.3deg)', color: 'rgba(255, 235, 59, 0.95)' }}>
                            <span style={{ fontSize: '0.8em', filter: 'saturate(0.6) brightness(1.2)', opacity: '0.8' }}>📚</span>
                            <span>リテラシー</span>
                          </div>
                          <div style={{ fontSize: '0.6em', lineHeight: '1.2', transform: 'rotate(-0.2deg)', color: 'rgba(255, 255, 255, 0.85)' }}>AIに入れてはいけない情報は何か？</div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                  {/* 黒板の枠 */}
                  <div style={{ position: 'absolute', top: '5px', left: '5px', right: '5px', bottom: '5px', border: '2px solid #8b4513', borderRadius: '8px', pointerEvents: 'none', boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.5), 0 0 15px rgba(139, 69, 19, 0.3)', zIndex: '0' }}></div>
                  
                  {/* チョーク風の装飾 */}
                  <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', pointerEvents: 'none', zIndex: '2', opacity: '0.15', background: 'radial-gradient(ellipse at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 40%), radial-gradient(ellipse at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 40%)' }}></div>
                </div>
              </div>
              <div className="page-number page-number-left">7</div>
            </div>
            
            <div className="page-right">
              <div className="content">
                <h2>レベル1｜リテラシー</h2>
                
                <p style={{ marginBottom: '0' }}><strong>「AIに入れてはいけない情報は何か？」</strong></p>
                <p style={{ marginBottom: '8px' }}>「ChatGPTにあなたの秘密をペラペラ明かさない方が良い--サム・アルトマン氏も危惧」<br />
                <strong>URL:</strong> <a href="https://japan.cnet.com/article/35235976/" target="_blank" style={{ color: '#333', textDecoration: 'none', background: 'linear-gradient(transparent 60%, #ffeb3b 60%, #ffeb3b 90%, transparent 90%)', padding: '0 2px', fontWeight: 'bold' }}>ニュース記事</a></p>
                
                <p style={{ marginBottom: '8px' }}><strong>▪️対策</strong></p>
                <div style={{ marginLeft: '0' }}>
                  <p style={{ margin: '0 0 16px 0' }}>・とにかく<span style={{ position: 'relative', display: 'inline-block', cursor: 'pointer', margin: '0 1px' }} onClick={(e) => {
                      const redSheet = e.currentTarget.querySelector('.red-sheet') as HTMLElement;
                      if (redSheet) {
                        redSheet.style.display = redSheet.style.display === 'none' ? 'block' : 'none';
                      }
                    }}>
                      <span style={{ color: '#ff0000', fontWeight: '900', fontFamily: 'Zen Kurenaido, sans-serif', letterSpacing: '0.5px', textShadow: '0 0 1px rgba(255,0,0,0.3)', position: 'relative' }}>
                        Gemini
                        <span style={{ position: 'absolute', bottom: '-3px', left: '0', right: '0', height: '2px', background: '#ff0000', opacity: '0.6', borderRadius: '1px' }}></span>
                      </span>
                      <span className="red-sheet" style={{ position: 'absolute', top: '-3px', left: '-4px', right: '-4px', bottom: '-3px', background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.88) 0%, rgba(220, 0, 0, 0.88) 50%, rgba(200, 0, 0, 0.88) 100%)', borderRadius: '2px', boxShadow: '0 1px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2)', display: 'block', zIndex: 1, backdropFilter: 'blur(2px)' }}>
                        <span style={{ position: 'absolute', top: '50%', left: '45%', transform: 'translate(-50%, -50%)', color: 'rgba(255,255,255,0.6)', fontSize: '7px', fontWeight: 'normal', letterSpacing: '0.5px' }}>tap</span>
                      </span>
                    </span>(会社使用公認のAI)を使う<br />
                    <span style={{ paddingLeft: '20px' }}>→エンタープライズプランに入っており、セキュリティおよびプライバシー保護が適用されている</span></p>
                </div>
                
                <p style={{ marginBottom: '8px' }}><strong>▪️他のAIに入れてはいけない情報</strong></p>
                <div style={{ marginLeft: '0' }}>
                  <p style={{ margin: '0' }}>1.求職者の個人情報</p>
                  <p style={{ margin: '0 0 4px 0' }}>2.あらゆる数値データ</p>
                  <p style={{ margin: '0', paddingLeft: '20px' }}>※必ず一時チャットモードを使うこと</p>
                </div>
              </div>
              <div className="page-number page-number-right">8</div>
              {/* パラパラ漫画: 近づく */}
              <div className="flipbook">
                <svg viewBox="0 0 60 80">
                  {/* 棒人間が近づく */}
                  <circle cx="18" cy="35" r="5" fill="none" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="40" x2="18" y2="60" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="45" x2="14" y2="53" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="45" x2="22" y2="51" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="60" x2="16" y2="75" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="60" x2="20" y2="75" stroke="black" strokeWidth="1.5"/>
                  
                  {/* ロボット（少し大きく、10ページ目と同じデザイン） */}
                  <rect x="36" y="39" width="8" height="10" fill="none" stroke="black" strokeWidth="1.3"/>
                  <circle cx="40" cy="35" r="4" fill="none" stroke="black" strokeWidth="1.3"/>
                  {/* ロボットの目 */}
                  <circle cx="38" cy="34" r="1" fill="black"/>
                  <circle cx="42" cy="34" r="1" fill="black"/>
                  {/* ロボットの口（微笑み） */}
                  <path d="M 38 37 Q 40 38.5 42 37" stroke="black" strokeWidth="0.9" fill="none"/>
                  {/* アンテナ */}
                  <line x1="40" y1="31" x2="40" y2="27" stroke="black" strokeWidth="1"/>
                  <circle cx="40" cy="26" r="1.5" fill="black"/>
                  {/* 腕と脚 */}
                  <line x1="36" y1="49" x2="35" y2="57" stroke="black" strokeWidth="1.3"/>
                  <line x1="44" y1="49" x2="45" y2="57" stroke="black" strokeWidth="1.3"/>
                  <line x1="36" y1="43" x2="33" y2="47" stroke="black" strokeWidth="1.3"/>
                  <line x1="44" y1="43" x2="47" y2="47" stroke="black" strokeWidth="1.3"/>
                  {/* ボルト飾り */}
                  <circle cx="38.5" cy="42" r="0.7" fill="black"/>
                  <circle cx="41.5" cy="42" r="0.7" fill="black"/>
                  <circle cx="40" cy="45.5" r="0.7" fill="black"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* ページセット5（9-10ページ） */}
          <div className={`page-set ${currentPage === 5 ? '' : 'hidden'}`}>
            <div className="page-left">
              <div className="content">
                <h2>レベル2｜業務相談</h2>
                
                <p style={{ marginBottom: '12px' }}><strong>「AIに正しく仕事の悩み相談ができているか？」</strong></p>
                
                {/* 付箋風デザイン */}
                <div style={{ position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', padding: '0 10px' }}>
                    <div style={{ width: '8px', height: '8px', background: '#4a7c2e', borderRadius: '50%', marginRight: '8px' }}></div>
                    <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#2d5016' }}>ポイント</span>
                  </div>
                  
                  {/* 付箋グリッドレイアウト */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', margin: '0 -10px', padding: '5px' }}>
                    
                    {/* 付箋1 - 緑 */}
                    <div style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)', borderRadius: '0 0 2px 2px', padding: '12px 10px 10px', boxShadow: '2px 4px 6px rgba(0,0,0,0.15), inset 0 -1px 0 rgba(0,0,0,0.05)', position: 'relative', transform: 'rotate(-2deg)', margin: '5px' }}>
                      {/* 付箋の上部の折れ */}
                      <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '8px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.05), transparent)', borderRadius: '2px 2px 0 0' }}></div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <div style={{ width: '18px', height: '18px', background: '#4a7c2e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '10px', marginRight: '6px', marginTop: '2px' }}>1</div>
                        <span style={{ fontWeight: 'bold', fontSize: '11px', color: '#2d5016' }}>テクニック不要</span>
                      </div>
                      <p style={{ margin: '0', fontSize: '10px', color: '#555', lineHeight: '1.4', fontFamily: 'Noto Sans JP, sans-serif' }}>AIの進化でプロンプトテクニックは不要に！自然な会話でOK</p>
                    </div>
                    
                    {/* 付箋2 - 黄色 */}
                    <div style={{ background: 'linear-gradient(135deg, #fff9c4 0%, #ffeb3b 100%)', borderRadius: '0 0 2px 2px', padding: '12px 10px 10px', boxShadow: '2px 4px 6px rgba(0,0,0,0.15), inset 0 -1px 0 rgba(0,0,0,0.05)', position: 'relative', transform: 'rotate(1.5deg)', margin: '5px' }}>
                      <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '8px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.05), transparent)', borderRadius: '2px 2px 0 0' }}></div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <div style={{ width: '18px', height: '18px', background: '#f9a825', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '10px', marginRight: '6px', marginTop: '2px' }}>2</div>
                        <span style={{ fontWeight: 'bold', fontSize: '11px', color: '#2d5016' }}>言語化力</span>
                      </div>
                      <p style={{ margin: '0', fontSize: '10px', color: '#555', lineHeight: '1.4' }}>「プロンプト力=言語化力」目的と具体例を詳しく、分かりやすく書く！</p>
                    </div>
                    
                    {/* 付箋3 - ピンク */}
                    <div style={{ background: 'linear-gradient(135deg, #ffcdd2 0%, #ef9a9a 100%)', borderRadius: '0 0 2px 2px', padding: '12px 10px 10px', boxShadow: '2px 4px 6px rgba(0,0,0,0.15), inset 0 -1px 0 rgba(0,0,0,0.05)', position: 'relative', transform: 'rotate(-1.8deg)', margin: '5px' }}>
                      <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '8px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.05), transparent)', borderRadius: '2px 2px 0 0' }}></div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <div style={{ width: '18px', height: '18px', background: '#d32f2f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '10px', marginRight: '6px', marginTop: '2px' }}>3</div>
                        <span style={{ fontWeight: 'bold', fontSize: '11px', color: '#2d5016' }}>ソース確認</span>
                      </div>
                      <p style={{ margin: '0', fontSize: '10px', color: '#555', lineHeight: '1.4' }}>誤った回答をしていないか必ずソース確認は必須！</p>
                    </div>
                    
                    {/* 付箋4 - 青 */}
                    <div style={{ background: 'linear-gradient(135deg, #bbdefb 0%, #90caf9 100%)', borderRadius: '0 0 2px 2px', padding: '12px 10px 10px', boxShadow: '2px 4px 6px rgba(0,0,0,0.15), inset 0 -1px 0 rgba(0,0,0,0.05)', position: 'relative', transform: 'rotate(2.3deg)', margin: '5px' }}>
                      <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '8px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.05), transparent)', borderRadius: '2px 2px 0 0' }}></div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <div style={{ width: '18px', height: '18px', background: '#0288d1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '10px', marginRight: '6px', marginTop: '2px' }}>4</div>
                        <span style={{ fontWeight: 'bold', fontSize: '11px', color: '#2d5016' }}>対話型解決</span>
                      </div>
                      <p style={{ margin: '0', fontSize: '10px', color: '#555', lineHeight: '1.4' }}>一発で解決策をもらおうとせず、会話しながら解決する</p>
                    </div>
                    
                    {/* 付箋5 - 紫 */}
                    <div style={{ background: 'linear-gradient(135deg, #e1bee7 0%, #ce93d8 100%)', borderRadius: '0 0 2px 2px', padding: '12px 10px 10px', boxShadow: '2px 4px 6px rgba(0,0,0,0.15), inset 0 -1px 0 rgba(0,0,0,0.05)', position: 'relative', transform: 'rotate(-2.5deg)', margin: '5px' }}>
                      <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '8px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.05), transparent)', borderRadius: '2px 2px 0 0' }}></div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <div style={{ width: '18px', height: '18px', background: '#8e24aa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '10px', marginRight: '6px', marginTop: '2px' }}>5</div>
                        <span style={{ fontWeight: 'bold', fontSize: '11px', color: '#2d5016' }}>自己責任</span>
                      </div>
                      <p style={{ margin: '0', fontSize: '10px', color: '#555', lineHeight: '1.4' }}>「これはAIが生成した」は言い訳にならない！</p>
                    </div>
                    
                    {/* 付箋6（特別） - オレンジ */}
                    <div style={{ background: 'linear-gradient(135deg, #ffe0b2 0%, #ffcc80 100%)', borderRadius: '0 0 2px 2px', padding: '12px 10px 10px', boxShadow: '3px 5px 8px rgba(0,0,0,0.2), inset 0 -1px 0 rgba(0,0,0,0.05)', position: 'relative', transform: 'rotate(1deg)', margin: '5px' }}>
                      <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '8px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.08), transparent)', borderRadius: '2px 2px 0 0' }}></div>
                      {/* 星マーク（右上） */}
                      <div style={{ position: 'absolute', top: '-5px', right: '-5px', width: '25px', height: '25px', background: '#ff6f00', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', transform: 'rotate(-15deg)' }}>★</div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '11px', color: '#2d5016', marginLeft: '2px' }}>成長サイクル</span>
                      </div>
                      <p style={{ margin: '0', fontSize: '10px', color: '#555', lineHeight: '1.4', fontWeight: '500' }}>AIを使えば使うほど、プロンプト力(発想力/質問力)が向上！</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-number page-number-left">9</div>
            </div>
            
            <div className="page-right">
              <div className="content">
                {/* 色鉛筆風の囲み枠 */}
                <div style={{ position: 'relative', margin: '0 -8px 16px', padding: '12px 14px 10px', borderRadius: '12px', background: 'rgba(255,255,255,0.75)' }}>
                  {/* 外側の手描きライン（太め） */}
                  <div style={{ position: 'absolute', inset: '-5px', border: '2.5px solid rgba(0,0,0,0.8)', borderRadius: '14px', transform: 'rotate(-0.5deg)', filter: 'blur(0.3px)', boxShadow: '0 0 0 1px rgba(0,0,0,0.15), 0 0 0 2px rgba(0,0,0,0.1)', pointerEvents: 'none' }}></div>
                  {/* 内側の手描きライン（細め、色ズレでクレヨン感） */}
                  <div style={{ position: 'absolute', inset: '-2px', border: '1.8px solid rgba(0,0,0,0.6)', borderRadius: '14px', transform: 'rotate(0.4deg)', mixBlendMode: 'multiply', pointerEvents: 'none' }}></div>
                  {/* 追加の装飾線（かすれ感） */}
                  <div style={{ position: 'absolute', inset: '-6px', border: '1px solid rgba(0,0,0,0.25)', borderRadius: '15px', transform: 'rotate(-0.8deg)', pointerEvents: 'none' }}></div>
                  
                  <p style={{ marginBottom: '8px', position: 'relative', zIndex: '1' }}><strong>▪️AIへの相談手順</strong></p>
                  <div style={{ marginLeft: '0', position: 'relative', zIndex: '1' }}>
                    <p style={{ margin: '0 0 3px 0', paddingLeft: '15px', textIndent: '-15px', color: '#444' }}>・Step1: まず問題を分析する</p>
                    <p style={{ margin: '0 0 3px 0', paddingLeft: '15px', textIndent: '-15px', color: '#444' }}>・Step2: AIの回答にフィードバックする</p>
                    <p style={{ margin: '0 0 3px 0', paddingLeft: '15px', textIndent: '-15px', color: '#444' }}>・Step3: 解決方法を検討する</p>
                    <p style={{ margin: '0 0 2px 0', paddingLeft: '15px', textIndent: '-15px', color: '#444' }}>・Step4: ネクストアクションに落とし込む</p>
                  </div>
                </div>
                
                <p style={{ marginBottom: '8px' }}><strong>▪️チャット事例</strong></p>
                <div style={{ marginLeft: '0' }}>
                  <p style={{ margin: '0 0 2px 0', paddingLeft: '20px' }}>1. <a href="https://g.co/gemini/share/4946013829aa" target="_blank" style={{ color: '#333', textDecoration: 'none', background: 'linear-gradient(transparent 60%, #ffeb3b 60%, #ffeb3b 90%, transparent 90%)', padding: '0 2px', fontWeight: 'bold' }}>いきなり解決策を聞くパターン</a></p>
                  <p style={{ margin: '0 0 16px 0', paddingLeft: '20px' }}>2. <a href="https://g.co/gemini/share/21859c81da05" target="_blank" style={{ color: '#333', textDecoration: 'none', background: 'linear-gradient(transparent 60%, #ffeb3b 60%, #ffeb3b 90%, transparent 90%)', padding: '0 2px', fontWeight: 'bold' }}>正しい相談手順で聞くパターン</a></p>
                </div>
                
                
                <p style={{ marginBottom: '8px' }}><strong>■Geminiを自分用にカスタマイズ</strong></p>
                <div style={{ marginLeft: '0' }}>
                  <p style={{ margin: '0 0 4px 0', paddingLeft: '15px', textIndent: '-15px' }}>・「設定とヘルプ」→「保存された情報」</p>
                  <p style={{ margin: '0 0 8px 0', paddingLeft: '15px', textIndent: '-15px' }}>・自分の業務情報を入れておくと自分好みの回答になる。</p>
                </div>
                
                <p style={{ marginTop: '16px', textAlign: 'center' }}><strong style={{ background: 'linear-gradient(transparent 50%, #ff9999 50%, #ff9999 85%, transparent 85%)', padding: '2px 4px', display: 'inline-block', fontSize: '16px', whiteSpace: 'nowrap', transform: 'rotate(-3deg)' }}>ワーク！設定してみよう！</strong></p>
              </div>
              <div className="page-number page-number-right">10</div>
              {/* パラパラ漫画: 向き合う */}
              <div className="flipbook">
                <svg viewBox="0 0 60 80">
                  {/* 棒人間 */}
                  <circle cx="18" cy="35" r="5" fill="none" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="40" x2="18" y2="60" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="45" x2="13" y2="53" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="45" x2="23" y2="53" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="60" x2="16" y2="75" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="60" x2="20" y2="75" stroke="black" strokeWidth="1.5"/>
                  
                  {/* ロボット */}
                  <rect x="34" y="37" width="10" height="12" fill="none" stroke="black" strokeWidth="1.5"/>
                  <circle cx="39" cy="32" r="5" fill="none" stroke="black" strokeWidth="1.5"/>
                  {/* ロボットの目 */}
                  <circle cx="36" cy="31" r="1.2" fill="black"/>
                  <circle cx="42" cy="31" r="1.2" fill="black"/>
                  {/* ロボットの口（微笑み） */}
                  <path d="M 36 34 Q 39 36 42 34" stroke="black" strokeWidth="1" fill="none"/>
                  {/* アンテナ */}
                  <line x1="39" y1="27" x2="39" y2="23" stroke="black" strokeWidth="1.2"/>
                  <circle cx="39" cy="22" r="2" fill="black"/>
                  {/* ロボットの腕と脚 */}
                  <line x1="34" y1="49" x2="32" y2="59" stroke="black" strokeWidth="1.5"/>
                  <line x1="44" y1="49" x2="46" y2="59" stroke="black" strokeWidth="1.5"/>
                  <line x1="34" y1="42" x2="30" y2="47" stroke="black" strokeWidth="1.5"/>
                  <line x1="44" y1="42" x2="48" y2="47" stroke="black" strokeWidth="1.5"/>
                  {/* ボルト飾り */}
                  <circle cx="37" cy="41" r="0.8" fill="black"/>
                  <circle cx="41" cy="41" r="0.8" fill="black"/>
                  <circle cx="39" cy="45" r="0.8" fill="black"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* ページセット6（11-12ページ） */}
          <div className={`page-set ${currentPage === 6 ? '' : 'hidden'}`}>
            <div className="page-left">
              <div className="content">
                <h2>レベル3｜体系化</h2>
                
                <p><strong>「業務にAIを組み込めているか？」</strong></p>
                
                {/* 学級掲示板風事例紹介 */}
                <div style={{ margin: '16px -15px', padding: '20px', background: 'linear-gradient(135deg, #d4a574 0%, #c49464 50%, #b8845a 100%)', borderRadius: '8px', position: 'relative', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                  {/* コルクボード風の質感 */}
                  <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(160, 82, 45, 0.05) 3px, rgba(160, 82, 45, 0.05) 6px)', pointerEvents: 'none' }}></div>
                  
                  <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#4a2c17', fontSize: '16px', fontWeight: 'bold', fontFamily: 'Comic Sans MS, cursive', textShadow: '1px 1px 2px rgba(255,255,255,0.5)' }}>▪️事例紹介</h3>
                  
                  {/* 事例1: 記事リライト（黄色の紙） */}
                  <div style={{ position: 'relative', background: '#fff3a0', padding: '15px', margin: '10px 5px', borderRadius: '3px', transform: 'rotate(-2deg)', boxShadow: '0 3px 8px rgba(0,0,0,0.2)', border: '1px solid #e6d875' }}>
                    {/* ピン */}
                    <div style={{ position: 'absolute', top: '-5px', right: '20px', width: '12px', height: '12px', background: 'radial-gradient(circle, #ff6b6b 30%, #d63384 70%)', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}></div>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold', color: '#2d3748', fontFamily: 'Comic Sans MS, cursive' }}>📄 記事リライト</h4>
                    <p style={{ margin: '0 0 5px 0', fontSize: '12px', color: '#4a5568', lineHeight: '1.4' }}>→ニーズ想定、記事構成、本文作成をAIで！</p>
                    <p style={{ margin: '0', fontSize: '12px', color: '#e53e3e', fontWeight: 'bold' }}>→外注費50万円くらいの削減に成功！</p>
                  </div>
                  
                  {/* 事例2: プロトタイプ作成（ピンクの紙） */}
                  <div style={{ position: 'relative', background: '#ffb3ba', padding: '15px', margin: '10px 5px', borderRadius: '3px', transform: 'rotate(-1deg)', boxShadow: '0 3px 8px rgba(0,0,0,0.2)', border: '1px solid #ff8a95' }}>
                    {/* ピン */}
                    <div style={{ position: 'absolute', top: '-5px', right: '30px', width: '12px', height: '12px', background: 'radial-gradient(circle, #ffd93d 30%, #ff9800 70%)', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}></div>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold', color: '#2d3748', fontFamily: 'Comic Sans MS, cursive' }}>⚡ プロトタイプ作成</h4>
                    <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#4a5568', lineHeight: '1.4' }}>施策のプロトタイプを作る</p>
                    <div style={{ fontSize: '11px' }}>
                      <p style={{ margin: '0 0 3px 0' }}><strong>URL:</strong> <a href="https://claude.ai/public/artifacts/c3dff835-dc73-4d2d-b179-e1cd7334f714" target="_blank" style={{ color: '#0066cc', textDecoration: 'underline', fontWeight: 'bold' }}>サイトのクローン</a></p>
                      <p style={{ margin: '0' }}><strong>URL:</strong> <a href="https://claude.ai/public/artifacts/e2d240a9-e38a-4def-9d40-b54b1d7eb45f" target="_blank" style={{ color: '#0066cc', textDecoration: 'underline', fontWeight: 'bold' }}>LINE診断コンテンツ</a></p>
                    </div>
                  </div>
                  
                  {/* 掲示板の装飾要素 */}
                  <div style={{ position: 'absolute', top: '10px', left: '10px', width: '8px', height: '8px', background: '#8b4513', borderRadius: '50%', boxShadow: 'inset 0 0 3px rgba(0,0,0,0.3)' }}></div>
                  <div style={{ position: 'absolute', top: '10px', right: '10px', width: '8px', height: '8px', background: '#8b4513', borderRadius: '50%', boxShadow: 'inset 0 0 3px rgba(0,0,0,0.3)' }}></div>
                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '8px', height: '8px', background: '#8b4513', borderRadius: '50%', boxShadow: 'inset 0 0 3px rgba(0,0,0,0.3)' }}></div>
                  <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '8px', height: '8px', background: '#8b4513', borderRadius: '50%', boxShadow: 'inset 0 0 3px rgba(0,0,0,0.3)' }}></div>
                </div>
              </div>
              <div className="page-number page-number-left">11</div>
            </div>
            
            <div className="page-right">
              <div className="content">
                <h2>レベル4｜ノウハウ展開</h2>
                
                <p><strong>「個人に留まらず、他者や組織の生産性向上を実現できているか？」</strong></p>
                
                <p style={{ marginBottom: '0' }}>AI推進部を作っても失敗している会社が多い。</p>
                <p>→AI導入してもニーズが違うから使われない。<br />
                <span style={{ marginLeft: '15px', background: 'linear-gradient(transparent 50%, #ff9999 50%, #ff9999 85%, transparent 85%)', padding: '1px 2px' }}>→現場主体で動かないとAI活用は進まない！</span></p>
                
                {/* AIが使える業務を探す手順の図解（試験用紙風） */}
                <div style={{ margin: '16px 0 8px', padding: '16px', background: '#fefefe', border: '2px solid #333', position: 'relative', maxWidth: '320px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  {/* 試験用紙風のヘッダー線 */}
                  <div style={{ position: 'absolute', top: '5px', left: '16px', right: '16px', height: '1px', background: '#333' }}></div>
                  <div style={{ position: 'absolute', top: '8px', left: '16px', right: '16px', height: '1px', background: '#333' }}></div>
                  
                  <h3 style={{ textAlign: 'center', margin: '10px 0 13px', color: '#333', fontSize: '12px', fontWeight: 'bold', fontFamily: 'MS Gothic, monospace' }}>■AIが使える業務を探す手順</h3>
                  
                  {/* Step1 */}
                  <div style={{ marginBottom: '7px', padding: '7px', border: '1px solid #666', background: '#f9f9f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ width: '18px', height: '18px', border: '2px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#333', marginRight: '8px', fontSize: '11px', background: 'white' }}>1</div>
                      <div style={{ flex: '1', fontSize: '12px', fontFamily: 'MS Gothic, monospace' }}>
                        <span style={{ fontWeight: '600', color: '#333' }}>AIが使える業務を探す</span>
                        <span onClick={openPromptModal} style={{ color: '#0066cc', cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold', marginLeft: '5px', fontSize: '11px' }}>(参考プロンプト)</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step2 */}
                  <div style={{ marginBottom: '7px', padding: '7px', border: '1px solid #666', background: '#f9f9f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ width: '18px', height: '18px', border: '2px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#333', marginRight: '8px', fontSize: '11px', background: 'white' }}>2</div>
                      <div style={{ flex: '1', fontSize: '12px', fontFamily: 'MS Gothic, monospace' }}>
                        <span style={{ fontWeight: '600', color: '#333' }}>プロンプトを作る</span>
                        <a href="https://console.anthropic.com/dashboard" target="_blank" style={{ color: '#0066cc', cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold', marginLeft: '5px', fontSize: '11px' }}>(プロンプト生成)</a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step3 */}
                  <div style={{ padding: '7px', border: '1px solid #666', background: '#f9f9f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ width: '18px', height: '18px', border: '2px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#333', marginRight: '8px', fontSize: '11px', background: 'white' }}>3</div>
                      <div style={{ flex: '1', fontSize: '12px', fontFamily: 'MS Gothic, monospace' }}>
                        <span style={{ fontWeight: '600', color: '#333' }}>よく使うプロンプトは</span><strong style={{ color: '#333' }}>Gem</strong><span style={{ fontWeight: '600', color: '#333' }}>に入れる</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* 試験用紙風のフッター線 */}
                  <div style={{ position: 'absolute', bottom: '5px', left: '16px', right: '16px', height: '1px', background: '#333' }}></div>
                </div>
              </div>
              <div className="page-number page-number-right">12</div>
              {/* パラパラ漫画: 挨拶 */}
              <div className="flipbook">
                <svg viewBox="0 0 60 80">
                  {/* 棒人間（手を挙げる） */}
                  <circle cx="16" cy="35" r="5" fill="none" stroke="black" strokeWidth="1.5"/>
                  <line x1="16" y1="40" x2="16" y2="60" stroke="black" strokeWidth="1.5"/>
                  {/* 挙げた手 */}
                  <line x1="16" y1="45" x2="22" y2="37" stroke="black" strokeWidth="1.5"/>
                  <line x1="16" y1="45" x2="11" y2="53" stroke="black" strokeWidth="1.5"/>
                  {/* 手のひら */}
                  <circle cx="23" cy="36" r="2" fill="none" stroke="black" strokeWidth="1"/>
                  <line x1="16" y1="60" x2="14" y2="75" stroke="black" strokeWidth="1.5"/>
                  <line x1="16" y1="60" x2="18" y2="75" stroke="black" strokeWidth="1.5"/>
                  {/* 吹き出し */}
                  <ellipse cx="10" cy="25" rx="8" ry="5" fill="none" stroke="black" strokeWidth="1"/>
                  <path d="M 13 29 L 15 33 L 11 29" fill="black"/>
                  <text x="7" y="27" fontSize="5" fill="black">Hi!</text>
                  
                  {/* ロボット（手を挙げる） */}
                  <rect x="34" y="37" width="10" height="12" fill="none" stroke="black" strokeWidth="1.5"/>
                  <circle cx="39" cy="32" r="5" fill="none" stroke="black" strokeWidth="1.5"/>
                  {/* ロボットの目（光る） */}
                  <circle cx="36" cy="31" r="1.5" fill="black"/>
                  <circle cx="42" cy="31" r="1.5" fill="black"/>
                  <circle cx="36.5" cy="30.5" r="0.5" fill="white"/>
                  <circle cx="42.5" cy="30.5" r="0.5" fill="white"/>
                  {/* ロボットの口（大きな笑顔） */}
                  <path d="M 35 34 Q 39 37 43 34" stroke="black" strokeWidth="1.2" fill="none"/>
                  {/* アンテナ（電波） */}
                  <line x1="39" y1="27" x2="39" y2="23" stroke="black" strokeWidth="1.2"/>
                  <circle cx="39" cy="22" r="2" fill="black"/>
                  <circle cx="39" cy="22" r="4" fill="none" stroke="black" strokeWidth="0.5" strokeDasharray="1,1"/>
                  {/* ロボットの腕（挙げた手） */}
                  <line x1="34" y1="49" x2="32" y2="59" stroke="black" strokeWidth="1.5"/>
                  <line x1="44" y1="49" x2="46" y2="59" stroke="black" strokeWidth="1.5"/>
                  <line x1="44" y1="42" x2="50" y2="35" stroke="black" strokeWidth="1.5"/>
                  <line x1="34" y1="42" x2="30" y2="47" stroke="black" strokeWidth="1.5"/>
                  {/* ロボットの手 */}
                  <rect x="48" y="33" width="4" height="4" fill="none" stroke="black" strokeWidth="1"/>
                  {/* ボルト飾り */}
                  <circle cx="37" cy="41" r="0.8" fill="black"/>
                  <circle cx="41" cy="41" r="0.8" fill="black"/>
                  <circle cx="39" cy="45" r="0.8" fill="black"/>
                  {/* ロボットの吹き出し */}
                  <ellipse cx="48" cy="25" rx="9" ry="5" fill="none" stroke="black" strokeWidth="1"/>
                  <path d="M 45 29 L 43 33 L 47 29" fill="black"/>
                  <text x="43" y="27" fontSize="5" fill="black">Hello!</text>
                </svg>
              </div>
            </div>
          </div>
          
          {/* ページセット7（13-14ページ） */}
          <div className={`page-set ${currentPage === 7 ? '' : 'hidden'}`}>
            <div className="page-left">
              <div className="content">
                <h2>レベル5｜自動化</h2>
                
                <p><strong>「AIエージェントを使いこなせているか？」</strong></p>
                
                {/* 色鉛筆風の囲み枠 */}
                <div style={{ position: 'relative', margin: '0 -8px 16px', padding: '12px 14px 10px', borderRadius: '12px', background: 'rgba(255,255,255,0.75)' }}>
                  {/* 外側の手描きライン（太め） */}
                  <div style={{ position: 'absolute', inset: '-5px', border: '2.5px solid rgba(0,0,0,0.8)', borderRadius: '14px', transform: 'rotate(-0.5deg)', filter: 'blur(0.3px)', boxShadow: '0 0 0 1px rgba(0,0,0,0.15), 0 0 0 2px rgba(0,0,0,0.1)', pointerEvents: 'none' }}></div>
                  {/* 内側の手描きライン（細め、色ズレでクレヨン感） */}
                  <div style={{ position: 'absolute', inset: '-2px', border: '1.8px solid rgba(0,0,0,0.6)', borderRadius: '14px', transform: 'rotate(0.4deg)', mixBlendMode: 'multiply', pointerEvents: 'none' }}></div>
                  {/* 追加の装飾線（かすれ感） */}
                  <div style={{ position: 'absolute', inset: '-6px', border: '1px solid rgba(0,0,0,0.25)', borderRadius: '15px', transform: 'rotate(-0.8deg)', pointerEvents: 'none' }}></div>
                  
                  <p style={{ marginBottom: '8px', position: 'relative', zIndex: '1' }}><strong>▪️AIエージェントとは？</strong></p>
                  <div style={{ marginLeft: '0', position: 'relative', zIndex: '1' }}>
                    <p style={{ margin: '0 0 4px 0', paddingLeft: '15px', textIndent: '-15px', color: '#444' }}>・普通のAI: 回答生成のみ</p>
                    <p style={{ margin: '0 0 4px 0', paddingLeft: '15px', textIndent: '-15px', color: '#444' }}>・AIエージェント: 回答生成&タスク実行</p>
                    <p style={{ margin: '0 0 4px 0', color: '#444' }}>→人がやっていた作業もやってくれる</p>
                  </div>
                </div>
                
                <p style={{ marginTop: '16px', marginBottom: '8px' }}><strong>例)</strong></p>
                <div style={{ marginLeft: '0' }}>
                  <p style={{ margin: '0 0 4px 0', paddingLeft: '15px', textIndent: '-15px' }}>・リサーチ→スライド作成→Google Drive格納</p>
                  <p style={{ margin: '0 0 4px 0', paddingLeft: '15px', textIndent: '-15px' }}>・食べログ検索→予約</p>
                  <p style={{ margin: '0 0 8px 0', paddingLeft: '15px', textIndent: '-15px' }}>・求人検索→キープ→求人比較 <a href="https://chatgpt.com/share/689fc101-e3c0-8008-9b5e-a14d9d15919b" target="_blank" style={{ color: '#333', textDecoration: 'none', background: 'linear-gradient(transparent 60%, #ffeb3b 60%, #ffeb3b 90%, transparent 90%)', padding: '0 2px', fontWeight: 'bold' }}>(事例)</a></p>
                </div>
              </div>
              <div className="page-number page-number-left">13</div>
            </div>
            
            <div className="page-right">
              <div className="content">
                <h2>オススメAIツール</h2>
                
                <p style={{ marginBottom: '8px' }}><strong>▪️<a href="https://notebooklm.google.com/" target="_blank" style={{ color: '#333', textDecoration: 'none', background: 'linear-gradient(transparent 60%, #ffeb3b 60%, #ffeb3b 90%, transparent 90%)', padding: '0 2px', fontWeight: 'bold' }}>NotebookLM</a>(時短勉強にオススメ！)</strong></p>
                <p style={{ margin: '0 0 16px 0', paddingLeft: '0', textIndent: '0' }}>ネット記事・YouTube・PDFを読み込んでAIが解説！チャット・マインドマップ・ラジオ・動画にもできる。</p>
                
                <p style={{ marginBottom: '8px' }}><strong>▪️<a href="https://www.genspark.ai/" target="_blank" style={{ color: '#333', textDecoration: 'none', background: 'linear-gradient(transparent 60%, #ffeb3b 60%, #ffeb3b 90%, transparent 90%)', padding: '0 2px', fontWeight: 'bold' }}>Genspark</a>(リサーチ/スライド作成)</strong></p>
                <p style={{ margin: '0 0 4px 0', paddingLeft: '0', textIndent: '0' }}>「ネット検索→スライド作成」までできる。</p>
                <p style={{ margin: '0 0 4px 0', paddingLeft: '0', textIndent: '0' }}>色んな最新AIツールが統合されているのでお得！</p>
                <p style={{ margin: '0 0 16px 0', paddingLeft: '0', textIndent: '0' }}>→中国製類似ツール Manusも良い！</p>
                
                <p style={{ marginBottom: '8px' }}><strong>▪️遊んでみてほしいAI</strong></p>
                <p style={{ margin: '0 0 4px 0', paddingLeft: '0', textIndent: '0' }}>・画像生成AI: Gemini, ChatGPT, Midjourney, Flux</p>
                <p style={{ margin: '0 0 4px 0', paddingLeft: '0', textIndent: '0' }}>・動画生成AI: Veo3, Runway, Hailuo, Kling, Wan</p>
                <p style={{ margin: '0 0 4px 0', paddingLeft: '0', textIndent: '0' }}>・音楽生成AI: Suno, udio, Elevenlabs</p>
                <p style={{ margin: '0 0 16px 0', paddingLeft: '0', textIndent: '0' }}>・コード生成: Claude</p>
              </div>
              <div className="page-number page-number-right">14</div>
              {/* パラパラ漫画: 握手 */}
              <div className="flipbook">
                <svg viewBox="0 0 60 80">
                  {/* 棒人間 */}
                  <circle cx="18" cy="35" r="5" fill="none" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="40" x2="18" y2="60" stroke="black" strokeWidth="1.5"/>
                  {/* 握手する腕 */}
                  <line x1="18" y1="45" x2="26" y2="47" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="45" x2="13" y2="53" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="60" x2="16" y2="75" stroke="black" strokeWidth="1.5"/>
                  <line x1="18" y1="60" x2="20" y2="75" stroke="black" strokeWidth="1.5"/>
                  
                  {/* ロボット */}
                  <rect x="34" y="37" width="10" height="12" fill="none" stroke="black" strokeWidth="1.5"/>
                  <circle cx="39" cy="32" r="5" fill="none" stroke="black" strokeWidth="1.5"/>
                  {/* ロボットの目（幸せそう） */}
                  <path d="M 34 31 Q 36 29 38 31" stroke="black" strokeWidth="1.2" fill="none"/>
                  <path d="M 40 31 Q 42 29 44 31" stroke="black" strokeWidth="1.2" fill="none"/>
                  {/* ロボットの口（笑顔） */}
                  <path d="M 35 34 Q 39 36 43 34" stroke="black" strokeWidth="1.2" fill="none"/>
                  {/* アンテナ（光る） */}
                  <line x1="39" y1="27" x2="39" y2="23" stroke="black" strokeWidth="1.2"/>
                  <circle cx="39" cy="22" r="2" fill="black"/>
                  <path d="M 36 20 L 37 22 L 36 24 M 42 20 L 41 22 L 42 24" stroke="black" strokeWidth="0.8" fill="none"/>
                  {/* ロボットの腕（握手） */}
                  <line x1="34" y1="49" x2="32" y2="59" stroke="black" strokeWidth="1.5"/>
                  <line x1="44" y1="49" x2="46" y2="59" stroke="black" strokeWidth="1.5"/>
                  <line x1="34" y1="42" x2="28" y2="46" stroke="black" strokeWidth="1.5"/>
                  <line x1="44" y1="42" x2="48" y2="47" stroke="black" strokeWidth="1.5"/>
                  
                  {/* 握手部分 */}
                  <ellipse cx="27" cy="47" rx="3" ry="2" fill="none" stroke="black" strokeWidth="1.5"/>
                  {/* 握手の線 */}
                  <line x1="25" y1="46" x2="29" y2="48" stroke="black" strokeWidth="0.8"/>
                  <line x1="25" y1="48" x2="29" y2="46" stroke="black" strokeWidth="0.8"/>
                  
                  {/* ボルト飾り */}
                  <circle cx="37" cy="41" r="0.8" fill="black"/>
                  <circle cx="41" cy="41" r="0.8" fill="black"/>
                  <circle cx="39" cy="45" r="0.8" fill="black"/>
                  
                  {/* ハートマーク */}
                  <path d="M 27 39 C 27 37, 25 37, 25 38 C 25 37, 23 37, 23 39 Q 23 41, 25 43 Q 27 41, 27 39 Z" fill="black"/>
                  <path d="M 33 39 C 33 37, 31 37, 31 38 C 31 37, 29 37, 29 39 Q 29 41, 31 43 Q 33 41, 33 39 Z" fill="black"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* ページセット8（15ページ - 裏表紙） */}
          <div className={`page-set ${currentPage === 8 ? '' : 'hidden'}`}>
            {/* 左ページ（15ページ目 - 裏表紙） */}
            <div style={{ width: '456px', height: '644px', background: '#0d7938', borderRadius: '8px 0 0 8px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', padding: '15px 15px 25px 15px', alignItems: 'center', flexShrink: '0' }}>
              
              {/* タイトル */}
              <h1 style={{ color: '#dc2626', fontSize: '28px', fontWeight: '900', textAlign: 'center', margin: '20px 0 30px 0', letterSpacing: '2px', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>リジョブ学習図鑑</h1>
              
              {/* 上部の正方形画像エリア（2つ横並び） */}
              <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                <div style={{ width: '160px', height: '160px', background: 'white', border: '3px solid white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <img src="/images/15_1.png" alt="画像 15_1" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ width: '160px', height: '160px', background: 'white', border: '3px solid white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <img src="/images/15_2.png" alt="画像 15_2" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              </div>
              
              {/* 文章エリア */}
              <div style={{ width: '350px', background: 'white', padding: '18px', border: '3px solid white', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.2)', minHeight: '300px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                <div style={{ color: '#333', textAlign: 'left', lineHeight: '1.5', width: '100%', fontSize: '11px' }}>
                  <p style={{ margin: '0 0 8px 0' }}><strong>【名前】</strong>リジョまる</p>
                  <p style={{ margin: '0 0 8px 0' }}><strong>【由来】</strong>リジョブ×ご縁（縁⇒円⇒丸"まる"）＋丸い見た目、求職者と企業の縁をつくる鳥<strong>「むすびどり」</strong>。</p>
                  <p style={{ margin: '0 0 8px 0' }}><strong>【誕生日】</strong>11月2日という説が有力。いい縁（11.2）つながる日。</p>
                  <p style={{ margin: '0 0 8px 0' }}><strong>【出身地】</strong>「リジョブの国」という説が有力！</p>
                  <p style={{ margin: '0 0 8px 0' }}><strong>【性格】</strong>世話好きで、仲間のみんなから頼られる</p>
                  <p style={{ margin: '0 0 8px 0' }}><strong>【想い】</strong>「<strong>あなたのことを一番に理解したい</strong>」という想いを強く持っている。出会いのきっかけ・想いを運び、リジョブの国から渡ってくる。求職者の採用が決まるまで現実社会に住んで寄り添い、採用が決まると帰っていく。</p>
                  <p style={{ margin: '0 0 8px 0' }}><strong>【趣味】</strong>ひなたぼっこ</p>
                  <p style={{ margin: '0' }}><strong>【外見的特徴】</strong>リジョブのサービスロゴと<strong>同じ4色の羽としっぽ</strong>を持っており、<strong>さくらんぼ11.2個分</strong>の大きさ</p>
                </div>
              </div>
            </div>
            
            {/* 右ページ（16ページ目 - 存在しないので机が見える） */}
            <div style={{ flex: '1', height: '100%', background: '#A0522D', position: 'relative', borderRadius: '0 8px 8px 0' }}>
              {/* 木目模様 */}
              <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', background: 'radial-gradient(ellipse 400px 30px at 20% 30%, rgba(101, 67, 33, 0.3) 0%, transparent 70%), radial-gradient(ellipse 350px 25px at 60% 60%, rgba(139, 69, 19, 0.25) 0%, transparent 65%), radial-gradient(ellipse 500px 40px at 80% 20%, rgba(160, 82, 45, 0.2) 0%, transparent 60%), radial-gradient(ellipse 300px 20px at 10% 70%, rgba(101, 67, 33, 0.35) 0%, transparent 75%), radial-gradient(ellipse 450px 35px at 70% 10%, rgba(139, 69, 19, 0.3) 0%, transparent 70%)', pointerEvents: 'none', transform: 'skew(-2deg, 1deg)' }}></div>
              <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', background: 'radial-gradient(ellipse 200px 8px at 30% 25%, rgba(101, 67, 33, 0.4) 0%, transparent 80%), radial-gradient(ellipse 180px 6px at 75% 50%, rgba(139, 69, 19, 0.35) 0%, transparent 75%), radial-gradient(circle at 25% 40%, rgba(101, 67, 33, 0.6) 3px, rgba(139, 69, 19, 0.3) 8px, transparent 12px)', pointerEvents: 'none', transform: 'skew(1deg, -0.5deg)' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* プロンプトモーダル */}
      {showPromptModal && (
        <div style={{ display: 'flex', position: 'fixed', zIndex: '1000', left: '0', top: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', padding: '20px', boxSizing: 'border-box', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fafaf8', padding: '30px', borderRadius: '12px', maxWidth: '600px', width: '100%', position: 'relative', boxShadow: '0 10px 40px rgba(0,0,0,0.3)', maxHeight: '80vh', overflowY: 'auto' }}>
            {/* 閉じるボタン */}
            <span onClick={closePromptModal} style={{ position: 'absolute', top: '15px', right: '20px', fontSize: '28px', fontWeight: 'bold', cursor: 'pointer', color: '#999', lineHeight: '1' }}>&times;</span>
            
            {/* モーダル内容 */}
            <h3 style={{ color: '#2d5016', marginBottom: '20px', fontSize: '20px', borderBottom: '2px solid #4a7c2e', paddingBottom: '8px' }}>【AIを使える業務を探すプロンプト】</h3>
            
            <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #4a7c2e', marginBottom: '20px' }}>
              <p style={{ marginBottom: '15px', lineHeight: '1.6', color: '#333' }}>以下の業務を細かく要素分解して、Geminiを使って業務効率化できる作業をブレインストーミングしてください。水平思考でアイデアをアウトプットするようにお願いします。</p>
              
              <p style={{ marginBottom: '10px', fontWeight: 'bold', color: '#2d5016' }}>■業務内容</p>
              <p style={{ margin: '0', color: '#666', fontStyle: 'italic' }}>{`{ここに業務内容をできるだけ詳しく書く}`}</p>
            </div>
            
            {/* コピーボタン */}
            <button 
              onClick={copyPromptText} 
              style={{ 
                background: isCopied ? '#28a745' : '#4a7c2e', 
                color: 'white', 
                border: 'none', 
                padding: '10px 20px', 
                borderRadius: '6px', 
                cursor: 'pointer', 
                fontSize: '14px', 
                fontWeight: 'bold', 
                transition: 'all 0.3s ease',
                transform: isCopied ? 'scale(0.95)' : 'scale(1)',
                boxShadow: isCopied ? 'inset 0 2px 4px rgba(0,0,0,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              {isCopied ? '✓ コピー完了！' : 'プロンプトをコピー'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}