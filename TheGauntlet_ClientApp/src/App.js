import React from 'react';
import './App.css';
import Landing from './components/index';
import StatePage from './components/state_page';
import { Route, BrowserRouter as Router} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* A Browser Router containing two routes */}
                    <Router>
                        {/* Route for the Landing page */}
                        <Route exact path="/" component={Landing} />
                        {/* Route for the State Pages */}
                        <Route path="/:StateId" component={StatePage} />
                    </Router>   
            </React.Fragment>
        )
    }
}

export default App;
