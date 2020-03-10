import React from 'react';
import {Redirect} from 'react-router-dom';
import displayIcon from '../images/display.png'

var arrayOfStates = [];

// An async function call the API and returning the Array of States
const getStates = async () =>{
    const searchTest = await fetch(`http://localhost:4895/api/v1/state`);
    const result  = await searchTest.json();
     try {
        // storing the data called from the api in a variable and returning it
        var arrayOfAllStates = result.data.states; 
        // mapping through 'arrayOfAllStates' and pushing each of its items into 'arrayOfStates' making it accessible to the react component 'StatesList'
        arrayOfAllStates.map((object, index) => {
            arrayOfStates.push(object);
        })

        return arrayOfAllStates;
    }
    // if the (result) is not loaded the following will occur
    catch (err) {
        console.log(err); // the error will be displayed in the console
    }
}

// running getStates
getStates();

class StateList extends React.Component {
        constructor() {
        super();
        this.state = {
            stateData: {},
            statesList : [],
            redirect : false
       }
     }

     // setting the data that is sent the state_page component and setting whether the page needs to be redirected
     handleSubmit = (stateId, stateName, stateUrl) =>{;
        this.setState({ stateData:{id:stateId, name: stateName, wikiUrl: stateUrl}, redirect: true } );
    }

    render() {
        // path ID for the route
        let pathId = this.state.stateData.id;
        // if the state 'redirect' is true, the page will be redirected to the State Page and passing the ID, Name and URL of the State
        if(this.state.redirect){
            return(
                <Redirect to= {{ pathname: pathId, state: {id: this.state.stateData.id, name: this.state.stateData.name, url: this.state.stateData.wikiUrl } }} />
            )
        }

        return (
            <React.Fragment>
                {/* when this image is clicked on, all the states will be displayed by giving the value of the react state 'statesList' of arrayOfStates */}
                <img alt="Display_All_States" title="Display All States" id="displayIcon" onClick={() => { this.setState({statesList: arrayOfStates}) }} src = {displayIcon} />
                <div><h4 id="displayIconText" >Display States</h4></div>
                <div className ='wrapper' >
                    {/* The Unordered List of All The States */}
                   <ul className ='accordion_list'>
                        {/* Mapping throught the react state 'statesList' to make a list item of each state that when clicked on passes its respective data to the function 'handleSubmit' */}
                        {this.state.statesList.map((stateInfo, index) =>{
                            return(
                                <li className = 'accordion_item_line' key={index} onClick ={() => {this.handleSubmit(stateInfo._id ,stateInfo.name, stateInfo.wikipediaUrl)}} >
                                   {stateInfo.name}<p id="arrow" > ★ </p>
                                </li>        
                            )
                        })} 
                   </ul>
                </div>
            </React.Fragment>    
        )
    }
}


export default StateList;