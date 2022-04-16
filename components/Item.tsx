import React from "react";
import {css} from "@emotion/react";
import Button from "../components/Button"
import iconPathZoom from '../assets/images/common/icon-zoom.svg';
import iconPathBlank from '../assets/images/common/icon-blank.svg';

interface AppProps {
  name: string,
  date: string,
  href: string,
  src: string,
  onClickItemDetail: () => void
}

const App: React.FunctionComponent<AppProps> = ({ name,src,href,date,onClickItemDetail }) => {
  return (
    <div css={cssItem}>
      <div css={cssItemMain}>
        <div css={cssItemMainImage}><img src={src} alt="" /></div>
        <div css={cssItemMainButton} onClick={onClickItemDetail}>
          <Button isButton={true} isSquare={true}>
            <img src={iconPathZoom.src} alt="詳細を開く"/>
          </Button>
        </div>
        {
          href ?
          <div css={cssItemMainLink}>
            <Button href={href} isBlank={true} isSquare={true}>
              <img src={iconPathBlank.src} alt="新規ウィンドウで開く"/>
            </Button>
          </div> :
          ''
        }
      </div>
      <p css={cssItemName}>{name}</p>
    </div>
  );
};

App.defaultProps = {
  name: 'title',
  date: '0000/00/00',
  href: '#',
  src: null,
  onClickItemDetail: null
};

const cssItem = css`
  text-align: center;
`;
const cssItemMain = css`
  display: flex;
  flex-flow: row wrap;
`;
const cssItemMainImage = css`
  background: rgba(255,255,255,.1);
  border: 1px solid rgba(255,255,255, .1);
  position: relative;
  border-bottom-width: 0;
  padding-top: 50%;
  overflow: hidden;
  flex: 0 0 100%;
  img {
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    max-height: none;
  }
`;
const cssItemMainButton = css`
  flex: 0 0 50%;
  &:last-child {
    flex-grow: 1;
  }
`;
const cssItemMainLink = css`
  flex: 0 0 50%;
`;
const cssItemName = css`
  margin-top: 10px;
  font-size: 12px;
  letter-spacing: 0.4rem;
`;


export default App
