import React from 'react';
import Header from './header.js';
import StateList from './state_list';

class Landing extends React.Component {

render(){
		return (
			 <section>
                <Header name="" />
                <StateList/> 
            </section>
		)
	}
}

export default Landing;