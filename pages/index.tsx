import React, { useState, useEffect } from "react"
import Loading from "../components/Loading"

interface AppProps {
  props?: String;
}

const App: React.FunctionComponent<AppProps> = ({ props }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // useStateの更新の仕方
    setCount(count + 1)
    console.log('読み込み時');
    return () => {
      console.log('破棄時');
    }
  },[])

  return (
    <section>
      <Loading />
      {props} - {count}
    </section>
  );
};

App.defaultProps = {
  props: null,
};

export default App
