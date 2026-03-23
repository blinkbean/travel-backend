import type { Core } from '@strapi/strapi';

const SEED_TOURS = [
  {
    sort_order: 1,
    image: 'tour-img-1',
    badge: 'popular',
    price: 8800,
    title_zh: '中国经典黄金线路', title_en: 'Classic China Golden Route', title_es: 'Ruta Dorada Clásica de China',
    duration_zh: '11天', duration_en: '11 Days',
    route_zh: '北京 → 西安 → 桂林 → 上海', route_en: 'Beijing → Xi\'an → Guilin → Shanghai', route_es: 'Pekín → Xi\'an → Guilin → Shanghái',
    description_zh: '感受千年帝都风华，品味古都历史，漫步甲天下山水，邂逅繁华都市',
    description_en: 'Experience the glory of ancient capitals, taste history, stroll through legendary landscapes, and encounter the vibrant city.',
    description_es: 'Experimenta la gloria de las capitales antiguas, saborea la historia y descubre paisajes legendarios.',
    highlights_zh: ['故宫 · 长城 · 天坛', '兵马俑 · 古城墙', '漓江 · 阳朔竹筏', '外滩 · 豫园'],
    highlights_en: ['Forbidden City · Great Wall · Temple of Heaven', 'Terracotta · Ancient City Wall', 'Li River · Yangshuo Bamboo Raft', 'The Bund · Yu Garden'],
    highlights_es: ['Ciudad Prohibida · Gran Muralla', 'Guerreros de Terracota', 'Río Li · Balsa de bambú', 'El Bund · Jardín Yuyuan'],
  },
  {
    sort_order: 2,
    image: 'tour-img-2',
    badge: null,
    price: 12500,
    title_zh: '神秘西藏深度游', title_en: 'Mysterious Tibet In-Depth', title_es: 'Misterioso Tíbet en Profundidad',
    duration_zh: '13天', duration_en: '13 Days',
    route_zh: '北京 → 西安 → 拉萨 → 成都 → 上海', route_en: 'Beijing → Xi\'an → Lhasa → Chengdu → Shanghai', route_es: 'Pekín → Xi\'an → Lhasa → Chengdu → Shanghái',
    description_zh: '触摸离天空最近的土地，感受独特的藏传佛教文化与壮丽高原风光',
    description_en: 'Touch the land closest to the sky and experience the unique Tibetan Buddhist culture and majestic plateau scenery.',
    description_es: 'Toca la tierra más cercana al cielo y experimenta la cultura budista tibetana única.',
    highlights_zh: ['布达拉宫 · 大昭寺', '纳木错圣湖', '成都大熊猫基地'],
    highlights_en: ['Potala Palace · Jokhang Temple', 'Nam Co Holy Lake', 'Chengdu Panda Base'],
    highlights_es: ['Palacio Potala · Templo Jokhang', 'Lago Sagrado Nam Co', 'Base de Pandas de Chengdu'],
  },
  {
    sort_order: 3,
    image: 'tour-img-3',
    badge: 'new',
    price: 6200,
    title_zh: '历史与现代对话', title_en: 'History Meets Modernity', title_es: 'Historia y Modernidad',
    duration_zh: '8天', duration_en: '8 Days',
    route_zh: '北京 → 西安 → 上海', route_en: 'Beijing → Xi\'an → Shanghai', route_es: 'Pekín → Xi\'an → Shanghái',
    description_zh: '紧凑而精华，三大城市三种气质，跨越三千年中华文明最耀眼的篇章',
    description_en: 'Compact yet essential — three cities, three characters, spanning 3,000 years of Chinese civilization.',
    description_es: 'Compacto pero esencial: tres ciudades, tres caracteres, abarcando 3.000 años de civilización china.',
    highlights_zh: ['长城 · 颐和园', '秦始皇陵 · 回民街', '上海外滩夜游'],
    highlights_en: ['Great Wall · Summer Palace', 'Qin Mausoleum · Muslim Quarter', 'Shanghai Bund Night Tour'],
    highlights_es: ['Gran Muralla · Palacio de Verano', 'Mausoleo Qin · Barrio Musulmán', 'Tour Nocturno del Bund'],
  },
  {
    sort_order: 4,
    image: 'tour-img-4',
    badge: null,
    price: 14800,
    title_zh: '中国全景深度游', title_en: 'China Panoramic Tour', title_es: 'Tour Panorámico de China',
    duration_zh: '14天', duration_en: '14 Days',
    route_zh: '北京 → 西安 → 成都 → 桂林 → 上海', route_en: 'Beijing → Xi\'an → Chengdu → Guilin → Shanghai', route_es: 'Pekín → Xi\'an → Chengdu → Guilin → Shanghái',
    description_zh: '五城联游，从北方古都到南方水乡，将中国最精华的面貌一网打尽',
    description_en: 'Five-city journey from northern ancient capitals to southern water towns — the best of China in one tour.',
    description_es: 'Viaje por cinco ciudades desde las antiguas capitales del norte hasta los pueblos acuáticos del sur.',
    highlights_zh: ['故宫 · 长城', '大熊猫 · 火锅', '漓江山水 · 外滩'],
    highlights_en: ['Forbidden City · Great Wall', 'Giant Panda · Hot Pot', 'Li River · The Bund'],
    highlights_es: ['Ciudad Prohibida · Gran Muralla', 'Panda Gigante · Hot Pot', 'Río Li · El Bund'],
  },
  {
    sort_order: 5,
    image: 'tour-img-5',
    badge: null,
    price: 10600,
    title_zh: '壮美山河探险游', title_en: 'Spectacular Mountains Adventure', title_es: 'Aventura por Montañas Espectaculares',
    duration_zh: '12天', duration_en: '12 Days',
    route_zh: '北京 → 西安 → 张家界 → 桂林 → 上海', route_en: 'Beijing → Xi\'an → Zhangjiajie → Guilin → Shanghai', route_es: 'Pekín → Xi\'an → Zhangjiajie → Guilin → Shanghái',
    description_zh: '张家界悬浮山脉，漓江奇峰倒影，大自然鬼斧神工的惊世之作',
    description_en: 'Zhangjiajie\'s floating mountains and the Li River\'s mirrored peaks — nature\'s most breathtaking masterpieces.',
    description_es: 'Las montañas flotantes de Zhangjiajie y los picos reflejados del río Li.',
    highlights_zh: ['阿凡达取景地', '玻璃桥 · 天门山', '漓江竹筏漂流'],
    highlights_en: ['Avatar Filming Location', 'Glass Bridge · Tianmen Mountain', 'Li River Bamboo Rafting'],
    highlights_es: ['Lugar de filmación de Avatar', 'Puente de Cristal · Monte Tianmen', 'Rafting en bambú por el río Li'],
  },
  {
    sort_order: 6,
    image: 'tour-img-6',
    badge: null,
    price: 13200,
    title_zh: '丝绸之路探秘', title_en: 'Silk Road Discovery', title_es: 'Descubrimiento de la Ruta de la Seda',
    duration_zh: '14天', duration_en: '14 Days',
    route_zh: '西安 → 兰州 → 张掖 → 敦煌 → 乌鲁木齐', route_en: 'Xi\'an → Lanzhou → Zhangye → Dunhuang → Ürümqi', route_es: 'Xi\'an → Lanzhou → Zhangye → Dunhuang → Ürümqi',
    description_zh: '沿古丝绸之路溯源而行，探寻莫高窟壁画、七彩丹霞与茫茫大漠的壮阔',
    description_en: 'Journey along the ancient Silk Road to discover the Mogao Cave murals, Rainbow Mountains, and vast desert.',
    description_es: 'Viaja por la antigua Ruta de la Seda para descubrir los murales de las Cuevas de Mogao y el desierto.',
    highlights_zh: ['莫高窟 · 月牙泉', '张掖七彩丹霞', '天山天池'],
    highlights_en: ['Mogao Caves · Crescent Moon Lake', 'Zhangye Rainbow Mountains', 'Tianshan Heaven Lake'],
    highlights_es: ['Cuevas de Mogao · Lago Luna Creciente', 'Montañas Arcoíris de Zhangye', 'Lago del Cielo Tianshan'],
  },
];

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // 自动为 Public 角色设置所需的 API 权限
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (!publicRole) return;

    const permissionsToGrant = [
      { action: 'api::inquiry.inquiry.create' },
      { action: 'api::tour.tour.find' },
      { action: 'api::tour.tour.findOne' },
      { action: 'api::booking.booking.create' },
      { action: 'api::moment.moment.find' },
    ];

    for (const perm of permissionsToGrant) {
      const exists = await strapi
        .query('plugin::users-permissions.permission')
        .findOne({ where: { action: perm.action, role: publicRole.id } });

      if (!exists) {
        await strapi
          .query('plugin::users-permissions.permission')
          .create({ data: { action: perm.action, role: publicRole.id } });
      }
    }

    // 修复 admin 角色 Content Manager 权限：
    // 新增字段不会自动加入已有角色的 properties.fields，导致"无权查看此字段"
    const newDestFields = [
      'content_zh', 'content_en', 'content_es',
    ];
    const destPermissions = await strapi.db.query('admin::permission').findMany({
      where: { subject: 'api::destination.destination' },
    });
    for (const perm of destPermissions) {
      const props = (perm.properties as Record<string, unknown>) || {};
      const existingFields: string[] = (props.fields as string[]) || [];
      const merged = [...new Set([...existingFields, ...newDestFields])];
      if (merged.length !== existingFields.length) {
        await strapi.db.query('admin::permission').update({
          where: { id: perm.id },
          data: { properties: { ...props, fields: merged } },
        });
      }
    }

    // 修复 moment 的 admin 权限：确保所有字段（含 image media 字段）都在 properties.fields 中
    const momentAllFields = ['image', 'name_zh', 'name_en', 'name_es', 'taken_at', 'sort_order'];
    const momentPermissions = await strapi.db.query('admin::permission').findMany({
      where: { subject: 'api::moment.moment' },
    });
    for (const perm of momentPermissions) {
      const props = (perm.properties as Record<string, unknown>) || {};
      const existingFields: string[] = (props.fields as string[]) || [];
      const merged = [...new Set([...existingFields, ...momentAllFields])];
      if (merged.length !== existingFields.length) {
        await strapi.db.query('admin::permission').update({
          where: { id: perm.id },
          data: { properties: { ...props, fields: merged } },
        });
      }
    }

    // 幂等种子：仅在 tours 表为空时插入数据
    const count = await strapi.query('api::tour.tour').count();
    if (count === 0) {
      for (const tour of SEED_TOURS) {
        await strapi.query('api::tour.tour').create({
          data: { ...tour, publishedAt: new Date() },
        });
      }
      strapi.log.info(`Seeded ${SEED_TOURS.length} tours.`);
    }
  },
};
