import React from "react";
import {css} from "@emotion/react";


interface AppProps {
  tag?: React.ElementType,
  children: string
}

const App: React.FunctionComponent<AppProps> = ({ tag: CustomTag = 'p', children }) => {
  return (
    <CustomTag css={cssTitle} lang="en">
      { children }
    </CustomTag>
  );
};

App.defaultProps = {
  children: 'Title'
};

// CSS
const cssTitle = css`
  font-size: 32px;
  letter-spacing: 1rem;
  text-align: center;
  animation: titleIn 1s ease;
`;

export default App
