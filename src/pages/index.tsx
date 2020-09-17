import React from 'react';
import { useModel } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';

const Page = () => {
  const { message, update } = useModel<any>('index')
  return (
    <PageContainer tabList={[{ key: 1, tab: '1' }, { key: 2, tab: '2' }]} onTabChange={() => update()} >
      {message.message}
    </PageContainer >
  )
};

export default Page;