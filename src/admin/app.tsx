import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      'zh-Hans',
    ],
    theme: {
      light: {
        fontSizes: {
          1: '15px',
          2: '17px',
          3: '19px',
          4: '21px',
          5: '24px',
          6: '30px',
        },
      },
    },
  },
  bootstrap(app: StrapiApp) {
    const style = document.createElement('style');
    style.innerHTML = `
      /* 侧边栏导航文字加大 */
      nav a span, nav button span {
        font-size: 16px !important;
      }
      /* 侧边栏图标加大 */
      nav a svg, nav button svg {
        width: 22px !important;
        height: 22px !important;
      }
      /* 侧边栏每个菜单项高度适配 */
      nav a, nav button {
        min-height: 42px !important;
      }
    `;
    document.head.appendChild(style);
  },
};
