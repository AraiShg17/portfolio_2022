import React, { useState, useEffect } from "react"
import {css} from "@emotion/react";
import Image from "next/image";
import Item from "../components/Item"
import Title from "../components/Title"
import SecondarySection from "../components/SecondarySection"
import Profile from "../components/Profile"
import ItemDetail from "../components/ItemDetail"
import { CSSTransition } from 'react-transition-group';

import imageIconProfilePath from '../assets/images/common/icon-profile.svg';

interface AppProps {
}

import imageItemPath0101Sp from '../assets/images/works/image-work01-01-sp.webp';
import imageItemPath0101 from '../assets/images/works/image-work01-01.webp';
import imageItemPath0102Sp from '../assets/images/works/image-work01-02-sp.webp';
import imageItemPath0102 from '../assets/images/works/image-work01-02.webp';
import imageItemPath0103Sp from '../assets/images/works/image-work01-03-sp.webp';
import imageItemPath0103 from '../assets/images/works/image-work01-03.webp';
import imageItemPath0104Sp from '../assets/images/works/image-work01-04-sp.webp';
import imageItemPath0104 from '../assets/images/works/image-work01-04.webp';
import imageItemPath0201Sp from '../assets/images/works/image-work02-01-sp.webp';
import imageItemPath0201 from '../assets/images/works/image-work02-01.webp';
import imageItemPath0202Sp from '../assets/images/works/image-work02-02-sp.webp';
import imageItemPath0202 from '../assets/images/works/image-work02-02.webp';
import imageItemPath0203Sp from '../assets/images/works/image-work02-03-sp.webp';
import imageItemPath0203 from '../assets/images/works/image-work02-03.webp';
import imageItemPath0301 from '../assets/images/works/image-work03-01.webp';
import imageItemPath0302 from '../assets/images/works/image-work03-02.webp';
import imageItemPath0303 from '../assets/images/works/image-work03-03.webp';
import imageItemPath0304 from '../assets/images/works/image-work03-04.webp';
import imageItemPath0401 from '../assets/images/works/image-work04-01.webp';
import imageItemPath0402 from '../assets/images/works/image-work04-02.webp';
import imageItemPath0403 from '../assets/images/works/image-work04-03.webp';
import imageItemPath0404 from '../assets/images/works/image-work04-04.webp';
import imageItemPath0405 from '../assets/images/works/image-work04-05.webp';
import imageItemPath0406 from '../assets/images/works/image-work04-06.webp';
import imageItemPath0407 from '../assets/images/works/image-work04-07.webp';
import imageItemPath0501 from '../assets/images/works/image-work05-01.webp';
import imageItemPath0502 from '../assets/images/works/image-work05-02.webp';
import imageItemPath0503 from '../assets/images/works/image-work05-03.webp';
import imageItemPath0601Sp from '../assets/images/works/image-work06-01-sp.webp';
import imageItemPath0601 from '../assets/images/works/image-work06-01.webp';
import imageItemPath0602Sp from '../assets/images/works/image-work06-02-sp.webp';
import imageItemPath0602 from '../assets/images/works/image-work06-02.webp';
import imageItemPath0603Sp from '../assets/images/works/image-work06-03-sp.webp';
import imageItemPath0603 from '../assets/images/works/image-work06-03.webp';
import imageItemPath0701Sp from '../assets/images/works/image-work07-01-sp.webp';
import imageItemPath0701 from '../assets/images/works/image-work07-01.webp';
import imageItemPath0702Sp from '../assets/images/works/image-work07-02-sp.webp';
import imageItemPath0702 from '../assets/images/works/image-work07-02.webp';
import imageItemPath0703Sp from '../assets/images/works/image-work07-03-sp.webp';
import imageItemPath0703 from '../assets/images/works/image-work07-03.webp';
import imageItemPath0704Sp from '../assets/images/works/image-work07-04-sp.webp';
import imageItemPath0704 from '../assets/images/works/image-work07-04.webp';
import imageItemPath0705Sp from '../assets/images/works/image-work07-05-sp.webp';
import imageItemPath0705 from '../assets/images/works/image-work07-05.webp';
import imageItemPath0801Sp from '../assets/images/works/image-work08-01-sp.webp';
import imageItemPath0801 from '../assets/images/works/image-work08-01.webp';
import imageItemPath0802Sp from '../assets/images/works/image-work08-02-sp.webp';
import imageItemPath0802 from '../assets/images/works/image-work08-02.webp';
import imageItemPath0803Sp from '../assets/images/works/image-work08-03-sp.webp';
import imageItemPath0803 from '../assets/images/works/image-work08-03.webp';
import imageItemPath0804Sp from '../assets/images/works/image-work08-04-sp.webp';
import imageItemPath0804 from '../assets/images/works/image-work08-04.webp';

const App: React.FunctionComponent<AppProps> = () => {
  const [profileModal, setProfileModal] = useState(false);
  const [itemDetailModal, setItemDetailModal] = useState(false);
  const data = [
    {
      id: 0,
      name: 'estre',
      date: '2021/10/01',
      href: 'https://estre.jp/?cartid=&key=&userid=',
      src: [
        {
          pc: imageItemPath0101,
          sp: imageItemPath0101Sp
        },
        {
          pc: imageItemPath0102,
          sp: imageItemPath0102Sp
        },
        {
          pc: imageItemPath0103,
          sp: imageItemPath0103Sp
        },
        {
          pc: imageItemPath0104,
          sp: imageItemPath0104Sp
        }
      ]
    },
    {
      id: 1,
      name: '算数推理事件簿',
      date: '2021/12/01 ',
      href: 'https://sgaku.benesse.ne.jp/sho/all/study/tmath/#/',
      src: [
        {
          pc: imageItemPath0201,
          sp: imageItemPath0201Sp
        }
      ]
    },
    {
      id: 2,
      name: 'miraiseed',
      date: '2020/03/01',
      href: null,
      src: [
        {
          pc: imageItemPath0301
        }
      ]
    },
    {
      id: 3,
      name: 'コドモクリエイター',
      date: '2019/10/01 ',
      href: null,
      src: [
        {
          pc: imageItemPath0401
        }
      ]
    },
  ];

  function onClickProfile() {
    setProfileModal(!profileModal)
  }
  function onClickItemDetail() {
    setItemDetailModal(!itemDetailModal)
  }

  return (
    <SecondarySection>
      <Title tag="h2">Works</Title>
      <ul css={cssItems}>
        { data.map((val) => {
          return (
            <li key={val.id} css={cssItemsList}>
              <Item onClickItemDetail={onClickItemDetail} name={val.name} date={val.date} href={val.href} src={val.src[0].pc.src} />
            </li>
          );
        })}
      </ul>

      <button type="button" onClick={onClickProfile} css={cssItemsProfile}><Image src={imageIconProfilePath.src} width="46" height="46" alt="profileを見る"/></button>

      <CSSTransition
        classNames="modal"
        in={profileModal}
        timeout={700}
        unmountOnExit>
        <Profile onClickProfile={onClickProfile} />
      </CSSTransition>


      <CSSTransition
        classNames="modal"
        in={itemDetailModal}
        timeout={700}
        unmountOnExit>
        <ItemDetail onClickItemDetail={onClickItemDetail} />
      </CSSTransition>

    </SecondarySection>
  );
}

App.defaultProps = {
};

// CSS
const cssItems = css`
  display: flex;
  flex-flow: row wrap;
  margin: 76px -16px -21px;
`;
const cssItemsList = css`
  flex: 0 0 33.33%;
  padding: 24px 16px 21px;
  animation: itemsIn 1s ease 1s both;
  transform-origin: center;
  @media all and (max-width: 768px) {
    flex-basis: 50%
  }
  @media all and (max-width: 375px) {
    flex-basis: 100%
  }
  &:nth-of-type(1) {animation-delay: 0.1s;}
  &:nth-of-type(2) {animation-delay: 0.2s;}
  &:nth-of-type(3) {animation-delay: 0.3s;}
  &:nth-of-type(4) {animation-delay: 0.4s;}
  &:nth-of-type(5) {animation-delay: 0.5s;}
  &:nth-of-type(6) {animation-delay: 0.6s;}
  &:nth-of-type(7) {animation-delay: 0.7s;}
  &:nth-of-type(8) {animation-delay: 0.8s;}
  &:nth-of-type(9) {animation-delay: 0.9s;}
`;
const cssItemsProfile = css`
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

export default App
