/**
 * 홈페이지 운영 설정
 * 회원가입 신청서가 준비되면 joinUrl의 값을 Google Forms 등의 전체 주소로 바꾸세요.
 * 확정되지 않은 연락처는 빈 문자열로 두면 화면에 표시되지 않습니다.
 */
export const siteConfig = {
  name: 'AI경제연구소',
  representative: '서봉균',
  founder: '진성범',
  joinUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScrLQpMP33BUR6GLl6ap_ln45w_5b5UcwLo11nkURCJHRay9w/viewform?usp=header',
  contact: { email: '', phone: '', address: '' },
};

export const navItems = [
  ['연구소 소개', '#about'], ['연구·정책', '#research'], ['포럼·행사', '#events'],
  ['활동소식', '#news'], ['자료실', '#resources'], ['회원가입', '#membership'], ['문의', '#contact'],
];

export const fields = [
  ['01', 'AI 산업과 지역경제', '지역 산업의 강점에 AI를 접목해 생산성과 지역의 지속가능성을 함께 높이는 전략을 연구합니다.', '지역'],
  ['02', '산업전환과 고용안정', '기술 전환 과정에서 기업의 경쟁력과 노동자의 고용안정을 함께 실현할 정책을 모색합니다.', '전환'],
  ['03', '청년 일자리와 AI 교육', '청년이 미래 산업의 주역으로 성장하도록 현장 중심의 AI 교육과 일자리 정책을 제안합니다.', '청년'],
  ['04', '플랫폼·특수고용 노동자 보호', '변화하는 노동 형태에 맞춰 일하는 사람의 권리와 사회안전망을 강화할 제도를 설계합니다.', '노동'],
  ['05', '에너지전환과 탄소중립', '산업 경쟁력과 지역의 삶을 지키는 실현 가능한 에너지·녹색 전환 경로를 찾습니다.', '에너지'],
  ['06', 'AI 행정과 기본사회', 'AI로 공공서비스의 접근성과 효율을 높이고 모두를 포용하는 기본사회를 연구합니다.', '공공'],
];

// 게시물 추가 시 아래 배열에 같은 형식의 항목을 추가하세요. link가 없으면 현재 목록에 머뭅니다.
export const research = [
  { category: '정책 브리프', date: '2026.08.28', title: '지역 제조업의 AI 전환, 일자리와 생산성을 함께 높이는 길', desc: '중소 제조 현장의 도입 장벽을 분석하고 단계별 정책 지원 모델을 제안합니다.', link: '#research' },
  { category: '이슈 페이퍼', date: '2026.08.12', title: '생성형 AI 시대, 청년 직무역량은 어떻게 달라지는가', desc: '채용시장 변화와 교육 현장의 과제를 살펴보고 새로운 역량 지도를 제시합니다.', link: '#research' },
  { category: '연구 보고서', date: '2026.07.30', title: '플랫폼 노동자 사회안전망의 다음 단계', desc: '현장의 목소리를 바탕으로 고용 형태를 넘어선 보호 방안을 검토합니다.', link: '#research' },
];

// image에 상대경로를 입력하면 사진형 카드로, 비워 두면 텍스트형 카드로 표시됩니다.
export const news = [
  { date: '2026.08.22', tag: '연구소 활동', title: '지역 산업 AI 전환을 위한 현장 간담회', desc: '기업·노동·교육 관계자와 함께 지역이 준비해야 할 과제를 논의했습니다.', image: '', link: '#news' },
  { date: '2026.08.05', tag: '협력', title: '청년 AI 역량 강화를 위한 협력 기반 마련', desc: '교육과 일자리로 이어지는 실천형 프로그램을 준비합니다.', image: '', link: '#news' },
  { date: '2026.07.18', tag: '연구', title: '제1차 정책자문위원회 개최', desc: '연구 방향과 하반기 정책 의제를 점검했습니다.', image: '', link: '#news' },
];

// poster에 이미지 상대경로를 입력하면 행사 포스터가 함께 표시됩니다.
export const events = [
  { day: '24', month: 'SEP', type: '정책 포럼', title: 'AI 전환과 좋은 일자리의 미래', dateTime: '2026. 9. 24. (목) 14:00', place: '온라인 생중계', status: '참가신청', poster: '', link: '#events' },
  { day: '15', month: 'OCT', type: '공개 세미나', title: '지역소멸 대응, AI에서 해법을 찾다', dateTime: '2026. 10. 15. (목) 15:00', place: '장소 추후 공지', status: '예정', poster: '', link: '#events' },
];

// file에 PDF 상대경로(예: ./files/report.pdf) 또는 외부 URL을 입력하세요.
export const resources = [
  { category: '정책자료', title: 'AI경제연구소 정책자료', date: '준비 중', format: 'PDF', file: '' },
  { category: '연구보고서', title: '산업·고용 전환 연구보고서', date: '준비 중', format: 'PDF', file: '' },
  { category: '토론회 자료', title: '정책 포럼 발표자료', date: '준비 중', format: 'PDF', file: '' },
];
