import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::inquiry.inquiry', ({ strapi }) => ({
  async create(ctx) {
    const response = await super.create(ctx);
    const { name, phone, email, message } = response.data || {};

    const webhookUrl = process.env.DINGTALK_WEBHOOK_URL;
    if (webhookUrl) {
      const text = `📩 新咨询\n姓名：${name}\n电话：${phone}\n邮箱：${email || '-'}\n留言：${message || '-'}`;
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ msgtype: 'text', text: { content: text } }),
      }).catch((err) => strapi.log.error('钉钉通知发送失败', err));
    }

    return response;
  },
}));
