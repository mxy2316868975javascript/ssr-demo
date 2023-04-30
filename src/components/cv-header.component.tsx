import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Row, Space, Typography } from 'antd';
import Image from 'next/image';
import { CONSTANTES } from '../utils';

export const CvHeader = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-32 items-center md:w-full h-full py-10 px-2'>
      {/* AVATAR &  */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-[100%]'>
        <Image
          width={100}
          height={100}
          className='object-cover md:self-center place-self-center md:place-self-end'
          alt=''
          src={CONSTANTES.FILES_SRC.avatar}
        />
        <Space
          direction='vertical'
          className='w-full h-full self-center place-self-start'>
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
      </div>

      {/* CONTACT */}
      <div className='place-self-center'>
        <Space
          direction='vertical'
          className='w-full h-full items-center md:items-end'>
          {[
            {
              text: 'Paris, France',
              icon: CONSTANTES.FILES_SRC.address,
              type: 'address',
            },
            {
              text: 'cyprienotto@outlook.fr',
              icon: CONSTANTES.FILES_SRC.email,
              type: 'email',
              link: 'mailto:cyprienotto@outlook.fr',
            },
            {
              text: '06.20.32.03.88',
              icon: CONSTANTES.FILES_SRC.phone,
              type: 'phone',
              link: 'tel:+33620320388',
            },
            {
              text: 'Profil Linkedin',
              link: 'https://www.linkedin.com/in/ottodpc',
              type: 'in',
            },
            {
              text: 'Github',
              link: 'https://github.com/ottodpc',
              type: 'gh',
            },
          ].map((contact, i) => {
            const { text, icon, type, link } = contact;
            return (
              <Row
                align='middle'
                key={i}>
                {link === undefined ? (
                  <>
                    <Typography.Text
                      italic
                      className='text-dimgray-400 text-left md:text-right'>
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
                  <a
                    className='text-black hover:text-darkblue'
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'>
                    {' '}
                    <Typography.Text
                      italic
                      className='text-dimgray-400 text-left md:text-right hover:text-darkblue'>
                      {text}{' '}
                    </Typography.Text>
                    {icon ? (
                      <img
                        width={20}
                        height={20}
                        className='ml-2'
                        alt=''
                        src={icon}
                      />
                    ) : type === 'gh' ? (
                      <GithubOutlined
                        color={CONSTANTES.colors.black}
                        className='ml-2'
                      />
                    ) : (
                      <LinkedinOutlined className='ml-2' />
                    )}
                  </a>
                )}
              </Row>
            );
          })}
        </Space>
      </div>
    </div>
  );
};
