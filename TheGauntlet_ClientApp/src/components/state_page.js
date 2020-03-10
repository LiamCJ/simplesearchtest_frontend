import React from 'react';
import Header from './header.js';
import Spinner from 'react-spinkit';
import returnIcon from '../images/back.png'

class StatePage extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      loading: true
	    };
    }
    // hiding the spinner once the iframe has done loading
	hideSpinner = () => {
	    this.setState({
	      loading: false
	    });
    };

	render(){
		let stateId = this.props.location.state.id; // geting the state id 
		let paramasId = this.props.match.params.stateId; //sendin the id to the route
		return (
			<React.Fragment>
				{/* displaying the Header with the prop being the states name */}
				<Header name={"> " + this.props.location.state.name}/>
				{/* hyperlink tag containing an image that returns to the landing page */}
				<a href="http://localhost:3000/" ><img alt="Back_To_Home" title ="Back To Home" id="returnIcon" src={returnIcon}/></a>
		        {/* If the react state 'loading' is true the spinner will be displayed and when it is false nothing will be displayed */}
		        {this.state.loading ? (
		          <Spinner className="loading react-spinner" name="circle" color="white" fadeIn="none" />
		        ) : null}
		        {/* an iframe to display the wikipedia page of the state */}
		        <iframe
		          title="wikipedia" src={this.props.location.state.url} height="800px" width="800px"
		          onLoad={this.hideSpinner}
		          frameBorder="0"
		          marginHeight="0"
		          marginWidth="0"
		        />
				
			</React.Fragment>
		)
	}
}

export default StatePage;