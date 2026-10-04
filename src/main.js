import { activity, materials as seedMaterials, schedule, tasks } from './data.js';

const icons = {
  home:'<svg viewBox="0 0 24 24"><path d="M3 11 12 4l9 7v9H15v-6H9v6H3z"/></svg>',
  file:'<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6zM14 3v5h5M9 12h6M9 16h6"/></svg>',
  check:'<svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  calendar:'<svg viewBox="0 0 24 24"><path d="M4 6h16v15H4zM8 3v6M16 3v6M4 11h16"/></svg>',
  users:'<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M17 11a4 4 0 0 0 0-8M22 21v-2a4 4 0 0 0-3-3.87"/></svg>',
  search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
  plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  dots:'<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>'
};

let materials = JSON.parse(localStorage.getItem('assembly-materials') || 'null') || seedMaterials;
let activeFilter = '전체';
const app = document.querySelector('#app');

app.innerHTML = `
<aside class="sidebar">
  <a class="logo" href="#"><span>의</span><strong>의정온</strong><small>의정자료 관리</small></a>
  <nav>
    <p>WORKSPACE</p>
    <button class="nav-item active" data-view="dashboard">${icons.home}<span>대시보드</span></button>
    <button class="nav-item" data-view="materials">${icons.file}<span>의정자료</span><b>${materials.length}</b></button>
    <button class="nav-item" data-view="tasks">${icons.check}<span>업무 관리</span><b>3</b></button>
    <button class="nav-item" data-view="schedule">${icons.calendar}<span>일정</span></button>
    <p>TEAM</p>
    <button class="nav-item" data-view="members">${icons.users}<span>구성원</span></button>
  </nav>
  <div class="storage"><div><span>저장 공간</span><b>68%</b></div><i><em></em></i><small>6.8GB / 10GB</small></div>
  <div class="user"><span class="avatar">김</span><div><strong>김의원</strong><small>관리자</small></div><button aria-label="사용자 메뉴">${icons.dots}</button></div>
</aside>
<div class="shell">
  <header><button class="mobile-menu" aria-label="메뉴 열기">☰</button><div class="global-search">${icons.search}<input aria-label="통합 검색" placeholder="자료, 업무, 일정을 검색하세요"/><kbd>⌘ K</kbd></div><button class="icon-button" aria-label="알림">${icons.bell}<i></i></button><button class="help">도움말</button></header>
  <main>
    <section class="welcome"><div><p>2026년 10월 4일 일요일</p><h1>안녕하세요, 김의원님 <span>👋</span></h1><p>오늘도 중요한 의정활동을 함께 준비해요.</p></div><button class="primary add-button">${icons.plus} 새 자료 만들기</button></section>
    <section class="stats">
      <article><span class="stat-icon violet">${icons.file}</span><div><p>전체 의정자료</p><strong>${materials.length}</strong><small><b>+4</b> 이번 주</small></div></article>
      <article><span class="stat-icon coral">${icons.check}</span><div><p>진행 중인 업무</p><strong>8</strong><small><b>3건</b> 오늘 마감</small></div></article>
      <article><span class="stat-icon blue">${icons.calendar}</span><div><p>이번 주 일정</p><strong>5</strong><small><b>2건</b> 오늘 예정</small></div></article>
      <article><span class="stat-icon green">${icons.users}</span><div><p>함께하는 구성원</p><strong>4</strong><small>모두 활동 중</small></div></article>
    </section>
    <div class="dashboard-grid">
      <section class="panel materials-panel"><div class="panel-head"><div><h2>최근 의정자료</h2><p>최근 업데이트된 자료를 확인하세요.</p></div><button class="view-all">전체보기 →</button></div><div class="filters">${['전체','국정감사','상임위','예산','보도자료'].map(x=>`<button data-filter="${x}" class="${x==='전체'?'active':''}">${x}</button>`).join('')}</div><div class="material-list"></div></section>
      <aside class="right-column">
        <section class="panel"><div class="panel-head"><div><h2>다가오는 일정</h2><p>놓치지 않도록 미리 확인하세요.</p></div><button class="mini-add" aria-label="일정 추가">+</button></div><div class="schedule-list">${schedule.map((x,i)=>`<article><div class="date ${i===0?'active':''}"><strong>${x.day}</strong><span>${x.weekday}</span></div><div><h3>${x.title}</h3><p>${x.time} · ${x.location}</p></div></article>`).join('')}</div><button class="wide-link">전체 일정 보기 <span>→</span></button></section>
        <section class="panel"><div class="panel-head"><div><h2>내 업무</h2><p>오늘 할 일을 확인하세요.</p></div><button class="mini-add" aria-label="업무 추가">+</button></div><div class="task-list">${tasks.map(x=>`<label><input type="checkbox"><i></i><div><h3>${x.title}</h3><p class="${x.tone}">${x.meta}</p></div><span>${x.owner.slice(0,1)}</span></label>`).join('')}</div><button class="wide-link">업무 전체보기 <span>→</span></button></section>
      </aside>
      <section class="panel activity-panel"><div class="panel-head"><div><h2>최근 활동</h2><p>팀의 자료 업데이트 소식입니다.</p></div><button class="view-all">모두 보기 →</button></div><div class="activity-list">${activity.map(x=>`<article><span class="avatar ${x.color}">${x.initials}</span><div><p><strong>${x.name}</strong>님이 ${x.action}</p><h3>${x.target}</h3></div><time>${x.time}</time></article>`).join('')}</div></section>
    </div>
  </main>
</div>
<dialog><form method="dialog" id="material-form"><div class="modal-head"><div><h2>새 자료 만들기</h2><p>팀원과 함께 관리할 의정자료를 등록하세요.</p></div><button value="cancel" aria-label="닫기">×</button></div><label>자료 제목<input name="title" required placeholder="자료 제목을 입력하세요"></label><div class="form-row"><label>분류<select name="type"><option>국정감사</option><option>상임위</option><option>예산</option><option>보도자료</option><option>정책</option></select></label><label>담당자<select name="owner"><option>박서윤</option><option>이도현</option><option>최유진</option></select></label></div><label>관련 위원회<input name="committee" value="산업통상자원중소벤처기업위원회"></label><div class="modal-actions"><button value="cancel">취소</button><button class="primary" value="default">자료 만들기</button></div></form></dialog>
<div class="toast" role="status">새 의정자료가 등록되었습니다.</div>`;

const list = document.querySelector('.material-list');
function renderMaterials() {
  const filtered = activeFilter === '전체' ? materials : materials.filter(x => x.type === activeFilter);
  list.innerHTML = filtered.slice(0, 5).map(x => `<article class="material-row" data-id="${x.id}"><button class="star ${x.starred?'on':''}" aria-label="즐겨찾기">${x.starred?'★':'☆'}</button><span class="file-type ${x.type}">${x.type.slice(0,2)}</span><div class="material-copy"><h3>${x.title}</h3><p>${x.committee} · ${x.date}</p></div><span class="status ${x.status}">${x.status}</span><div class="owner"><span>${x.owner.slice(0,1)}</span><small>${x.owner}<br>${x.updated}</small></div><button class="more" aria-label="더 보기">${icons.dots}</button></article>`).join('') || '<p class="empty">해당 분류의 자료가 없습니다.</p>';
}
renderMaterials();

document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
  document.querySelector('.filters .active').classList.remove('active'); btn.classList.add('active'); activeFilter = btn.dataset.filter; renderMaterials();
}));
list.addEventListener('click', e => { const star=e.target.closest('.star'); if(!star)return; const item=materials.find(x=>x.id===Number(star.closest('article').dataset.id)); item.starred=!item.starred; localStorage.setItem('assembly-materials',JSON.stringify(materials)); renderMaterials(); });
document.querySelectorAll('.task-list input').forEach(x=>x.addEventListener('change',()=>x.closest('label').classList.toggle('done',x.checked)));
document.querySelectorAll('.nav-item').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.nav-item.active').classList.remove('active');btn.classList.add('active');document.querySelector('.sidebar').classList.remove('open')}));
document.querySelector('.mobile-menu').addEventListener('click',()=>document.querySelector('.sidebar').classList.toggle('open'));
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();document.querySelector('.global-search input').focus()}});

const dialog=document.querySelector('dialog'); const form=document.querySelector('#material-form');
document.querySelector('.add-button').addEventListener('click',()=>dialog.showModal());
form.addEventListener('submit',e=>{if(e.submitter?.value==='cancel')return; e.preventDefault(); if(!form.reportValidity())return; const fd=new FormData(form); materials.unshift({id:Date.now(),title:fd.get('title'),type:fd.get('type'),owner:fd.get('owner'),committee:fd.get('committee'),date:'2026.10.04',status:'작성중',updated:'방금 전',starred:false}); localStorage.setItem('assembly-materials',JSON.stringify(materials)); document.querySelector('.stats article:first-child strong').textContent=materials.length; dialog.close(); form.reset(); activeFilter='전체'; document.querySelector('.filters .active').classList.remove('active'); document.querySelector('[data-filter="전체"]').classList.add('active'); renderMaterials(); const toast=document.querySelector('.toast');toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2500);});
