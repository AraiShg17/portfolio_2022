import React from "react";
import Head from './Head'
import Header from "./Header"
import {css} from "@emotion/react";

interface AppProps {
  children?: any,
  routerPathName: string
}

const App: React.FunctionComponent<AppProps> = ({ children, routerPathName }) => {
  return (
    <div css={cssWrapper}>
      <Head />
      { routerPathName !== '/' ? <Header /> : null }
      { children }
    </div>
  );
}

App.defaultProps = {
  children: null,
  routerPathName: '/'
};

//CSS

const cssWrapper = css`
  background: radial-gradient(rgba(156,167,183,.21) 0%, rgba(0,0,0, 1) 90%) center no-repeat;
  min-height: 100vh;
  padding: 0 15px;
`;

export default App
