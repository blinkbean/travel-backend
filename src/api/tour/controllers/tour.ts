import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::tour.tour', ({ strapi }) => ({
  async find(ctx) {
    const { filters = {} } = ctx.query as any;

    // 前端用 destinations（复数）传参，转为 schema 中的 destination（单数）
    if (filters['destinations']) {
      filters['destination'] = filters['destinations'];
      delete filters['destinations'];
      ctx.query.filters = filters;
    }

    // 如果没有指定 destination 过滤，则只返回未绑定目的地的路线
    if (!filters['destination']) {
      ctx.query.filters = Object.assign({}, filters, { destination: { id: { $null: true } } });
    }

    return super.find(ctx);
  },
}));
