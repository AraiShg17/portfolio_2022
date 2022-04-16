import React from "react";
import Link from 'next/link';
import {css} from "@emotion/react";

interface AppProps {
  href?: string,
  children: any,
  isButton?: boolean,
  isBlank?: boolean,
  isSquare?: boolean
}

const App: React.FunctionComponent<AppProps> = ({ href, children, isBlank, isButton,isSquare }) => {
  let className = [cssButton];
  if(isSquare) {
    className = [cssButton,cssButtonSquare]
  }
  let buttonDom = <Link href={href}>
            <a css={className} target="_self">{ children }</a>
          </Link>;
  if(isButton) {
    buttonDom = <button type="button" css={className}>{ children }</button>;
  } else if( isBlank ) {
    buttonDom = <a href={href} css={className} target="_blank">{ children }</a>;
  }
  return (
    buttonDom
  );
}

App.defaultProps = {
  href: '#',
  children: 'Button',
  isButton: false,
  isBlank: false,
  isSquare: false
};


// CSS
const cssButton = css`
  color: #fff;
  display: block;
  cursor: pointer;
  font-size: 12px;
  letter-spacing: 0.2rem;
  border: 1px solid rgba(255,255,255, .1);
  border-radius: 50px;
  padding: 6px 12px;
  width: 100%;
  line-height: 1.4;
  min-width: 120px;
  background: rgba(255,255,255,.1) linear-gradient(200deg, rgba(0,0,0,0) 40%, rgba(36,140,148,.3) 51%, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 100%) right 0 top 0 / 300px 300px no-repeat;
  transition: all .4s ease;
  box-shadow: 0 0 20px rgba(36,140,148, 0);
  text-align: center;
  &:hover {
    background-color: rgba(255,255,255,0);
    background-position: right -150px top -150px;
    box-shadow: 0 0 20px rgba(36,140,148, .5);
    border: 1px solid rgba(36,140,148, .3);
    opacity: 1;
    color: #fff;
  }
`;
const cssButtonSquare = css`
  border-radius: 0;
  min-width: 0;
`;

export default App
