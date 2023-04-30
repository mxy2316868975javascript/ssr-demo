import type { NextPage } from 'next';
import { Body, CvHeader } from '../components';
import { Space } from 'antd';

const Index: NextPage = () => {
  return (
    <div className='bg-white grid items-center max-w-[95vw] min-w-[90vw] h-full'>
      <Space
        direction={'vertical'}
        align='center'
        size={40}
        className='bg-white w-full h-full '>
        <CvHeader />
        <Body />
      </Space>
    </div>
  );
};

export default Index;
