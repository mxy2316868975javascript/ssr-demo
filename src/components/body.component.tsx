"use client";

import { Col, Progress, Space, Tag, Typography } from "antd";
import { ExperienceCard } from "./experience-card";
import { CONSTANTES } from "../utils";

export const Body = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 items-center h-full max-w-full md:w-[60vw] place-items-center py-10 px-2">
      <Col className="h-full ">
        <div>
          <Typography.Title underline level={3} className="">
            EXPÉRIENCES
          </Typography.Title>

          <Space direction="vertical">
            {CONSTANTES.EXPERIENCES.map((xp, i) => {
              return (
                <ExperienceCard
                  key={i}
                  link={xp.link}
                  // @ts-ignore
                  type={xp.type}
                  date={xp.date}
                  company={xp.company}
                  position={xp.position}
                  descriptionText={xp.descriptionText}
                  competences={xp.competences}
                />
              );
            })}
          </Space>
        </div>
      </Col>
      <Col className="h-full ">
        <div className="">
          {/*  COMPÉTENCES */}
          <Typography.Title underline level={3} className="">
            COMPÉTENCES
          </Typography.Title>
          {CONSTANTES.COMPETENCES.map((c, i) => {
            return (
              <div key={i}>
                <Typography.Text className="">{c.theme}</Typography.Text>
                <div className="flex flex-row flex-wrap items-center justify-center min-w-full gap-1 md:justify-start">
                  {c.competences.map((text: string, index: number) => {
                    return (
                      <Tag
                        key={index}
                        className={`text-4xs text-black bg-white border-[1px] border-solid  border-gainsboro font-bold italic`}
                      >
                        {text}
                      </Tag>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {/* ÉDUCATION */}
        <div className="">
          <Typography.Title underline level={3} className="mt-4 ">
            ÉDUCATION
          </Typography.Title>
          <Space direction="vertical">
            {CONSTANTES.EDUCATION.map((e, i) => {
              return (
                <ExperienceCard
                  key={i}
                  link={e.link}
                  date={e.date}
                  company={e.company as string}
                  position={e.position}
                  descriptionText={e.descriptionText}
                  competences={e.competences}
                />
              );
            })}
          </Space>
        </div>
        <div className="">
          {/* LANGUES */}
          <Typography.Title underline level={3} className="mt-4 ">
            LANGUES
          </Typography.Title>
          <Space direction="horizontal" className="mx-1 mt-2" size={20}>
            {CONSTANTES.LANGUES.map((l, i) => {
              return (
                <Progress
                  size="small"
                  key={i}
                  type="circle"
                  percent={l.percent}
                  strokeColor={{
                    "0%": CONSTANTES.colors.black,
                    "100%": CONSTANTES.colors.black,
                  }}
                  format={() => {
                    return (
                      <Space direction="vertical" size={0} className="">
                        <Typography.Text className="text-black text-left text-[0.5rem]">
                          {l.langue}
                        </Typography.Text>
                      </Space>
                    );
                  }}
                />
              );
            })}
          </Space>
        </div>
        {/* INTÉRÊTS */}
        <div className="md:max-w-[60%]">
          <Typography.Title underline level={3} className="max-w-[60%] mt-4">
            INTÉRÊTS
          </Typography.Title>
          <div className="grid grid-cols-3">
            {CONSTANTES.HOBBIES.map((l, i) => {
              return (
                <Space
                  key={i}
                  direction="vertical"
                  align="center"
                  size={0}
                  className="mx-1 mt-2"
                >
                  <Progress
                    size="small"
                    type="circle"
                    percent={l.percent}
                    strokeColor={{
                      "0%": CONSTANTES.colors.black,
                      "100%": CONSTANTES.colors.black,
                    }}
                    format={() => {
                      return (
                        <Typography.Text className=" text-[2rem]">
                          {l.icon}
                        </Typography.Text>
                      );
                    }}
                  />
                  <Typography.Text className="text-xs text-left text-black">
                    {l.name}
                  </Typography.Text>
                </Space>
              );
            })}
          </div>
        </div>
      </Col>
    </div>
  );
};
