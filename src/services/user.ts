import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
  if (process.env.NODE_ENV === 'production') {
    return Promise.resolve({
      name: 'luotao',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      email: 'luotaoyeah@gmail.com',
      signature: '海纳百川',
      title: '专家',
      group: '技术部',
      tags: [],
      notifyCount: 9,
      unreadCount: 9,
      country: '中国',
      geographic: {
        province: {
          label: '四川省',
          key: '330000',
        },
        city: {
          label: '成都市',
          key: '330100',
        },
      },
      address: '西湖区',
      phone: '028-88888888',
    });
  }

  return request('/api/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
