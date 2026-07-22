import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the T3 property service site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>横琴天啟 T3｜物业服务团队<\/title>/i);
  assert.match(html, /横琴天啟 T3 写字楼物业服务团队/);
  assert.match(html, /横琴天啟T3物业服务中心/);
  assert.match(html, /选品空间/);
  assert.doesNotMatch(html, /空间运营/);
  assert.match(html, /您的专属物业团队/);
  assert.match(html, /T3/);
  assert.match(html, /物业服务/);
  assert.match(html, /人员介绍/);
  assert.match(html, /服务介绍/);
  assert.match(html, /路线介绍/);
  assert.match(html, /停车月卡办理/);
  assert.match(html, /临时报备停车指引/);
  assert.match(html, /仅限接送、接待等临时停靠/);
  assert.match(html, /不得长期停放/);
  assert.match(html, /车辆临停处/);
  assert.match(html, /施工材料运输请前往负三层 18 号货梯上下货/);
  assert.match(html, /href="#parking-guide"/);
  assert.match(html, /href="#temporary-parking-guide"/);
  assert.match(html, /href="#freight-guide"/);
  assert.match(html, /href="#takeout-guide"/);
  assert.match(html, /T3写字楼物业负责人/);
  assert.match(html, /T3选品中心5-9楼/);
  assert.ok(html.indexOf("吴幸明") < html.indexOf("曾令慧"));
  assert.ok(html.indexOf("曾令慧") < html.indexOf("何思慧"));
  assert.ok(html.indexOf("何思慧") < html.indexOf("刘大平"));
  assert.ok(html.indexOf("刘大平") < html.indexOf("周芷盈"));
  assert.ok(html.indexOf("周芷盈") < html.indexOf("梁盼盼"));
  assert.ok(html.indexOf("梁盼盼") < html.indexOf("刘嘉欣"));
  assert.match(html, /认识10位专属服务伙伴/);
  assert.match(html, /专业支持团队/);
  assert.match(html, /工程部经理/);
  assert.match(html, /安管部负责人/);
  assert.equal((html.match(/<span>姓名待补充<\/span>/g) ?? []).length, 3);
  assert.ok(html.indexOf("刘嘉欣") < html.indexOf("工程部经理"));
  assert.ok(html.indexOf("工程部经理") < html.indexOf("安管部负责人"));
  assert.match(html, /大堂便民与甄品服务/);
  assert.match(html, /臻品物资箱/);
  assert.match(html, /应急领用品/);
  assert.match(html, /便民借用品/);
  assert.match(html, /填写完成后发送管家录入/);
  assert.match(html, /路线和办理，一眼看懂/);
  assert.match(html, /低区负一层电梯厅/);
  assert.match(html, /经中央连廊前往/);
  assert.match(html, /到达外卖存取处/);
  assert.match(html, /18号货梯指引/);
  assert.match(html, /车辆导航至“森林子果蔬茶”/);
  assert.match(html, /饮用水、快递及送货请统一使用专属 18 号货梯/);
  assert.match(html, /18号货梯怎么走、哪些物品需要使用？/);
  assert.match(html, /大堂有哪些甄品服务？/);
  assert.match(html, /该区域设有 24 小时监控/);
  assert.doesNotMatch(html, /停车月卡续费/);
  assert.doesNotMatch(html, /月卡什么时候续费？/);
  assert.doesNotMatch(html, /先看人员和服务，也可以直接进入常用办理指引/);
  assert.doesNotMatch(html, /管理说明：横琴华发商都停车场由商都物业管理/);
  assert.doesNotMatch(html, /办理指引不重复展示；这里仅保留大堂日常服务与便民物资/);
  assert.doesNotMatch(html, /姓名、照片和联系方式均已预留/);
  assert.doesNotMatch(html, /接待随行箱/);
  assert.doesNotMatch(html, /门牌安装 · 大堂门禁/);
  assert.doesNotMatch(html, /查找专属管家/);
  assert.match(html, /24 小时应急热线/);
  assert.doesNotMatch(html, /codex-preview|Building your site|Starter Project/i);
});

test("keeps required local guide assets available", async () => {
  await Promise.all([
    access(new URL("public/t3-building.jpg", projectRoot)),
    access(new URL("public/takeout-route.png", projectRoot)),
    access(new URL("public/parking-apply.jpg", projectRoot)),
    access(new URL("public/freight-arrival.jpg", projectRoot)),
    access(new URL("public/freight-entrance.jpg", projectRoot)),
    access(new URL("public/freight-route.jpg", projectRoot)),
    access(new URL("public/lobby-supplies-kit.jpg", projectRoot)),
    access(new URL("public/temporary-parking-entrance.png", projectRoot)),
  ]);
});
