const team = [
  {
    index: "01",
    role: "T3写字楼物业负责人",
    tag: "统筹管理",
    name: "T3栋物业负责人",
    range: "T3 写字楼全域",
    duties: "统筹服务品质、安全运营与跨部门协同，快速响应企业重要事项。",
    phone: "13543226860",
    featured: true,
  },
  {
    index: "02",
    role: "物业管家",
    tag: "高区服务",
    name: "曾令慧",
    range: "高区 · 楼层待补充",
    duties: "负责企业入驻、报事跟进、费用咨询与高区日常巡查。",
    phone: "电话待补充",
  },
  {
    index: "03",
    role: "物业管家",
    tag: "低区服务",
    name: "何思慧",
    range: "低区 · 楼层待补充",
    duties: "负责客户沟通、访客协助、装修协调与低区日常服务。",
    phone: "电话待补充",
  },
  {
    index: "04",
    role: "选品中心负责人",
    tag: "选品空间",
    name: "刘大平",
    range: "T3选品中心5-9楼",
    duties: "统筹选品中心接洽、活动支持、空间秩序与资源协同。",
    phone: "电话待补充",
  },
  {
    index: "05",
    role: "大堂管家",
    tag: "首问服务",
    name: "周芷盈",
    range: "T3 首层大堂",
    duties: "承担大堂迎宾、访客分流、电梯引导与高峰秩序维护。",
    phone: "电话待补充",
  },
  {
    index: "06",
    role: "接待员",
    tag: "来访接待",
    name: "梁盼盼",
    range: "选品中心前台",
    duties: "提供来访登记、路线指引、会议接待与现场咨询服务。",
    phone: "电话待补充",
  },
  {
    index: "07",
    role: "接待员",
    tag: "会务支持",
    name: "刘嘉欣",
    range: "选品中心前台",
    duties: "负责客户迎送、会务衔接、物资确认与服务信息传递。",
    phone: "电话待补充",
  },
];

const supportTeam = [
  {
    index: "08",
    role: "工程部经理",
    tag: "工程统筹",
    name: "刘六虎",
    range: "T3 工程运维全域",
    duties: "统筹设施设备运行、工程维修、施工协调与现场技术支持。",
    phone: "13823091591",
  },
  {
    index: "09",
    role: "安管部负责人",
    tag: "安全管理",
    name: "侯焕武",
    range: "T3 公共区域",
    duties: "负责安全秩序、消防巡查、突发事件响应与现场协同。",
    phone: "13500241113",
  },
];

const accessServices = [
  {
    icon: "闸",
    title: "闸机权限",
    subtitle: "人员信息录入",
    text: "联系专属物业管家领取人员信息采集表，填写完成后发送管家录入。",
    steps: [],
  },
  {
    icon: "访",
    title: "访客到访指引",
    subtitle: "前台登记 · 提前报备",
    text: "",
    steps: [
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
    image: "/lobby-supplies-kit.jpg",
    alt: "臻品物资箱物品领用与借用清单",
    text: "提供纸巾、女性用品、雨衣、针线包、后跟贴、漱口水、衣服去污纸等领用品，以及一次性毛巾、吹风机、一次性拖鞋、维修工具、充电宝、测温枪等暖心借用品。",
  },
];

const weatherServices = [
  {
    title: "雨伞机",
    image: "/shared-umbrella-station.jpg",
    alt: "大堂免费共享雨伞机",
    text: "提供免费雨伞借用服务。",
  },
  {
    title: "雨伞套机",
    image: "/umbrella-sleeve-machine.jpg",
    alt: "大堂长柄和短柄雨伞套机",
    text: "提供适用于长柄和短柄雨伞的雨伞套。",
  },
  {
    title: "雨伞除水器",
    image: "/umbrella-dryer.jpg",
    alt: "采用雪尼尔吸水面料的雨伞除水器",
    text: "采用雪尼尔吸水面料，将雨伞放入除水器内左右摇动 2 至 3 次，即可快速去除水滴。",
  },
  {
    title: "皮鞋擦鞋机",
    image: "/shoe-polisher.jpg",
    alt: "大堂皮鞋擦鞋机",
    text: "大堂配备皮鞋擦鞋机，同时提供皮鞋湿巾，方便日常鞋面清洁与护理。",
  },
];

const parkingGuides = [
  {
    id: "temporary-parking-guide",
    eyebrow: "TEMPORARY PARKING",
    title: "临时报备停车指引",
    image: "/temporary-parking-entrance.png",
    alt: "横琴跨境电商华发创新产业园车辆临停处",
    width: 1672,
    height: 941,
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
    image: "/parking-apply.jpg",
    alt: "T3 长租月卡新申请操作指引",
    width: 5032,
    height: 3579,
    steps: ["进入“爱泊客”小程序", "选择“横琴华发商都停车场”", "上传资料并等待管家审核", "审核通过后在线缴费"],
    note: "建议至少提前 2 个工作日申请。",
  },
];

const routeGuides = [
  {
    id: "takeout-guide",
    eyebrow: "TAKEOUT ROUTE",
    title: "外卖取餐路线",
    image: "/takeout-step-1.jpg",
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
    image: "/freight-route.jpg",
    alt: "从森林子果蔬茶旁侧入口前往18号货梯的室内路线指引",
    imagePending: false,
    featured: false,
    wide: true,
    kind: "freight",
    secondaryImages: [
      { src: "/freight-arrival.jpg", alt: "车辆到达后沿车信路路边停车", label: "01 · 车停路边" },
      { src: "/freight-entrance.jpg", alt: "森林子果蔬茶旁侧的18号货梯通道入口", label: "02 · 找到旁侧入口" },
    ],
    steps: [
      "车辆导航至“森林子果蔬茶”",
      "到达后沿车信路路边规范停车",
      "从“森林子果蔬茶”旁侧通道入口进入",
      "进入通道后按照现场箭头指引前行",
      "到达专属 18 号货梯",
      "施工材料运输请前往负三层 18 号货梯上下货",
    ],
    note: "饮用水、快递及送货请统一使用专属 18 号货梯；施工材料须在负三层装卸。",
  },
];

const faqs = [
  ["如何开通闸机权限？", "联系专属物业管家领取人员信息采集表，填写完成后发送管家录入。"],
  ["临时报备停车怎么办理？", "车辆到达前请联系所属区域物业管家完成临时报备。临停仅限接送、接待等临时停靠，完成后请立即驶离，不得长期停放。"],
  ["停车月卡如何申请？", "进入“爱泊客”小程序，选择“横琴华发商都停车场”，上传资料并等待管家审核；审核通过后在线缴费。"],
  ["雨天的暖心服务有哪些？", "前台暖心物品包含一次性毛巾、吹风机和一次性拖鞋；雨伞机提供免费雨伞借用，雨伞套机提供适用于长柄和短柄雨伞的雨伞套；雨伞除水器采用雪尼尔吸水面料，将雨伞放入后左右摇动 2 至 3 次即可快速去除水滴。"],
  ["外卖取餐和18号货梯怎么走？", "外卖请按负一层低区电梯厅、中央连廊、高区电梯厅的路线前往外卖柜；饮用水、快递及送货请从“森林子果蔬茶”旁侧通道前往专属18号货梯，施工材料须到负三层上下货。"],
];

const freightSequence = ["进入通道", "按箭头右转", "沿走廊直行", "按箭头左转", "到达18号货梯"];
const takeoutSequence = [
  { src: "/takeout-step-1.jpg", label: "低区电梯厅左转", alt: "从负一层低区电梯厅向左转" },
  { src: "/takeout-step-2.jpg", label: "通道终点左转", alt: "沿通道前行并在终点向左转" },
  { src: "/takeout-step-3.jpg", label: "直走抵达外卖柜", alt: "直行抵达高区负一层外卖柜" },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark">T3</span>
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
        <div className="hero-photo" aria-hidden="true" />
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
            <strong>服务在线</strong>
          </div>
          <p>工作日服务 · 快速响应</p>
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
        <div className="home-directory" aria-label="网站目录与常用指引">
          <div className="directory-heading">
            <div><span className="section-kicker">QUICK DIRECTORY</span><h3>想找什么，直接到达。</h3></div>
          </div>
          <nav className="directory-links" aria-label="网站目录">
            <a href="#team"><span>01</span><strong>人员介绍</strong><small>认识9位专属服务伙伴</small><i>↓</i></a>
            <a href="#services"><span>02</span><strong>服务介绍</strong><small>大堂甄品与雨天暖心服务</small><i>↓</i></a>
            <a href="#access"><span>03</span><strong>停车与通行</strong><small>闸机、访客、临停与月卡</small><i>↓</i></a>
            <a href="#routes"><span>04</span><strong>路线介绍</strong><small>外卖取餐与18号货梯</small><i>↓</i></a>
          </nav>
          <div className="quick-links" aria-label="常用办理直达">
            <span>常用办理直达</span>
            <a href="#parking-guide">停车月卡办理 <i>↘</i></a>
            <a href="#temporary-parking-guide">临时停车报备 <i>↘</i></a>
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
                <div className="person-photo">
                  <div className="photo-placeholder">
                    <span className="person-silhouette"><i /></span>
                    <small>照片待补充</small>
                  </div>
                  <span className="person-index">{person.index}</span>
                  <span className="person-tag">{person.tag}</span>
                </div>
                <div className="person-info">
                  <div className="role-row"><div><span>{person.name}</span><h3>{person.role}</h3></div><span className="arrow">↗</span></div>
                  <p>{person.duties}</p>
                  <div className="person-meta"><span>⌖ {person.range}</span><span>☎ {person.phone}</span></div>
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
              <article className={`person-card${person.featured ? " featured" : ""}`} key={person.index}>
                <div className="person-photo">
                  <div className="photo-placeholder">
                    <span className="person-silhouette"><i /></span>
                    <small>照片待补充</small>
                  </div>
                  <span className="person-index">{person.index}</span>
                  <span className="person-tag">{person.tag}</span>
                </div>
                <div className="person-info">
                  <div className="role-row"><div><span>{person.name}</span><h3>{person.role}</h3></div><span className="arrow">↗</span></div>
                  <p>{person.duties}</p>
                  <div className="person-meta"><span>⌖ {person.range}</span><span>☎ {person.phone}</span></div>
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
              <a href={service.image} target="_blank" rel="noreferrer" aria-label={`查看${service.title}完整清单`}>
                <img
                  src={service.image}
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
                aria-label={`查看${service.title}清晰原图`}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  width="3024"
                  height="4032"
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
          <div className="access-service-grid">
            {accessServices.map((service, index) => (
              <article className="access-service-card" key={service.title}>
                <div className="service-top"><span className="service-icon">{service.icon}</span><span className="service-no">0{index + 1}</span></div>
                <span className="service-subtitle">{service.subtitle}</span>
                <h3>{service.title}</h3>
                {service.text && <p>{service.text}</p>}
                {service.steps.length > 0 && (
                  <ol className="access-steps">
                    {service.steps.map((step) => <li key={step}>{step}</li>)}
                  </ol>
                )}
              </article>
            ))}
          </div>
          <div className="parking-guide-grid">
            {parkingGuides.map((guide) => (
              <article className="parking-guide-card" id={guide.id} key={guide.title}>
                <a className="parking-guide-visual" href={guide.image} target="_blank" rel="noreferrer" aria-label={`查看${guide.title}清晰原图`}>
                  <img
                    src={guide.image}
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
                  {guide.note && <p>{guide.note}</p>}
                </div>
              </article>
            ))}
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
                        <a href={step.src} target="_blank" rel="noreferrer" key={step.src} className="takeout-step">
                          <img src={step.src} alt={step.alt} width="1600" height="899" loading="lazy" decoding="async" />
                          <span>{String(index + 1).padStart(2, "0")} · {step.label}</span>
                        </a>
                      ))}
                    </div>
                    <div className="route-address-grid" aria-label="外卖与快递地址">
                      <div><span>TAKEOUT ADDRESS</span><strong>外卖地址</strong><p>广东省珠海市香洲区横琴跨境电商（华发）创新产业园T3栋拓展区高区负一外卖柜</p></div>
                      <div><span>COURIER ADDRESS</span><strong>快递地址</strong><p>广东省珠海市香洲区横琴跨境电商（华发）创新产业园T3栋拓展区xxxx号房</p></div>
                    </div>
                  </>
                ) : (
                  <div className="freight-gallery">
                    <div className="freight-landmarks">
                      {guide.secondaryImages.map((item) => (
                        <a href={item.src} target="_blank" rel="noreferrer" key={item.src}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      width="1707"
                      height="1280"
                      loading="lazy"
                      decoding="async"
                    />
                          <span>{item.label}</span>
                        </a>
                      ))}
                    </div>
                    <div className="freight-sequence" aria-label="18号货梯室内路线步骤">
                      {freightSequence.map((label, index) => (
                        <a href={guide.image} target="_blank" rel="noreferrer" key={label} className={`freight-step freight-step-${index + 1}`}>
                      <img
                        src={guide.image}
                        alt={`${label}路线画面`}
                        width="1037"
                        height="6583"
                        loading="lazy"
                        decoding="async"
                      />
                          <span>{String(index + 3).padStart(2, "0")} · {label}</span>
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
          <div className="footer-brand"><span className="brand-mark">T3</span><div><strong>横琴天啟 T3 写字楼</strong><p>物业服务团队 · 让办公更简单</p></div></div>
          <div className="footer-address"><span>项目地址</span><p>珠海市横琴新区荣澳道 128 号</p></div>
          <p className="copyright">© 2026 T3 PROPERTY SERVICE</p>
        </div>
      </footer>
    </main>
  );
}
