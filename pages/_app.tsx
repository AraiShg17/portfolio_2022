import Wrapper from '../components/Wrapper'
import '../styles/style.scss'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import React from "react";

interface AppProps {
  Component: any,
  pageProps: object,
  router: any
}

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps, router }) => {
  console.log(router)
  return (
    <SwitchTransition mode='out-in'>
      <CSSTransition key={router.pathname} classNames="page" timeout={300}>
        <Wrapper routerPathName={router.pathname}>
          <Component {...pageProps} />
        </Wrapper>
      </CSSTransition>
    </SwitchTransition>
  );
}

App.defaultProps = {
};

export default App
