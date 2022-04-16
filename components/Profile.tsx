import React from "react"
import Title from "./Title"
import SecondarySection from "./SecondarySection"
import {css} from "@emotion/react";
import Header from "./Header";
import Image from "next/image";
import imageIconClosePath from "../assets/images/common/icon-close.svg";

interface AppProps {
  onClickProfile: () => void
}

import imageLogoGithubPath from '../assets/images/common/logo-github.webp';
import imageLogoQiitaPath from '../assets/images/common/logo-qiita.webp';

const App: React.FunctionComponent<AppProps> = ({ onClickProfile }) => {
  const date = new Date();
  const minus1 = date.getMonth() < 7 ? 1 : 0;
  const age = (date.getFullYear() - 1988) + date.getMonth() - minus1;
  const data = [
    {
      title: 'Name',
      body: 'Shogo Arai'
    },
    {
      title: 'Age',
      body: age
    },
    {
      title: 'Sex',
      body: '男性'
    },
    {
      title: 'Live',
      body: '東京'
    },
    {
      title: 'History',
      bodyArr: ['株式会社PIVOT 2019年5月〜現在',
        '株式会社あいぜん 2016年3月～2019年3月',
        '株式会社KAIDO GROUP 2015年8月〜2016年1月',
        '株式会社プロダクトキューブ 所属 2012年7月〜2015年7月',
        '日本デザイナー学院ビジュアルデザイン科 2010年卒業']
    },
    {
      title: 'Skill',
      bodyArr: [
        {
          title: 'HTML',
          body: ['ejs', 'amp', 'pwa', 'wai-area', 'canvas']
        },
        {
          title: 'SPA',
          body: ['Vue', 'React']
        },
        {
          title: 'CSS',
          body: ['scss', 'smacss', 'bem', 'flocss', 'rscss']
        },
        {
          title: 'CMS',
          body: ['WordPress']
        }
      ]
    },
    {
      title: 'Account',
      bodyArr: [
        {
          href: 'https://github.com/AraiShg17?tab=repositories',
          src: imageLogoGithubPath.src,
          width: '80px',
          height: '21px',
          alt: 'Github'
        },
        {
          href: 'https://qiita.com/',
          src: imageLogoQiitaPath.src,
          width: '93px',
          height: '35px',
          alt: 'Qiita'
        }
      ]
    },
  ]
  return (
    <div css={cssProfile}>
      <Header props="white" />
      <SecondarySection>
        <Title tag="h2">Profile</Title>

        <dl css={cssProfileData}>
          { data.map((val) => {
            let body = null;
            let bodyArr = [];
            let addCss = null;
            switch (val.title) {

              case 'History' :
                val.bodyArr.map((valI) => {
                  bodyArr.push(<li key={valI}>{valI}</li>);
                });
                break;

              case 'Skill' :
                val.bodyArr.map((valI) => {
                  const skillDom = [];
                  console.log(valI)
                  skillDom.push(<dt>{valI.title}</dt>);
                  valI.body.map((valJ) => {
                    console.log(valJ)
                    skillDom.push(<dd>{valJ}</dd>);
                  });
                  bodyArr.push(<li><dl>{skillDom}</dl></li>)
                });
                addCss = cssProfileSkill;
                break;

              case 'Account' :
                val.bodyArr.map((valI) => {
                  bodyArr.push(<li key={valI.alt}><a href={valI.href} target="_blank"><Image src={valI.src} width={valI.width} height={valI.height} alt={valI.alt} /></a></li>);
                });
                addCss = cssProfileAccount;
                break;

              default :
                bodyArr.push(<li>{val.body}</li>);
                break;
            }

            return (
              <div key={val.title}>
                <dt>{val.title}</dt>
                  <dd css={addCss}>
                    <ul>
                      {bodyArr}
                    </ul>
                  </dd>
              </div>
            );
          })}
        </dl>

        <button type="button" onClick={onClickProfile} css={cssProfileClose}><Image src={imageIconClosePath.src} width="46" height="46" alt="profileを閉じる"/></button>
      </SecondarySection>
    </div>
  );
}

App.defaultProps = {
  onClickProfile: null
};

// CSS
const cssProfile = css`
  position: fixed;
  top: 0;
  bottom:0;
  left: 0;
  right: 0;
  background-color: #fff;
  color: #000;
  z-index: 10;
  padding: 0 15px;
  font-size: 16px;
  overflow-y: auto;
`;

const cssProfileClose = css`
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: block;
  cursor: pointer;
  transition: all .4s ease;
  border-radius: 100px;
  &:hover {
   transform: translateY(-5px);
  }
`;

const cssProfileData = css`
  margin-top: 87px;
  & > div {
    display: flex;
    flex-flow: row nowrap;
    letter-spacing: 0.4rem;
    border-top: 1px solid #ddd;
    padding: 6px 4px;
    &:last-of-type {
      border-bottom: 1px solid #ddd;
    }
    & > dt {
      flex: 0 0 24%;
      position: relative;
      &::after {
        content: ":";
        position: absolute;
        right: 15px;
        top: 0;
        bottom: 0;
        font-weight: 500;
      }
    }
    & > dd {
      flex: 0 0 76%;
    }
  }
`;
const cssProfileAccount = css`
  > ul{
    display: flex;
    align-items: center;
      > li {
        flex: 0 0 70px;
        margin-inline-end: 10px;
      }
  }
`;
const cssProfileSkill = css`
  > ul{
    > li {
    &:not(:first-of-type) {
      margin-block-start: 1em;
    }
      > dl {
        display: flex;
        flex-flow: row wrap;
          > dt {
            flex: 0 0 100%;
          }
          > dd {
            flex: 0 0 auto;
            &:first-of-type {
              margin-inline-start: 1em;
            }
            &:nth-of-type(n+2) {
              &::before {
                content: "、"
              }
            }
          }
      }
    }
  }
`;

export default App
