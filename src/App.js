import React from 'react';
// import route stuff
import { Route } from 'react-router-dom'
// Transitions
import { CSSTransition } from 'react-transition-group';
// import Nabarcomponent
import Navbar from './components/Navbar';
// import pages
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import CompaniesPage from './pages/CompaniesPage';

const routes = [
    { path: "/", name: "home", Component: HomePage},
    { path: "/research", name: "research", Component: ResearchPage},
    { path: "/companies", name: "companies", Component: CompaniesPage}
]


function App() {
    return (
        <div className="App">
            {/* render a navbar component */}
            <Navbar />
            {/* render routing logic of react-router-dom */}
            <div>
            {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames='page'
                unmountOnExit
                >
                  <Component />
               
              </CSSTransition>
            )}
          </Route>
        ))}
            </div>
        </div>
    )
}

export default App;