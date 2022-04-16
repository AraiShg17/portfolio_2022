import React from "react"
import Link from "next/link";
import { css } from '@emotion/react'

interface AppProps {
  props?: String;
}

const App: React.FunctionComponent<AppProps> = ({ props }) => {
  let className = [cssHeader];
  if(props === 'white') {
    className = [cssHeader,cssHeaderModify]
  }

  return <h1 css={className}>
    <Link href="/">
      <a lang="en">Portfolio</a>
    </Link>
  </h1>;
}

App.defaultProps = {
  props: 'black',
};


// CSS
const cssHeader = css`
  backdrop-filter: blur(2px);
  clip-path: polygon(0 0, 0 100%, 100% 0);
  background: rgba(0, 0, 0, .6) linear-gradient(180deg, rgba(255, 255, 255, 0.27) 0%, rgba(255, 255, 255, 0) 100%);
  height: 151px;
  width: 392px;
  font-size: 24px;
  letter-spacing: 1rem;
  padding: 20px 35px;
  animation: headerIn 1s ease;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  a {
    color: currentColor
  }
`;
const cssHeaderModify = css`
  animation: none;
  background: rgba(255, 255, 255, .6) linear-gradient(180deg, rgba(190, 190, 190, 0.27) 0%, rgba(190, 190, 190, 0) 100%);
  color: #000;
`;

export default App
