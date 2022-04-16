import React from "react";
import {css} from "@emotion/react";
import Button from "../components/Button"

interface AppProps {
}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <div css={cssLoading}>
      <ul css={cssLoadingLine}>
        <li></li><li></li><li></li>
        <li></li><li></li><li></li>
        <li></li><li></li><li></li>
        <li></li><li></li><li></li>
        <li></li>
      </ul>

      <div css={cssLoadingCircle}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <h1 css={cssLoadingTitle} lang="en">Portfolio</h1>

      <div css={cssLoadingIcon}></div>

      <div css={cssLoadingButton}>
        <Button href="/works">Works</Button>
      </div>
    </div>
  );
}

App.defaultProps = {
};


// CSS
import imageLightPath01 from '../assets/images/loading/light.webp';
import imageCirclePath01 from '../assets/images/loading/loading-circle01.webp';
import imageCirclePath02 from '../assets/images/loading/loading-circle02.webp';
import imageCirclePath03 from '../assets/images/loading/loading-circle03.webp';
import imageCirclePath04 from '../assets/images/loading/loading-circle04.webp';
import imageCirclePath05 from '../assets/images/loading/loading-circle05.webp';

const cssLoading = css`
  background: url(${imageLightPath01.src}) center bottom 8vh/ 1080px auto no-repeat;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding-bottom: 10vh;
  text-align: center;
`;
const cssLoadingLine = css`
    width: 90%;
    height: 1px;
    display: flex;
    justify-content: space-around;
    & > li {
      height: 1px;
      width: 1px;
      background-color: #fff;
      animation: fade 1s ease alternate infinite both;
      &:nth-of-type(1) {
        animation-delay: .1s;
      }
      &:nth-of-type(2) {
        animation-delay: .8s;
      }
      &:nth-of-type(3) {
        animation-delay: .4s;
      }
      &:nth-of-type(4) {
        animation-delay: .3s;
      }
      &:nth-of-type(5) {
        animation-delay: .22s;
      }
      &:nth-of-type(6) {
        animation-delay: .5s;
      }
      &:nth-of-type(7) {
        animation-delay: .45s;
      }
      &:nth-of-type(8) {
        animation-delay: .11s;
      }
      &:nth-of-type(9) {
        animation-delay: .73s;
      }
      &:nth-of-type(10) {
        animation-delay: .93s;
      }
      &:nth-of-type(11) {
        animation-delay: .37s;
      }
      &:nth-of-type(12) {
        animation-delay: .28s;
      }
      &:nth-of-type(13) {
        animation-delay: .69s;
      }
    }
`;

const cssLoadingCircle = css`
  margin-top: 10vh;
  width: 218px;
  height: 218px;
  position: relative;
  > div {
    background: center / 218px auto no-repeat;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    transform-origin: center;
    &:not(:nth-of-type(5)) {
      animation: rotateZ 1s linear infinite;
    }
    &:nth-of-type(1) {
      animation-duration: 98s;
      background-image: url(${imageCirclePath01.src});
    }
    &:nth-of-type(2) {
      animation-duration: 32s;
      background-image: url(${imageCirclePath02.src});
    }
    &:nth-of-type(3) {
      animation-duration: 57s;
      background-image: url(${imageCirclePath03.src});
    }
    &:nth-of-type(4) {
      animation-duration: 78s;
      background-image: url(${imageCirclePath04.src});
    }
    &:nth-of-type(5) {
      animation-duration: 66s;
      background-image: url(${imageCirclePath05.src});
    }
  }
`;
const cssLoadingTitle = css`
  margin-top: 10vh;
  font-size: 32px;
`;
const cssLoadingIcon = css`
  margin-top: 1vh;
  width: 6px;
  height: 6px;
  border: 1px solid #fff;
  border-radius: 10px;
  position: relative;
  animation: rotateY 1s linear infinite;
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 10px;
    background: #fff;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  &::before{
    left: -20px;
    animation: slideL 2s cubic-bezier(.8,0,0,.8) infinite;
  }
  &::after{
    right: -20px;
    animation: slideR 2s cubic-bezier(.8,0,0,.8) infinite;
  }
`;
const cssLoadingButton = css`
  margin-top: 8vh;
`;

export default App
