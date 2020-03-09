import React from 'react';
import Header from './header.js';

class StatePage extends React.Component {

render(){
		return (
			<React.Fragment>
				<Header name={">" + this.props.location.state.name}/>
				 <iframe title="wikipedia" src={this.props.location.state.url} height="800px" width="800px"></iframe> 
			</React.Fragment>
		)
	}
}

export default StatePage;