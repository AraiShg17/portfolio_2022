import Head from 'next/head'
import React from "react";

interface AppProps {
}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <Head>
      <title>portfolio</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500&family=Noto+Sans+JP:wght@100;300;400;500&display=swap" rel="stylesheet" />
    </Head>
  );
}

App.defaultProps = {
};

export default App
