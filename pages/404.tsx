import React from "react"
import Title from "../components/Title"
import {css} from "@emotion/react";
import Button from "../components/Button"

interface AppProps {
}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <section css={cssNotFound}>
      <Title tag="h2">Not Found</Title>
      <div css={cssNotFoundButton}>
        <Button href="/">Top</Button>
      </div>
    </section>
  );
}

App.defaultProps = {
};

// CSS
const cssNotFound = css`
  display: flex;
  min-height: 100vh;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;
const cssNotFoundButton = css`
  margin-top: 5vh;
  animation: fade 1s ease;
`;

export default App
