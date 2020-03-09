import React from 'react';
import {withRouter, Redirect} from 'react-router-dom';

const callStates = async () =>{
    const searchTest = await fetch(`http://localhost:4895/api/v1/state`);
    const result  = await searchTest.json();
     try {
        var allStates = result.data.states; 
        return allStates;
    }
    // if the (result) is not loaded the following will occur
    catch (err) {
        console.log(err); // the error will be displayed in the console
    }
}

class StateList extends React.Component {
        constructor() {
        super();
        this.state = {
            stateData: {},
            statesList :[],
            redirect : false
       }
     }

     getStates = () =>{
        return callStates().then((states) => {
            // statesList = states
            // this.setState({statesList : states})
            states.map((object, index) => {
                this.setState({ 
                  statesList: [...this.state.statesList, object]
                })
            })

        })
        .catch((err) => {
            return err;
        });
    }

    handleSubmit = (stateName, stateUrl) =>{;
        this.setState({ stateData:{name: stateName, url: stateUrl}, redirect: true } );

    }


    render() {
        this.getStates();
// this.handleSubmit(stateInfo.name, stateInfo.url)
        if(this.state.redirect == true){
            return(
                <Redirect to= {{ pathname: 'StatePage', state: { name: this.state.stateData.name, url: this.state.stateData.url } }} />
            )
        }

        return (
            <React.Fragment>
                <div className ='wrapper' >
                   <ul className ='accordion_list'>
                    {this.state.statesList.map((stateInfo, index) =>{
                        return(
                            <li className = 'accordion_item_line' key={index} onClick={this.getStates()} >
                               {stateInfo.name} 
                            </li>        
                        )
                    })}
                   </ul>
                </div>
            </React.Fragment>    
        )
    }
}


export default withRouter(StateList);