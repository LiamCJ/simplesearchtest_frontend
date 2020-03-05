import React from 'react';
import Landing from './index';
import State_Page from './state_page';
import { Route, NavLink, HashRouter as Router} from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <section>
                    <Router>
                        <NavLink activeClassName="active" to="/"><h1>The Guantlet</h1></NavLink><br/>
                        <article id="nav"><NavLink className="hov" id="navL" activeClassName="active" to="/">Home</NavLink></article>
                        <article id="nav"><NavLink className="hov" id="navL" activeClassName="active" to="/State_Page">State Display</NavLink></article>
                            <Route exact path="/" component={Landing} />
                            <Route path="/State_Page" component={State_Page} />
                    </Router>   
            </section>
        )
    }
}

export default Header;