import React from "react";
import {css} from "@emotion/react";

interface AppProps {
  children: any,
}

const App: React.FunctionComponent<AppProps> = ({ children }) => {
  return (
    <section css={cssSection}>
      { children }
    </section>
  );
}

App.defaultProps = {
  children: null
};

//CSS
// CSS
const cssSection = css`
  padding: 80px 0;
  max-width: 1024px;
  margin: 0 auto;
`;

export default App
