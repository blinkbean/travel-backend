import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::notice.notice', ({ strapi }) => ({
	async list(ctx) {
		const notices = await strapi.entityService.findMany('api::notice.notice', {
			status: 'published',
			sort: [{ time: 'desc' }, { sort_order: 'asc' }, { createdAt: 'desc' }],
			fields: ['title', 'subtitle', 'content', 'time', 'sort_order', 'createdAt', 'updatedAt', 'publishedAt'],
			populate: {
				img: { fields: ['url', 'name', 'alternativeText'] },
				qr_img: { fields: ['url', 'name', 'alternativeText'] },
			},
		});

		ctx.body = {
			data: notices,
			meta: { total: Array.isArray(notices) ? notices.length : 0 },
		};
	},

	async latest(ctx) {
		const notices = await strapi.entityService.findMany('api::notice.notice', {
			status: 'published',
			sort: [{ time: 'desc' }, { sort_order: 'asc' }, { createdAt: 'desc' }],
			fields: ['title', 'subtitle', 'content', 'time', 'sort_order', 'createdAt', 'updatedAt', 'publishedAt'],
			populate: {
				img: { fields: ['url', 'name', 'alternativeText'] },
				qr_img: { fields: ['url', 'name', 'alternativeText'] },
			},
			limit: 1,
		});

		ctx.body = {
			data: Array.isArray(notices) && notices.length ? notices[0] : null,
		};
	},
}));
