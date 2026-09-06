import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist');
await cp('index.html','dist/index.html');
await cp('src','dist/src',{recursive:true});
console.log('정적 사이트를 dist/에 생성했습니다.');
