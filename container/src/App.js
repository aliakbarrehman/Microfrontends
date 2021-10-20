import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import './App.scss';
import MicroFrontendWrapper from './MicroFrontendWrapper';

const FrontendA = lazy(() => import('frontendA/App'));
const FrontendB = lazy(() => import('frontendB/App'));

const App = () => {
    return(
        <>
        <Router>
          <div>
            <nav className={"navigation"}>
              <Link to="/">Home</Link>
              <Link to="/norway">Norway</Link>
              <Link to="/pakistan">Pakistan</Link>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <div className={"content"}>
                <Route exact path="/norway">
                  <MicroFrontendWrapper>
                    <Suspense fallback='Failed to Load'>
                      <FrontendA />
                    </Suspense>
                  </MicroFrontendWrapper>
                </Route>
                <Route exact path="/pakistan">
                  <MicroFrontendWrapper>
                    <Suspense fallback='Failed to Load'>
                      <FrontendB />
                    </Suspense>
                  </MicroFrontendWrapper>
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </div>
            </Switch>
          </div>
        </Router>
        </>
    )
};

export default App;