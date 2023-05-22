import type { NextPage } from 'next';
import { Body, CvHeader } from '../components';
import { QRCode, Space, Typography } from 'antd';
import { CONSTANTES } from '../utils';

const Index: NextPage = () => {
  return (
    <div className='bg-white grid items-center max-w-[95vw] min-w-[90vw] h-full'>
      <Space
        direction={'vertical'}
        align='center'
        size={40}
        className='bg-white w-full h-full '>
        <CvHeader />
        {/* QR CODE */}
        <Space
          direction='vertical'
          align='center'
          size={0}>
          <Typography.Text
            italic
            className='text-dimgray-400 text-left md:text-right'>
            CV web site:
          </Typography.Text>
          <QRCode
            style={{
              margin: 0,
            }}
            value={CONSTANTES.githubPage}
            size={85}
          />
        </Space>
        <Body />
      </Space>
    </div>
  );
};

export default Index;
