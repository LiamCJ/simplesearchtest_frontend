import React from 'react';
import './App.css';
import Landing from './components/index';
import StatePage from './components/state_page';
import { Route, HashRouter as Router} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <Router>
                        <Route exact path="/" component={Landing} />
                        <Route path="/StatePage" component={StatePage} />
                    </Router>   
            </React.Fragment>
        )
    }
}

export default App;
