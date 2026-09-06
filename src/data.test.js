import test from 'node:test';
import assert from 'node:assert/strict';
import { fields, navItems, research, siteConfig } from './data.js';
test('6대 연구 분야를 제공한다',()=>assert.equal(fields.length,6));
test('필수 메뉴와 설정을 제공한다',()=>{assert.equal(navItems.length,7);assert.ok(siteConfig.joinUrl);assert.ok(research.length>0)});
