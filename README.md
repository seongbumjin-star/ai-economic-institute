# AI경제연구소 홈페이지

AI경제연구소의 공식 반응형 웹사이트입니다. 별도 프레임워크 없이 표준 HTML·CSS·JavaScript로 구성해 빠르고 간단하게 운영할 수 있습니다.

## 실행 방법

```bash
npm run dev
```

터미널에 표시되는 주소(기본값 `http://localhost:5173`)를 브라우저에서 여세요.

## 콘텐츠 수정

- 게시물·연구자료·행사·연구 분야: `src/data.js`의 각 배열을 수정합니다.
- 회원가입 링크와 연락처: `src/data.js` 맨 위의 `siteConfig`를 수정합니다.
- 문구와 화면 구조: `src/main.js`를 수정합니다.
- 색상과 디자인: `src/style.css`를 수정합니다.

## 배포 전 확인

```bash
npm test
npm run build
```

생성된 `dist` 폴더를 Netlify, Vercel, GitHub Pages 같은 정적 호스팅 서비스에 배포할 수 있습니다.
