import type { CSSProperties } from "react";
import ImageLightbox from "./image-lightbox";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const team = [
  {
    index: "01",
    role: "T3物业负责人",
    tag: "统筹管理",
    name: "吴幸明",
    image: asset("/wuxingming-cutout.webp"),
    department: "客服部",
    range: "T3 全域",
    hours: "工作日 8:30–17:30",
    duties: "统筹服务品质、安全运营与跨部门协同，快速响应企业重要事项。",
    featured: true,
  },
  {
    index: "02",
    role: "物业管家",
    tag: "中高区服务",
    name: "曾令慧",
    image: asset("/zeng-linghui-cutout.webp"),
    department: "客服部",
    range: "中区 / 高区",
    hours: "工作日 8:30–17:30",
    duties: "负责企业入驻、报事跟进、费用咨询与中区、高区日常巡查。",
  },
  {
    index: "03",
    role: "物业管家",
    tag: "低区与超高区服务",
    name: "何思慧",
    image: asset("/he-sihui-cutout.webp"),
    department: "客服部",
    range: "低区 / 超高区",
    hours: "工作日 8:30–17:30",
    duties: "负责客户沟通、访客协助、装修协调与低区、超高区日常服务。",
  },
  {
    index: "04",
    role: "选品中心负责人",
    tag: "选品空间",
    name: "刘大平",
    image: asset("/liu-daping-cutout.webp"),
    department: "客服部",
    range: "T3选品中心5-9楼",
    hours: "工作日 7:30–17:30",
    duties: "统筹选品中心接洽、活动支持、空间秩序与资源协同。",
  },
  {
    index: "05",
    role: "大堂管家",
    tag: "首问服务",
    name: "周芷盈",
    image: asset("/zhou-zhiying-cutout.webp"),
    department: "客服部",
    range: "T3 首层大堂",
    hours: "工作日 8:30–17:30",
    duties: "承担大堂迎宾、访客分流、电梯引导与高峰秩序维护。",
  },
  {
    index: "06",
    role: "接待员",
    tag: "来访接待",
    name: "梁盼盼",
    image: asset("/liang-panpan-cutout.webp"),
    department: "客服部",
    range: "选品中心前台",
    hours: "工作日 10:00–18:30",
    duties: "提供来访登记、路线指引、会议接待与现场咨询服务。",
  },
  {
    index: "07",
    role: "接待员",
    tag: "会务支持",
    name: "刘嘉欣",
    image: asset("/liu-jiaxin-cutout.webp"),
    department: "客服部",
    range: "选品中心前台",
    hours: "工作日 8:30–17:30",
    duties: "负责客户迎送、会务衔接、物资确认与服务信息传递。",
  },
];

const supportTeam = [
  {
    index: "08",
    role: "工程部经理",
    tag: "工程统筹",
    name: "刘六虎",
    image: asset("/liu-liuhu-cutout.webp"),
    department: "工程部",
    range: "T3 工程运维全域",
    hours: "工作日 8:30–17:30",
    duties: "统筹设施设备运行、工程维修、施工协调与现场技术支持。",
  },
  {
    index: "09",
    role: "安管部负责人",
    tag: "安全管理",
    name: "侯焕武",
    image: asset("/hou-huanwu-cutout.webp"),
    department: "安管部",
    range: "T3 公共区域",
    hours: "工作日 8:30–17:30",
    duties: "负责安全秩序、消防巡查、突发事件响应与现场协同。",
  },
];

const accessServices = [
  {
    title: "访客与闸机通行",
    subtitle: "人员录入 · 前台登记 · 提前报备",
    text: "闸机权限与访客到访统一联系对应客服管家办理。",
    image: asset("/access-gate.jpg"),
    preview: asset("/access-gate-preview.jpg"),
    alt: "T3写字楼大堂人脸识别闸机",
    steps: [
      "闸机权限：联系专属管家领取人员信息采集表，填写完成后发送管家录入，三个工作日内完成",
      "照片要求：请提交清晰的正脸照，避免因照片模糊或角度不正导致识别失败",
      "访客抵达后在前台登记",
      "提前联系需要到访企业的对接人",
      "企业对接人将访客信息发送给对应客服管家报备",
    ],
  },
];

const lobbyServices = [
  {
    title: "臻品物资箱",
    subtitle: "大堂甄品服务",
    image: asset("/lobby-supplies-kit.jpg"),
    preview: asset("/lobby-supplies-kit.webp"),
    alt: "臻品物资箱物品领用与借用清单",
    text: "可直接前往一楼大堂领用或借用。提供纸巾、女性用品、雨衣、针线包、后跟贴、漱口水、衣服去污纸等领用品，以及一次性毛巾、吹风机、一次性拖鞋、维修工具、充电宝、测温枪等暖心借用品。",
  },
];

const weatherServices = [
  {
    title: "雨伞机",
    image: asset("/shared-umbrella-station.jpg"),
    preview: asset("/shared-umbrella-station.webp"),
    alt: "大堂免费共享雨伞机",
    text: "提供免费雨伞借用服务。",
  },
  {
    title: "雨伞套机",
    image: asset("/umbrella-sleeve-machine.jpg"),
    preview: asset("/umbrella-sleeve-machine.webp"),
    alt: "大堂长柄和短柄雨伞套机",
    text: "提供适用于长柄和短柄雨伞的雨伞套。",
  },
  {
    title: "雨伞除水器",
    image: asset("/umbrella-dryer.jpg"),
    preview: asset("/umbrella-dryer.webp"),
    alt: "采用雪尼尔吸水面料的雨伞除水器",
    text: "采用雪尼尔吸水面料，将雨伞放入除水器内左右摇动 2 至 3 次，即可快速去除水滴。",
  },
  {
    title: "皮鞋擦鞋机",
    image: asset("/shoe-polisher.jpg"),
    preview: asset("/shoe-polisher.webp"),
    alt: "大堂皮鞋擦鞋机",
    text: "大堂配备皮鞋擦鞋机，同时提供皮鞋湿巾，方便日常鞋面清洁与护理。",
  },
];

const parkingGuides = [
  {
    id: "temporary-parking-guide",
    eyebrow: "TEMPORARY PARKING",
    title: "临时报备停车指引",
    image: asset("/temporary-parking-entrance.webp"),
    preview: asset("/temporary-parking-entrance-preview.webp"),
    alt: "横琴跨境电商华发创新产业园车辆临停处",
    width: 1600,
    height: 900,
    steps: [
      "车辆到达前，请联系所属区域物业管家完成临时报备",
      "仅限接送、接待等临时停靠",
      "完成接送或接待后请立即驶离，不得长期停放",
    ],
    note: "",
  },
  {
    id: "parking-guide",
    eyebrow: "PARKING APPLY",
    title: "停车月卡申请",
    image: asset("/parking-apply.jpg"),
    preview: asset("/parking-apply.webp"),
    alt: "T3 长租月卡新申请操作指引",
    width: 2200,
    height: 1565,
    steps: ["进入“爱泊客”小程序", "选择“横琴华发商都停车场”", "上传资料并等待管家审核", "审核通过后在线缴费"],
    alert: "建议至少提前 2 个工作日申请。",
    note: "",
  },
  {
    id: "parking-renewal-guide",
    eyebrow: "PARKING RENEWAL",
    title: "停车月卡续费缴费",
    image: asset("/parking-renewal.jpg"),
    preview: asset("/parking-renewal.webp"),
    alt: "T3长租月卡办理续费指引",
    width: 2227,
    height: 1280,
    steps: [
      "进入“爱泊客”小程序并验证手机号",
      "在“长租套餐”中选择需要续费的套餐",
      "选择续费月数并立即支付",
      "支付完成后查询续费状态",
    ],
    alert: "T3拓展区地下停车长租请务必在月卡到期前进行续费，如逾期未续费，原月卡套餐将自动失效，需结清临停费用，并重新提交月租申请。",
    note: "已生效的月卡费用不予退款，不可中途更换车牌，请合理安排续费时间及车牌。",
  },
];

const parkingElevatorGuides = [
  {
    title: "负一层 · 高区 / 超高区",
    text: "在 B1 停车后，跟随“T3办公电梯厅”指示牌前行。",
    image: asset("/parking-elevator-b1-sign.jpg"),
    preview: asset("/parking-elevator-b1-sign-preview.jpg"),
    alt: "负一层高区和超高区前往T3办公电梯厅的指示牌",
  },
  {
    title: "进入T3办公电梯厅",
    text: "按指示进入7号商业电梯厅；B1走廊亦可通往低区办公电梯厅。",
    image: asset("/parking-elevator-b1-hall.jpg"),
    preview: asset("/parking-elevator-b1-hall-preview.jpg"),
    alt: "负一层T3办公电梯厅入口",
  },
  {
    title: "负二层 · 低区 / 中区",
    text: "在 B2 跟随“7号商业电梯厅 / T3办公电梯厅”指示，进入对应办公电梯厅。",
    image: asset("/parking-elevator-b2-sign.jpg"),
    preview: asset("/parking-elevator-b2-sign-preview.jpg"),
    alt: "负二层低区和中区前往7号商业电梯厅及T3办公电梯厅的指示牌",
  },
];

const parkingElevatorRoute = [
  {
    title: "按办公分区停车",
    text: "高区、超高区车辆停至负一层；低区、中区车辆停至负二层。",
  },
  {
    title: "认准电梯厅标识",
    text: "下车后寻找“7号商业电梯厅 / T3办公电梯厅”指示牌，按标识前往。",
  },
  {
    title: "抵达大堂再换乘",
    text: "对应办公电梯均可到达一楼T3写字楼大堂，如需换乘请在大堂办理。",
  },
];

const routeGuides = [
  {
    id: "takeout-guide",
    eyebrow: "TAKEOUT ROUTE",
    title: "外卖取餐路线",
    image: asset("/takeout-step-1.jpg"),
    preview: asset("/takeout-step-1.webp"),
    alt: "从负一层低区电梯厅经中央连廊前往高区电梯厅外卖存放架的路线图",
    featured: false,
    wide: true,
    kind: "takeout",
    secondaryImages: [],
    steps: [
      "取餐点：广东省珠海市香洲区横琴跨境电商（华发）创新产业园T3栋拓展区高区负一外卖柜",
      "低区客户请从负一层经中央连廊前往高区电梯厅",
      "核对信息后及时取走，请勿长时间存放",
    ],
    note: "该区域设有 24 小时监控。",
  },
  {
    id: "freight-guide",
    eyebrow: "FREIGHT ELEVATOR",
    title: "18号货梯指引",
    image: asset("/freight-route.jpg"),
    preview: asset("/freight-route.webp"),
    alt: "从森林子果蔬茶旁侧入口前往18号货梯的室内路线指引",
    imagePending: false,
    featured: false,
    wide: true,
    kind: "freight",
    secondaryImages: [
      { src: asset("/freight-arrival.jpg"), preview: asset("/freight-arrival.webp"), alt: "车辆到达后沿路边规范停车", label: "01 · 车停路边" },
      { src: asset("/freight-entrance.jpg"), preview: asset("/freight-entrance.webp"), alt: "森林子果蔬茶旁侧的18号货梯通道入口", label: "02 · 找到旁侧入口" },
    ],
    steps: [
      "到达后沿路边规范停车",
      "找到旁侧入口",
      "进入室内通道",
      "沿18号货梯箭头直行",
      "按箭头左转",
      "到达18号货梯",
    ],
    note: "车辆请导航至“森林子果蔬茶”。饮用水、快递及送货请统一使用专属 18 号货梯；施工材料运输请前往负三层 18 号货梯上下货。",
  },
];

const faqs = [
  ["如何开通闸机权限？", "联系专属物业管家领取人员信息采集表，填写完成后发送管家录入，三个工作日内完成。请提交清晰的正脸照，避免因照片模糊或角度不正导致识别失败。"],
  ["临时报备停车怎么办理？", "车辆到达前请联系所属区域物业管家完成临时报备。临停仅限接送、接待等临时停靠，完成后请立即驶离，不得长期停放。"],
  ["停车月卡如何申请？", "进入“爱泊客”小程序，选择“横琴华发商都停车场”，上传资料并等待管家审核；审核通过后在线缴费。"],
  ["停车月卡如何续费？", "T3拓展区地下停车长租请务必在月卡到期前进行续费；逾期未续费，原月卡套餐将自动失效，需结清临停费用并重新提交月租申请。已生效的月卡费用不予退款，不可中途更换车牌。"],
  ["雨天的暖心服务有哪些？", "前台暖心物品包含一次性毛巾、吹风机和一次性拖鞋；雨伞机提供免费雨伞借用，雨伞套机提供适用于长柄和短柄雨伞的雨伞套；雨伞除水器采用雪尼尔吸水面料，将雨伞放入后左右摇动 2 至 3 次即可快速去除水滴。"],
  ["外卖取餐和18号货梯怎么走？", "外卖请按负一层低区电梯厅、中央连廊、高区电梯厅的路线前往外卖柜；饮用水、快递及送货请从“森林子果蔬茶”旁侧通道前往专属18号货梯，施工材料须到负三层上下货。"],
  ["地下停车场如何前往办公电梯厅？", "高区、超高区可在负一层跟随“T3办公电梯厅”指示；低区、中区可在负二层跟随“7号商业电梯厅 / T3办公电梯厅”指示。各办公电梯均可到达一楼T3写字楼大堂，并可在大堂换乘。"],
];

const freightSequence = [
  { src: asset("/freight-step-1.jpg"), preview: asset("/freight-step-1.webp"), label: "沿路边规范停车", alt: "车辆到达后沿路边规范停车" },
  { src: asset("/freight-step-2.jpg"), preview: asset("/freight-step-2.webp"), label: "找到旁侧入口", alt: "森林子果蔬茶旁侧的18号货梯通道入口" },
  { src: asset("/freight-step-3.jpg?v=20260802"), preview: asset("/freight-step-3.webp?v=20260802"), label: "进入室内通道", alt: "从旁侧入口进入18号货梯室内通道" },
  { src: asset("/freight-step-4.jpg?v=20260802"), preview: asset("/freight-step-4.webp?v=20260802"), label: "沿18号货梯箭头直行", alt: "沿室内通道地面18号货梯箭头直行" },
  { src: asset("/freight-step-5.jpg?v=20260802"), preview: asset("/freight-step-5.webp?v=20260802"), label: "按箭头左转", alt: "在18号货梯管控区域按地面箭头左转" },
  { src: asset("/freight-step-6.jpg?v=20260802"), preview: asset("/freight-step-6.webp?v=20260802"), label: "到达18号货梯", alt: "抵达专属18号货梯" },
];
const takeoutSequence = [
  { src: asset("/takeout-step-1.jpg"), preview: asset("/takeout-step-1.webp"), label: "低区电梯厅左转", alt: "从负一层低区电梯厅向左转" },
  { src: asset("/takeout-step-2.svg"), preview: asset("/takeout-step-2-preview.svg"), label: "通道终点左转", alt: "沿通道前行并在终点向左转" },
  { src: asset("/takeout-step-3.jpg"), preview: asset("/takeout-step-3.webp"), label: "直走抵达外卖柜", alt: "直行抵达高区负一层外卖柜" },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark" aria-hidden="true"><img src={asset("/huafa-mark.svg")} alt="" width="642" height="636" /></span>
          <span>横琴天啟T3物业服务中心</span>
        </a>
        <nav aria-label="页面导航">
          <a href="#team">物业团队</a>
          <a href="#services">暖心服务</a>
          <a href="#access">停车通行</a>
          <a href="#routes">外卖货梯</a>
        </nav>
        <a className="nav-call" href="tel:07568696992">24h 应急热线</a>
      </header>

      <section className="hero" id="top">
        <div
          className="hero-photo"
          aria-hidden="true"
          style={{ backgroundImage: `url("${asset("/t3-building.webp")}")` }}
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-orb orb-one" aria-hidden="true" />
        <div className="hero-orb orb-two" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span /> HENGQIN · T3 WORKPLACE</div>
          <h1>有温度的服务，<br /><em>让办公更简单。</em></h1>
          <p>横琴天啟 T3 写字楼物业服务团队<br className="desktop-break" />与您一起，安心抵达每一个工作日。</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#team">认识我们的团队 <span>↓</span></a>
            <a className="glass-btn" href="tel:07568696992"><span className="pulse-dot" /> 24 小时应急服务</a>
          </div>
        </div>
        <div className="hero-status glass-panel">
          <div>
            <span className="status-light" />
            <strong>工作日服务人员工作时间</strong>
          </div>
          <p>8:30–17:30</p>
        </div>
        <a className="scroll-cue" href="#intro" aria-label="向下浏览"><span /></a>
      </section>

      <section className="intro section-shell" id="intro">
        <div className="section-kicker">WELCOME TO T3</div>
        <div className="intro-grid">
          <h2>一座楼宇，<br />一群用心的人。</h2>
          <div className="intro-copy">
            <p>我们把每一次问候、每一项协助、每一个细节，都当作与企业共同成长的开始。</p>
            <div className="stats stats-single">
              <div><strong>T3</strong><span>物业服务</span></div>
            </div>
          </div>
        </div>
        <article className="building-overview" aria-labelledby="building-overview-title">
          <div
            className="building-visual"
            style={{ "--building-mask": `url("${asset("/t3-building-lineart.webp")}")` } as CSSProperties}
          >
            <span className="building-code">HENGQIN · T3</span>
            <span className="building-grid" aria-hidden="true" />
            <img
              src={asset("/t3-building-lineart.webp")}
              alt="横琴天啟T3栋建筑轮廓"
              width="862"
              height="1825"
              loading="lazy"
              decoding="async"
            />
            <div className="refuge-markers" aria-hidden="true">
              <span className="refuge-marker marker-40" data-floor="40F" />
              <span className="refuge-marker marker-30" data-floor="30F" />
              <span className="refuge-marker marker-20" data-floor="20F" />
              <span className="refuge-marker marker-10" data-floor="10F" />
            </div>
            <div className="building-metrics" aria-label="T3栋项目数据">
              <div><strong>249<small>m</small></strong><span>建筑高度</span></div>
              <div><strong>94,332<small>㎡</small></strong><span>总建筑面积</span></div>
            </div>
          </div>
          <div className="building-copy">
            <span className="section-kicker">BUILDING OVERVIEW</span>
            <h3 id="building-overview-title">一眼读懂T3栋</h3>
            <p>从首层大堂到选品空间，用一张纵向导览快速认识楼宇功能分布。</p>
            <div className="floor-directory" aria-label="T3栋楼层功能">
              <div className="floor-row floor-primary"><span>01F</span><strong>T3写字楼大堂</strong><i>抵达与服务</i></div>
              <div className="floor-row"><span>02–04F</span><strong>华发商都区域</strong><i>商业配套</i></div>
              <div className="floor-row"><span>05–09F</span><strong>选品中心</strong><i>选品空间</i></div>
              <div className="floor-client-group">
                <div className="floor-client-heading">
                  <span>11–49F</span>
                  <strong>写字楼办公区域</strong>
                  <i>办公空间</i>
                </div>
                <div className="client-zone-grid">
                  <div><span>11–16F</span><strong>低区</strong></div>
                  <div><span>17–27F</span><strong>中区</strong></div>
                  <div><span>28–38F</span><strong>高区</strong></div>
                  <div><span>39–49F</span><strong>超高区</strong></div>
                </div>
              </div>
              <div className="floor-row floor-safety"><span>10F / 20F / 30F / 40F</span><strong>避难层</strong><i>安全疏散</i></div>
            </div>
            <div className="building-note"><span>安全提示</span><p>避难层用于紧急情况下的临时疏散与避难，请留意楼内消防疏散标识。</p></div>
          </div>
        </article>
        <div className="home-directory" aria-label="网站目录与常用指引">
          <div className="directory-heading">
            <div><span className="section-kicker">QUICK DIRECTORY</span><h3>想找什么，直接到达。</h3></div>
          </div>
          <nav className="directory-links" aria-label="网站目录">
            <a href="#team"><span>01</span><strong>人员介绍</strong><small>认识9位专属服务伙伴</small><i>↓</i></a>
            <a href="#services"><span>02</span><strong>服务介绍</strong><small>大堂甄品与雨天暖心服务</small><i>↓</i></a>
            <a href="#access"><span>03</span><strong>停车与通行</strong><small>闸机、访客、临停与月卡</small><i>↓</i></a>
            <a href="#routes"><span>04</span><strong>路线介绍</strong><small>地下停车场、外卖与18号货梯</small><i>↓</i></a>
          </nav>
          <div className="quick-links" aria-label="常用办理直达">
            <span>常用办理直达</span>
            <a href="#parking-guide">停车月卡办理 <i>↘</i></a>
            <a href="#temporary-parking-guide">临时停车报备 <i>↘</i></a>
            <a href="#parking-elevator-guide">地下停车场指引 <i>↘</i></a>
            <a href="#freight-guide">18号货梯 <i>↘</i></a>
            <a href="#takeout-guide">外卖取餐 <i>↘</i></a>
          </div>
        </div>
      </section>

      <section className="team-section" id="team">
        <div className="section-shell">
          <div className="section-heading">
            <div><span className="section-kicker">OUR TEAM</span><h2>您的专属物业团队</h2></div>
          </div>
          <div className="team-grid">
            {team.map((person) => (
              <article className={`person-card${person.featured ? " featured" : ""}`} key={person.index}>
                <div className={`person-photo${"image" in person ? " has-photo" : ""}`}>
                  {"image" in person ? (
                    <>
                      <img className="person-portrait" src={person.image} alt={`${person.name} ${person.role}`} width="1254" height="1254" loading="lazy" decoding="async" />
                    </>
                  ) : (
                    <div className="photo-placeholder">
                      <span className="person-silhouette"><i /></span>
                      <small>照片待补充</small>
                    </div>
                  )}
                  <span className="person-index">{person.index}</span>
                  <span className="person-tag">{person.tag}</span>
                </div>
                <div className="person-info">
                  <div className="role-row"><div><span>{person.role}</span><h3>{person.name}</h3></div><span className="arrow">↗</span></div>
                  <p>{person.duties}</p>
                  <div className="person-meta"><span>⌖ {person.range}</span><span className="person-hours">◷ {person.hours}</span></div>
                </div>
              </article>
            ))}
          </div>
          <div className="team-subheading">
            <span className="section-kicker">PROFESSIONAL SUPPORT</span>
            <h3>专业支持团队</h3>
          </div>
          <div className="team-grid support-team-grid">
            {supportTeam.map((person) => (
              <article className="person-card" key={person.index}>
                <div className={`person-photo${"image" in person ? " has-photo" : ""}`}>
                  {"image" in person ? (
                    <>
                      <img className="person-portrait" src={person.image} alt={`${person.name} ${person.role}`} width="1254" height="1254" loading="lazy" decoding="async" />
                    </>
                  ) : (
                    <div className="photo-placeholder">
                      <span className="person-silhouette"><i /></span>
                      <small>照片待补充</small>
                    </div>
                  )}
                  <span className="person-index">{person.index}</span>
                  <span className="person-tag">{person.tag}</span>
                </div>
                <div className="person-info">
                  <div className="role-row"><div><span>{person.role}</span><h3>{person.name}</h3></div><span className="arrow">↗</span></div>
                  <p>{person.duties}</p>
                  <div className="person-meta"><span>⌖ {person.range}</span><span className="person-hours">◷ {person.hours}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services section-shell" id="services">
        <div className="section-heading service-heading">
          <div><span className="section-kicker">LOBBY WARM SERVICE</span><h2>大堂暖心服务</h2></div>
        </div>
        <div className="lobby-service-grid">
          {lobbyServices.map((service) => (
            <article className="lobby-service-card" key={service.title}>
              <a href={service.image} target="_blank" rel="noreferrer" data-lightbox="image" aria-label={`查看${service.title}完整清单`}>
                <img
                  src={service.preview}
                  alt={service.alt}
                  width="1810"
                  height="1279"
                  loading="lazy"
                  decoding="async"
                />
                <span>查看完整清单 ↗</span>
              </a>
              <div>
                <span className="section-kicker">{service.subtitle}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="lobby-service-tags"><span>应急领用品</span><span>便民借用品</span></div>
              </div>
            </article>
          ))}
        </div>
        <div className="weather-service-heading">
          <span className="section-kicker">RAINY DAY CARE</span>
          <h3>雨天暖心服务</h3>
        </div>
        <div className="weather-service-grid">
          {weatherServices.map((service) => (
            <article className="weather-service-card" key={service.title}>
              <a
                className="weather-service-photo"
                href={service.image}
                target="_blank"
                rel="noreferrer"
                data-lightbox="image"
                aria-label={`查看${service.title}清晰原图`}
              >
                <img
                  src={service.preview}
                  alt={service.alt}
                  width="1200"
                  height="1600"
                  loading="lazy"
                  decoding="async"
                />
                <span>查看清晰原图 ↗</span>
              </a>
              <div className="weather-service-copy">
                <span>{service.title === "皮鞋擦鞋机" ? "大堂便民设备" : "雨天设备"}</span>
                <h4>{service.title}</h4>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="access-section" id="access">
        <div className="section-shell">
          <div className="section-heading access-heading">
            <div><span className="section-kicker">PARKING & ACCESS</span><h2>停车与通行</h2></div>
            <p>闸机、访客、临时报备与停车月卡集中查看。</p>
          </div>
          <div className="parking-guide-grid">
            {accessServices.map((service, index) => (
              <article className="access-service-card parking-access-card" key={service.title}>
                <a className="access-service-photo" href={service.image} target="_blank" rel="noreferrer" data-lightbox="image" aria-label={`查看${service.title}清晰原图`}>
                  <img src={service.preview} alt={service.alt} width="1050" height="591" loading="lazy" decoding="async" />
                  <span>查看清晰原图 ↗</span>
                </a>
                <div className="access-service-copy">
                  <div className="access-service-index"><span className="service-no">0{index + 1}</span></div>
                  <span className="service-subtitle">{service.subtitle}</span>
                  <h3>{service.title}</h3>
                  {service.text && <p>{service.text}</p>}
                {service.steps.length > 0 && (
                  <ol className="access-steps">
                    {service.steps.map((step) => <li key={step}>{step}</li>)}
                  </ol>
                )}
                </div>
              </article>
            ))}
            {parkingGuides.map((guide) => (
              <article className="parking-guide-card" id={guide.id} key={guide.title}>
                <a className="parking-guide-visual" href={guide.image} target="_blank" rel="noreferrer" data-lightbox="image" aria-label={`查看${guide.title}清晰原图`}>
                  <img
                    src={guide.preview}
                    alt={guide.alt}
                    width={guide.width}
                    height={guide.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>查看清晰原图 ↗</span>
                </a>
                <div className="parking-guide-copy">
                  <span className="section-kicker">{guide.eyebrow}</span>
                  <h3>{guide.title}</h3>
                  <ol>
                    {guide.steps.map((step) => <li key={step}><span>{step}</span></li>)}
                  </ol>
                  {"alert" in guide && guide.alert && (
                    <div className="parking-renewal-alert">
                      <strong>重要提醒</strong>
                      <p>{guide.alert}</p>
                    </div>
                  )}
                  {guide.note && <p>{guide.note}</p>}
                </div>
              </article>
            ))}
          </div>
          <div className="parking-elevator-guide" id="parking-elevator-guide">
            <div className="parking-elevator-heading">
              <div><span className="section-kicker">PARKING TO OFFICE</span><h3>地下停车场 · T3办公电梯厅指引</h3></div>
              <p>先按办公分区停车，再认准“7号商业电梯厅 / T3办公电梯厅”标识进入对应电梯厅。</p>
            </div>
            <ol className="parking-elevator-route" aria-label="从停车场到办公电梯厅的路线">
              {parkingElevatorRoute.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><strong>{step.title}</strong><p>{step.text}</p></div>
                </li>
              ))}
            </ol>
            <div className="parking-elevator-grid">
              {parkingElevatorGuides.map((guide, index) => (
                <article className="parking-elevator-card" key={guide.title}>
                  <a className="parking-elevator-photo" href={guide.image} target="_blank" rel="noreferrer" data-lightbox="image" aria-label={`查看${guide.title}清晰原图`}>
                    <img src={guide.preview} alt={guide.alt} width="1000" height="563" loading="lazy" decoding="async" />
                    <span>0{index + 1}</span>
                  </a>
                  <div className="parking-elevator-copy"><h4>{guide.title}</h4><p>{guide.text}</p></div>
                </article>
              ))}
            </div>
            <p className="parking-transfer-note"><strong>换乘提示</strong> 各办公电梯均可到达一楼T3写字楼大堂；如需前往其他分区，可在一楼大堂换乘。</p>
          </div>
        </div>
      </section>

      <section className="routes" id="routes">
        <div className="section-shell">
          <div className="section-heading route-heading">
            <div><span className="section-kicker">SERVICE MAP</span><h2>外卖与货梯路线</h2></div>
            <p>外卖取餐与18号货梯指引集中展示；点击图片可查看清晰原图。</p>
          </div>
          <div className="route-grid">
            {routeGuides.map((guide) => (
              <article id={guide.id} className={`route-card${guide.featured ? " route-featured" : ""}${guide.wide ? " route-wide" : ""}${guide.kind === "freight" ? " route-freight" : " route-takeout"}`} key={guide.title}>
                <div className="route-copy">
                  {guide.featured && <span className="route-priority">重点指引</span>}
                  <span className="section-kicker">{guide.eyebrow}</span>
                  <h3>{guide.title}</h3>
                  <ol>
                    {guide.steps.map((step) => <li key={step}><span>{step}</span></li>)}
                  </ol>
                  {guide.note && <p>{guide.note}</p>}
                </div>
                {guide.kind === "takeout" ? (
                  <>
                    <div className="takeout-gallery" aria-label="外卖取餐路线步骤">
                      {takeoutSequence.map((step, index) => (
                        <a href={step.src} target="_blank" rel="noreferrer" data-lightbox="image" key={step.src} className="takeout-step">
                          <img src={step.preview} alt={step.alt} width="1600" height="899" loading="lazy" decoding="async" />
                          <span>{String(index + 1).padStart(2, "0")} · {step.label}</span>
                        </a>
                      ))}
                    </div>
                    <div className="route-address-grid" aria-label="外卖与快递地址">
                      <div><span>TAKEOUT ADDRESS</span><strong>外卖地址</strong><p>广东省珠海市香洲区横琴跨境电商（华发）创新产业园T3栋拓展区高区负一外卖柜</p></div>
                      <div><span>COURIER ADDRESS</span><strong>快递地址</strong><p>广东省珠海市香洲区横琴跨境电商（华发）创新产业园T3栋拓展区（请填写企业房号）</p></div>
                    </div>
                  </>
                ) : (
                  <div className="freight-gallery">
                    <div className="freight-sequence" aria-label="18号货梯室内路线步骤">
                      {freightSequence.map((step, index) => (
                        <a href={step.src} target="_blank" rel="noreferrer" data-lightbox="image" key={step.src} className="freight-step">
                          <img
                            src={step.preview}
                            alt={step.alt}
                            width="1600"
                            height="900"
                            loading="lazy"
                            decoding="async"
                          />
                          <span>{String(index + 1).padStart(2, "0")} · {step.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="guide" id="guide">
        <div className="section-shell guide-grid">
          <div className="guide-copy">
            <span className="section-kicker light">SERVICE GUIDE</span>
            <h2>常见问题，<br />我们先替您想到。</h2>
            <p>更多事项请联系所属区域物业管家，我们会持续补充和更新服务指引。</p>
            <a href="tel:07568696992" className="outline-btn">拨打应急热线 0756-8696992</a>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary><span>0{index + 1}</span>{question}<i>＋</i></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-strip">
        <div className="contact-inner section-shell">
          <div><span className="status-light" /><p>紧急情况，请优先联系</p><h2>24 小时应急热线</h2></div>
          <a href="tel:07568696992">0756-8696992 <span>↗</span></a>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-grid">
          <div className="footer-brand"><span className="brand-mark" aria-hidden="true"><img src={asset("/huafa-mark.svg")} alt="" width="642" height="636" /></span><div><strong>横琴天啟 T3 写字楼</strong><p>物业服务团队 · 让办公更简单</p></div></div>
          <div className="footer-address"><span>项目地址</span><p>珠海市横琴新区荣澳道 128 号</p></div>
          <p className="copyright">© 2026 T3 PROPERTY SERVICE</p>
        </div>
      </footer>
      <ImageLightbox />
    </main>
  );
}
