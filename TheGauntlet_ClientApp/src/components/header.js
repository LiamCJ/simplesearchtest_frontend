import React from 'react';

class Header extends React.Component {
    render() {
        return (
            // The Header
            <section>
                <a href="http://localhost:3000/"><h1 id="title">The Gauntlet {this.props.name}</h1></a>  
            </section>
        )
    }
}

export default Header;