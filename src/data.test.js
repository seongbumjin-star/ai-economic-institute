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
