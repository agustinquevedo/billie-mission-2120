import React from 'react';
// import route stuff
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Nabarcomponent
import Navbar from './components/Navbar';
// import pages
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import CompaniesPage from './pages/CompaniesPage';

function App() {
    return (
       <Router>
            {/* render a navbar component */}
            <Navbar />
            {/* render routing logic of react-router-dom */}
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/research" component={ResearchPage} />
                <Route path="/companies" component={CompaniesPage} />
            </Switch>
       </Router>
    )
}

export default App;