export const members = [
  { name: '김의원', initials: '김', role: '의원' },
  { name: '박서윤', initials: '박', role: '정책비서' },
  { name: '이도현', initials: '이', role: '비서관' },
  { name: '최유진', initials: '최', role: '보좌관' },
];

export const materials = [
  { id: 1, type: '국정감사', title: '중소벤처기업부 국정감사 질의서', committee: '산업통상자원중소벤처기업위원회', date: '2026.10.08', status: '검토중', owner: '박서윤', updated: '12분 전', starred: true },
  { id: 2, type: '상임위', title: '산업기술보호법 일부개정법률안 검토', committee: '법안심사소위원회', date: '2026.10.07', status: '작성중', owner: '이도현', updated: '35분 전', starred: false },
  { id: 3, type: '보도자료', title: '지역 주력산업 AI 전환 지원 촉구', committee: '의원실', date: '2026.10.06', status: '완료', owner: '최유진', updated: '어제', starred: true },
  { id: 4, type: '예산', title: '2027년도 산업부 예산안 분석', committee: '예산결산특별위원회', date: '2026.10.05', status: '검토중', owner: '박서윤', updated: '어제', starred: false },
  { id: 5, type: '정책', title: '플랫폼 종사자 보호 정책 간담회 자료', committee: '산업통상자원중소벤처기업위원회', date: '2026.10.02', status: '작성중', owner: '이도현', updated: '10.02', starred: false },
  { id: 6, type: '상임위', title: '전력망 확충 특별법 시행 현황 질의', committee: '산업통상자원중소벤처기업위원회', date: '2026.09.30', status: '완료', owner: '최유진', updated: '09.30', starred: false },
];

export const tasks = [
  { title: '국정감사 최종 질의서 검토', meta: '오늘 · 17:00', owner: '박서윤', tone: 'urgent' },
  { title: '산업부 요구자료 취합', meta: '오늘 · 18:30', owner: '이도현', tone: 'today' },
  { title: '보도자료 배포처 확인', meta: '내일 · 09:00', owner: '최유진', tone: 'normal' },
];

export const activity = [
  { initials: '박', name: '박서윤', action: '질의서에 의견을 남겼습니다.', target: '중소벤처기업부 국정감사 질의서', time: '12분 전', color: 'purple' },
  { initials: '이', name: '이도현', action: '자료를 업로드했습니다.', target: '산업기술보호법 검토 참고자료.pdf', time: '35분 전', color: 'green' },
  { initials: '최', name: '최유진', action: '상태를 완료로 변경했습니다.', target: '지역 주력산업 AI 전환 지원 촉구', time: '1시간 전', color: 'orange' },
];

export const schedule = [
  { day: '08', weekday: '목', title: '산업부 국정감사', time: '10:00', location: '국회 본관 534호' },
  { day: '10', weekday: '토', title: '지역 기업 현장 간담회', time: '14:00', location: '천안 산업단지' },
  { day: '13', weekday: '화', title: '법안심사소위원회', time: '09:30', location: '산자중기위 회의실' },
];
