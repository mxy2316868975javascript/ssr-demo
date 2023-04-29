import type { NextPage } from 'next';
import { CvHeader } from '../components';
import { Space } from 'antd';

const Index: NextPage = () => {
  return (
    <div className='bg-white grid items-center max-w-[100vw] min-w-[90vw] h-full'>
      <Space
        direction={'vertical'}
        align='center'
        size={40}
        className='bg-white min-w-full max-h-full p-6'>
        <CvHeader />
      </Space>
    </div>
  );
};

export default Index;
