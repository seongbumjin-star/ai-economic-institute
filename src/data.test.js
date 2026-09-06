import test from 'node:test';
import assert from 'node:assert/strict';
import { events, fields, navItems, news, research, resources, siteConfig } from './data.js';
test('6대 연구 분야를 제공한다',()=>assert.equal(fields.length,6));
test('필수 메뉴가 각 운영 영역을 가리킨다',()=>{
  assert.deepEqual(navItems.map(([, href])=>href), ['#about','#research','#events','#news','#resources','#membership','#contact']);
});
test('운영 콘텐츠와 교체 가능한 설정을 제공한다',()=>{
  assert.equal(siteConfig.joinUrl, 'https://docs.google.com/forms/d/e/1FAIpQLScrLQpMP33BUR6GLl6ap_ln45w_5b5UcwLo11nkURCJHRay9w/viewform?usp=header');
  assert.ok(research.length > 0);
  assert.ok(events.length > 0);
  assert.ok(news.length > 0);
  assert.ok(resources.length > 0);
});
test('연구소 문의 정보를 제공한다',()=>{
  assert.deepEqual(siteConfig.contact, {
    name: '조한일(사무국장)',
    phone: '010-2245-5250',
    address: '천안시 서북구 두정동 899 두정빌딩 202-4호',
    email: 'ai9988go@gmail.com',
  });
});
