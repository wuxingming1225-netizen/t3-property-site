import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
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
  assert.ok(html.indexOf("T3物业负责人") < html.indexOf("曾令慧"));
  assert.ok(html.indexOf("曾令慧") < html.indexOf("何思慧"));
  assert.ok(html.indexOf("何思慧") < html.indexOf("刘大平"));
  assert.ok(html.indexOf("刘大平") < html.indexOf("周芷盈"));
  assert.ok(html.indexOf("周芷盈") < html.indexOf("梁盼盼"));
  assert.ok(html.indexOf("梁盼盼") < html.indexOf("刘嘉欣"));
  assert.match(html, /认识9位专属服务伙伴/);
  assert.match(html, /专业支持团队/);
  assert.match(html, /工程部经理/);
  assert.match(html, /安管部负责人/);
  assert.doesNotMatch(html, /工程人员/);
  assert.match(html, /刘六虎/);
  assert.match(html, /13823091591/);
  assert.match(html, /侯焕武/);
  assert.match(html, /13500241113/);
  assert.equal((html.match(/<span>姓名待补充<\/span>/g) ?? []).length, 0);
  assert.equal((html.match(/<h3>安管部负责人<\/h3>/g) ?? []).length, 1);
  assert.ok(html.indexOf("刘嘉欣") < html.indexOf("刘六虎"));
  assert.ok(html.indexOf("刘六虎") < html.indexOf("侯焕武"));
  assert.match(html, /大堂暖心服务/);
  assert.match(html, /臻品物资箱/);
  assert.match(html, /应急领用品/);
  assert.match(html, /便民借用品/);
  assert.match(html, /一次性毛巾/);
  assert.match(html, /一次性拖鞋/);
  assert.match(html, /后跟贴/);
  assert.match(html, /漱口水/);
  assert.match(html, /衣服去污纸/);
  assert.match(html, /雨伞机/);
  assert.match(html, /雨伞套机/);
  assert.match(html, /雨伞除水器/);
  assert.match(html, /皮鞋擦鞋机/);
  assert.match(html, /皮鞋湿巾/);
  assert.match(html, /长柄和短柄雨伞/);
  assert.match(html, /雪尼尔吸水面料/);
  assert.match(html, /左右摇动 2 至 3 次/);
  assert.match(html, /shared-umbrella-station\.jpg/);
  assert.match(html, /umbrella-sleeve-machine\.jpg/);
  assert.match(html, /umbrella-dryer\.jpg/);
  assert.match(html, /shoe-polisher\.jpg/);
  assert.match(html, /停车与通行/);
  assert.match(html, /填写完成后发送管家录入/);
  assert.match(html, /访客抵达后在前台登记/);
  assert.match(html, /提前联系需要到访企业的对接人/);
  assert.match(html, /企业对接人将访客信息发送给对应客服管家报备/);
  assert.match(html, /外卖与货梯路线/);
  assert.match(html, /0(?:<!-- -->)?1(?:<!-- -->)? · (?:<!-- -->)?低区电梯厅左转/);
  assert.match(html, /0(?:<!-- -->)?2(?:<!-- -->)? · (?:<!-- -->)?通道终点左转/);
  assert.match(html, /0(?:<!-- -->)?3(?:<!-- -->)? · (?:<!-- -->)?直走抵达外卖柜/);
  assert.ok(html.indexOf("低区电梯厅左转") < html.indexOf("通道终点左转"));
  assert.ok(html.indexOf("通道终点左转") < html.indexOf("直走抵达外卖柜"));
  assert.match(html, /广东省珠海市香洲区横琴跨境电商（华发）创新产业园T3栋拓展区高区负一外卖柜/);
  assert.match(html, /广东省珠海市香洲区横琴跨境电商（华发）创新产业园T3栋拓展区xxxx号房/);
  assert.doesNotMatch(html, /takeout-route\.png/);
  const lazyImages = html.match(/<img[^>]+loading="lazy"[^>]+decoding="async"[^>]*>/g) ?? [];
  assert.ok(lazyImages.length >= 10);
  assert.match(html, /18号货梯指引/);
  assert.match(html, /车辆导航至“森林子果蔬茶”/);
  assert.match(html, /饮用水、快递及送货请统一使用专属 18 号货梯/);
  assert.match(html, /如何开通闸机权限？/);
  assert.match(html, /临时报备停车怎么办理？/);
  assert.match(html, /停车月卡如何申请？/);
  assert.match(html, /雨天的暖心服务有哪些？/);
  assert.match(html, /外卖取餐和18号货梯怎么走？/);
  assert.equal((html.match(/<details/g) ?? []).length, 5);
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
  assert.doesNotMatch(html, /企业门牌|广告字 \/ 牌匾申请/);
  assert.match(html, /24 小时应急热线/);
  assert.doesNotMatch(html, /codex-preview|Building your site|Starter Project/i);
});

test("keeps required local guide assets available", async () => {
  await Promise.all([
    access(new URL("public/t3-building.jpg", projectRoot)),
    access(new URL("public/takeout-step-1.jpg", projectRoot)),
    access(new URL("public/takeout-step-2.jpg", projectRoot)),
    access(new URL("public/takeout-step-3.jpg", projectRoot)),
    access(new URL("public/parking-apply.jpg", projectRoot)),
    access(new URL("public/freight-arrival.jpg", projectRoot)),
    access(new URL("public/freight-entrance.jpg", projectRoot)),
    access(new URL("public/freight-route.jpg", projectRoot)),
    access(new URL("public/lobby-supplies-kit.jpg", projectRoot)),
    access(new URL("public/temporary-parking-entrance.png", projectRoot)),
    access(new URL("public/shared-umbrella-station.jpg", projectRoot)),
    access(new URL("public/umbrella-sleeve-machine.jpg", projectRoot)),
    access(new URL("public/umbrella-dryer.jpg", projectRoot)),
    access(new URL("public/shoe-polisher.jpg", projectRoot)),
  ]);
});

test("keeps scroll performance safeguards", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const topbarRule = css.match(/\.topbar\s*\{[^}]*\}/s)?.[0] ?? "";

  assert.doesNotMatch(topbarRule, /backdrop-filter/);
  assert.match(css, /content-visibility:\s*auto/);
  assert.match(css, /contain-intrinsic-size:\s*auto\s+\d+px/);
  assert.match(css, /\.weather-service-grid\s*\{[^}]*grid-template-columns:\s*repeat\(4,\s*1fr\)/s);
  assert.match(css, /\.parking-guide-grid\s*\{[^}]*grid-template-columns:\s*repeat\(2,\s*1fr\)/s);
  assert.match(css, /\.parking-guide-visual\s*\{[^}]*aspect-ratio:\s*16\s*\/\s*9/s);
  assert.match(css, /@media \(max-width: 700px\)[\s\S]*\.weather-service-grid,\s*\.parking-guide-grid\s*\{[^}]*grid-template-columns:\s*1fr/s);
  assert.match(css, /@media \(max-width: 700px\)[\s\S]*\.hero-orb\s*\{[^}]*display:\s*none/);
});
