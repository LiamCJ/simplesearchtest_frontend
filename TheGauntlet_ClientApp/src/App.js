import React from 'react';
import './App.css';
import Header from './components/header.js';
import { Route, NavLink, HashRouter as Router} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <section>
                    <Header/>
            </section>
        )
    }
}

export default App;
