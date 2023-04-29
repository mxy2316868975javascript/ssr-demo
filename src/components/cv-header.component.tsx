import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Row, Space, Typography } from 'antd';
import Image from 'next/image';

export const CvHeader = () => {
  return (
    <div className='grid grid-cols-2 gap-10 items-center min-w-full h-full'>
      {/* avatar & name */}
      <Space
        direction='horizontal'
        align='center'
        className='min-w-full'>
        <Image
          width={120}
          height={120}
          className=' max-w-full  max-h-full object-cover'
          alt=''
          src='/avatar@2x.png'
        />
        <Space
          direction='vertical'
          className=' w-full h-full'>
          <Typography.Title
            level={1}
            className='text-black text-left'>
            OTTO Cyprien
          </Typography.Title>
          <Typography.Title
            level={2}
            className='text-darkblue text-left'>
            Cloud Engineer - DevOps alternant
          </Typography.Title>
          <Typography.Text
            italic
            className='text-dimgray-400 text-left'>
            Rythme: 1 mois en formation - 3 mois en entreprise
          </Typography.Text>
        </Space>
      </Space>

      {/* contact */}
      <Space
        direction='vertical'
        align='end'
        className=' w-full h-full min-w-full'>
        {[
          { text: 'Paris, France', icon: '/address.svg', type: 'address' },
          { text: 'cyprienotto@outlook.fr', icon: '/email.svg', type: 'email' },
          { text: '06.20.32.03.88', icon: '/phone.svg', type: 'phone' },
          {
            text: 'ottodpc',
            link: 'https://www.linkedin.com/in/ottodpc',
            icon: '/phone.svg',
            type: 'in',
          },
          {
            text: 'ottodpc',
            link: 'https://github.com/ottodpc',
            icon: '/phone.svg',
            type: 'gh',
          },
        ].map((contact, i) => {
          const {
            text,
            icon,
            type,
            link,
          }: { text: string; icon: string; type: string; link?: string } =
            contact;
          return (
            <Row
              align={'stretch'}
              key={i}
              justify='center'>
              {link === undefined ? (
                <>
                  <Typography.Text
                    italic
                    className='text-dimgray-400 text-right'>
                    {text}
                  </Typography.Text>
                  <img
                    width={20}
                    height={20}
                    className='ml-2'
                    alt=''
                    src={icon}
                  />
                </>
              ) : (
                <>
                  <a
                    className='text-dimgray-400 text-right hover:text-darkblue'
                    href={link}
                    target='_blank'>
                    <Typography.Text
                      italic
                      className='text-dimgray-400 text-right hover:text-darkblue'>
                      {text}
                    </Typography.Text>
                    {type === 'gh' ? (
                      <GithubOutlined className='ml-2' />
                    ) : (
                      <LinkedinOutlined className='ml-2' />
                    )}
                  </a>
                </>
              )}
            </Row>
          );
        })}
      </Space>
    </div>
  );
};
