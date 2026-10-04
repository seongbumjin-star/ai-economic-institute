import test from 'node:test';
import assert from 'node:assert/strict';
import { activity, materials, members, schedule, tasks } from './data.js';

test('대시보드에 필요한 의정자료 데이터를 제공한다', () => {
  assert.ok(materials.length >= 5);
  assert.ok(materials.every(item => item.title && item.type && item.owner && item.status));
});

test('협업용 구성원, 업무, 활동 데이터를 제공한다', () => {
  assert.equal(members.length, 4);
  assert.ok(tasks.length > 0);
  assert.ok(activity.length > 0);
  assert.ok(schedule.length > 0);
});
