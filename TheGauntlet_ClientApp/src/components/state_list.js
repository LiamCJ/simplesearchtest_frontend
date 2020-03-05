import React from 'react';

class State_List extends React.Component {
    constructor() {
        super();
 		this.state = {
      		 displayMenu: false,
     	};

	};

	showDropdownMenu = (event) => {
	    event.preventDefault();
	    this.setState({ displayMenu: true }, () => {
	    document.addEventListener('click', this.hideDropdownMenu);
	    });
  	}

  	hideDropdownMenu = () =>{
	    this.setState({ displayMenu: false }, () => {
	      document.removeEventListener('click', this.hideDropdownMenu);
	    });

  	}

  	dropdown = () =>{
  		var coll = document.getElementsByClassName("collapsible");
		var i;

		for (i = 0; i < coll.length; i++) {
		  coll[i].addEventListener("click", function() {
		    this.classList.toggle("active");
		    var content = this.nextElementSibling;
		    if (content.style.display === "block") {
		      content.style.display = "none";
		    } else {
		      content.style.display = "block";
		    }
		  });
		}
  	}

  render() {
  	
  		var coll = document.getElementsByClassName("collapsible");
		var i;

		for (i = 0; i < coll.length; i++) {
		  coll[i].addEventListener("click", function() {
		    this.classList.toggle("active");
		    var content = this.nextElementSibling;
		    if (content.style.display === "block") {
		      content.style.display = "none";
		    } else {
		      content.style.display = "block";
		    }
		  });
		}

    return (
        <div  className="dropdown" style = {{background:"red",width:"200px"}} >
         <button className="button collapsible" > My Setting </button>

	          {/* { this.state.displayMenu ? ( */}
		          <ul>
			         <li><a className="active" href="#Create Page">Create Page</a></li>
			         <li><a href="#Manage Pages">Manage Pages</a></li>
			         <li><a href="#Create Ads">Create Ads</a></li>
			         <li><a href="#Manage Ads">Manage Ads</a></li>
			         <li><a href="#Activity Logs">Activity Logs</a></li>
			         <li><a href="#Setting">Setting</a></li>
			         <li><a href="#Log Out">Log Out</a></li>
		          </ul>
	        {/* 	): */}
	        {/* ( */}
	        {/*   null */}
	        {/* ) */}
	        {/* } */}

       </div>

    );
  }
}

export default State_List;