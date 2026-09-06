import { siteConfig, navItems, fields, research, news, events, resources } from './data.js';

const arrow = `<span aria-hidden="true">→</span>`;
const contactRows = [
  ['문의', siteConfig.contact.name], ['전화', siteConfig.contact.phone],
  ['주소', siteConfig.contact.address], ['이메일', siteConfig.contact.email],
].filter(([, value]) => value);
const contactValue = ([label, value]) => {
  if (label === '전화') return `<a href="tel:${value.replaceAll('-', '')}">${value}</a>`;
  if (label === '이메일') return `<a href="mailto:${value}">${value}</a>`;
  return `<span>${value}</span>`;
};
const joinIsReady = !siteConfig.joinUrl.startsWith('#');
const app = document.querySelector('#app');

app.innerHTML = `
<a class="skip" href="#main">본문 바로가기</a>
<header class="header"><a class="brand" href="#top" aria-label="AI경제연구소 홈"><img src="./assets/ai-economy-institute-logo.svg" alt="AI경제연구소"></a><button class="menu" aria-label="메뉴 열기" aria-expanded="false"><i></i><i></i><i></i></button><nav aria-label="주 메뉴">${navItems.map(([n,u])=>`<a href="${u}">${n}</a>`).join('')}</nav></header>
<main id="main">
 <section class="hero" id="top"><div class="orb o1"></div><div class="orb o2"></div><div class="grid"></div><div class="hero-inner"><p class="eyebrow">AI ECONOMY INSTITUTE</p><h1>AI경제연구소</h1><h2>AI로 산업을 혁신하고,<br>일자리를 지키며,<br><em>지속가능한 미래</em>를 만듭니다.</h2><p class="lead">기술의 가능성을 사람의 삶으로 연결하는 민간 정책연구 플랫폼</p><div class="actions"><a href="#about" class="btn light">연구소 소개 ${arrow}</a><a href="#research" class="btn outline">정책·연구 보기 ${arrow}</a><a href="${siteConfig.joinUrl}" class="text-link" target="_blank" rel="noopener">회원가입 ${arrow}</a></div></div><a class="scroll" href="#about" aria-label="연구소 소개로 이동">SCROLL <span></span></a></section>

 <section class="about" id="about"><div class="about-art"><span>AI</span><i></i><p>TECHNOLOGY<br>FOR PEOPLE</p></div><div class="about-copy"><p class="label">ABOUT THE INSTITUTE</p><h2>기술보다 먼저,<br><strong>사람과 삶을 생각합니다.</strong></h2><p class="about-lead">AI경제연구소는 AI 기술 자체만을 연구하는 곳이 아니라, AI가 산업·경제·일자리·지역사회에 가져올 변화에 대응하고 사람 중심의 정책 대안을 연구·제안하는 민간 정책연구 플랫폼입니다.</p><dl><div><dt>대표</dt><dd>${siteConfig.representative}</dd></div><div><dt>창립제안자</dt><dd>${siteConfig.founder}</dd></div></dl><div class="about-points"><article><b>VISION</b><h3>사람을 위한 AI 전환</h3><p>기술 혁신의 성과가 산업과 지역, 모든 시민의 더 나은 삶으로 이어지는 미래를 지향합니다.</p></article><article><b>PURPOSE</b><h3>현실에 닿는 정책 대안</h3><p>현장의 변화와 목소리를 연구해 실행할 수 있는 공공·민간 정책으로 연결합니다.</p></article><article><b>ACTIVITY</b><h3>연구·제안·공론</h3><p>정책 연구와 보고서 발간, 포럼, 교육, 국내외 네트워크 협력을 이어갑니다.</p></article></div></div></section>

 <section class="section fields"><div class="section-head"><div><p class="label">RESEARCH AREAS</p><h2>더 나은 전환을 위한<br><strong>6대 연구 분야</strong></h2></div><p>AI가 산업과 사회에 가져올 변화를 폭넓게 살피고,<br>누구도 소외되지 않는 구체적인 대안을 만듭니다.</p></div><div class="field-grid">${fields.map(([n,t,d,k])=>`<article class="field"><div><span>${n}</span><small>${k}</small></div><h3>${t}</h3><p>${d}</p><a href="#research" aria-label="${t} 관련 연구 보기">${arrow}</a></article>`).join('')}</div></section>

 <section class="section research" id="research"><div class="section-title"><div><p class="label">RESEARCH & POLICY</p><h2>연구·정책</h2></div><p>산업과 삶의 변화를 읽고 정책의 방향을 제안합니다.</p></div><div class="research-list">${research.map(x=>`<article><div class="post-meta"><span>${x.category}</span><time>${x.date}</time></div><div><h3>${x.title}</h3><p>${x.desc}</p></div><a href="${x.link}" aria-label="${x.title} 자세히 보기">자세히 보기 ${arrow}</a></article>`).join('')}</div></section>

 <section class="section events" id="events"><div class="section-title"><div><p class="label">FORUM & EVENTS</p><h2>포럼·행사</h2></div><p>연구 성과와 현장의 지혜를 나누는 열린 공론장입니다.</p></div><div class="event-list">${events.map(x=>`<article class="${x.poster?'has-poster':''}">${x.poster?`<img src="${x.poster}" alt="${x.title} 포스터">`:''}<div class="date"><b>${x.day}</b><span>${x.month}</span></div><div><p>${x.type}</p><h3>${x.title}</h3><span>${x.dateTime}<br>${x.place}</span></div><a href="${x.link}">${x.status} ${arrow}</a></article>`).join('')}</div></section>

 <section class="section news" id="news"><div class="section-title"><div><p class="label">NEWS & STORIES</p><h2>활동소식</h2></div><p>연구소의 활동과 언론보도, 현장의 장면을 전합니다.</p></div><div class="news-grid">${news.map(x=>`<article class="${x.image?'with-image':'text-only'}">${x.image?`<img src="${x.image}" alt="">`:`<div class="news-mark" aria-hidden="true">AI<span>NEWS</span></div>`}<div class="news-copy"><p><time>${x.date}</time><b>${x.tag}</b></p><h3>${x.title}</h3><p>${x.desc}</p><a href="${x.link}" aria-label="${x.title} 자세히 보기">자세히 보기 ${arrow}</a></div></article>`).join('')}</div></section>

 <section class="section resources" id="resources"><div class="section-title"><div><p class="label">RESOURCE LIBRARY</p><h2>자료실</h2></div><p>정책자료, 연구보고서, 토론회 자료를 공유합니다.</p></div><div class="resource-list">${resources.map(x=>`<article><span>${x.category}</span><div><h3>${x.title}</h3><p>${x.date} · ${x.format}</p></div>${x.file?`<a href="${x.file}" download>다운로드 ${arrow}</a>`:`<span class="preparing">자료 준비 중</span>`}</article>`).join('')}</div></section>

 <section class="membership" id="membership"><p class="label">JOIN OUR NETWORK</p><h2>미래를 함께 연구하고<br>변화를 함께 만들어 주세요.</h2><p>연구소의 정책 제안과 새로운 소식을 가장 먼저 받아보세요.</p><a class="btn light" href="${siteConfig.joinUrl}" ${joinIsReady?'target="_blank" rel="noopener"':''}>회원가입 신청 ${arrow}</a>${joinIsReady?'':'<small>회원가입 신청 페이지를 준비하고 있습니다.</small>'}</section>
 </main>
 <footer id="contact"><div class="footer-top"><div><a class="brand inverse" href="#top" aria-label="AI경제연구소 홈"><img src="./assets/ai-economy-institute-logo.svg" alt="AI경제연구소"></a><p>AI로 산업을 혁신하고, 일자리를 지키며,<br>지속가능한 미래를 만듭니다.</p></div><div class="contact-title"><span>CONTACT</span><h2>연구소 문의</h2></div></div><div class="footer-info"><div class="people"><span>대표 <b>${siteConfig.representative}</b></span><span>창립제안자 <b>${siteConfig.founder}</b></span></div>${contactRows.length?`<dl>${contactRows.map(row=>`<div><dt>${row[0]}</dt><dd>${contactValue(row)}</dd></div>`).join('')}</dl>`:'<p class="contact-note">주소·전화·이메일은 확정 후 안내하겠습니다.</p>'}<p>© 2026 AI경제연구소. All rights reserved.</p></div></footer>`;

const menu = document.querySelector('.menu');
menu.addEventListener('click',()=>{ const open=document.body.classList.toggle('nav-open'); menu.setAttribute('aria-expanded',String(open)); });
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('nav-open');menu.setAttribute('aria-expanded','false')}));
