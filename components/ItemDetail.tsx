import React from "react";
import {css} from "@emotion/react";
import Button from "../components/Button"

interface AppProps {
  onClickItemDetail: () => void
}

const App: React.FunctionComponent<AppProps> = ({ onClickItemDetail }) => {
  return (
    <div>
      <p>詳細</p>
      <button onClick={onClickItemDetail}>閉じる</button>
    </div>
  );
};

App.defaultProps = {
  onClickItemDetail: null
};

const cssItemDetail = css`
  text-align: center;
`;

export default App
