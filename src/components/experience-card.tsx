import { Col, Row, Space, Tag, Typography } from 'antd';
import { CONSTANTES } from '../utils';

export const ExperienceCard = ({
  date,
  type,
  company,
  position,
  descriptionText,
  competences,
  link,
}: {
  position: string;
  date: string;
  company: string;
  link?: string;
  type?:
    | 'Stage'
    | 'Alternance'
    | 'CDI'
    | 'CDD'
    | 'Freelance'
    | 'Auto-entrepreneur'
    | 'Intérim'
    | 'Indenpendant'
    | 'Bénévolat';
  competences?: string[];
  descriptionText?: string[];
}) => {
  return (
    <div className='grid max-w-[100%] md:max-w-[80%]'>
      <Space direction='vertical'>
        <Typography.Text
          italic
          className='  text-dimgray-100'>
          {date}
        </Typography.Text>
        <Typography.Text className=' font-bold text-darkblue'>
          {position}
        </Typography.Text>
        <Row
          align='middle'
          justify={'space-between'}>
          {link ? (
            <a
              href={link}
              className='hover:text-darkblue hover:font-bold'
              target='_blank'>
              <Typography.Text
                italic
                className=' text-black'>
                {company}
              </Typography.Text>
            </a>
          ) : (
            <Typography.Text
              italic
              className=' text-black'>
              {company}
            </Typography.Text>
          )}
          {type && (
            <Tag
              color={CONSTANTES.colors.gainsboro}
              bordered={true}
              className={`rounded-3xl text-dimgray-300 bg-white border-[1px] border-solid  border-gainsboro`}>
              {type}
            </Tag>
          )}
        </Row>
        <Space
          direction='vertical'
          size={0}
          className='my-1'>
          {descriptionText &&
            descriptionText.map((text, i) => {
              return (
                <Typography.Text
                  key={i}
                  italic
                  className=' text-dimgray-200'>
                  - {text}
                </Typography.Text>
              );
            })}
        </Space>
      </Space>
      {/* items-center justify-center md:justify-start */}
      <div className='grid grid-cols-3 gap-1 items-center max-w-[100%] place-self-center'>
        {competences &&
          competences.map((text, i) => {
            return (
              <div
                className=''
                key={i}>
                <Tag
                  color={CONSTANTES.colors.black}
                  className={`rounded-3xl text-4xs text-center `}>
                  {text}
                </Tag>
              </div>
            );
          })}
      </div>
    </div>
  );
};
