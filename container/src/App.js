import React, { Suspense, lazy } from 'react';
import MicroFrontendWrapper from './MicroFrontendWrapper';

const FrontendA = lazy(() => import('frontendA/App'));
const FrontendB = lazy(() => import('frontendB/App'));

const App = () => {
    return(
        <>
          <Suspense fallback='Failed to Load'>
            <FrontendA />
          </Suspense>
          <MicroFrontendWrapper>
            <Suspense fallback='Failed to Load'>
              <FrontendB />
            </Suspense>
          </MicroFrontendWrapper>
        </>
    )
};

export default App;