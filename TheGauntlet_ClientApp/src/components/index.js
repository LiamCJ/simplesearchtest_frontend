import React from 'react';
import Header from './header.js';
import StateList from './state_list';

class Landing extends React.Component {

render(){
		return (
			// The Ladning Page Component Containing The Header and State List
			 <section>
                <Header name="" />
                <StateList/> 
            </section>
		)
	}
}

export default Landing;