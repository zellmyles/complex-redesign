import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      'list': []
    }
  }

  // Fetch the list on first mount
  componentDidMount = () => {
    axios.get("/api/getBillboard").then(response => {
      const persons = response.data.content;
      console.log(persons);
      this.setState({ persons });
    })
  }

  // Retrieves the list of items from the Express app


  render() {


    return (
      <div className="App">
        <h1>The Hot 100</h1>
        <ul>
        <div>{JSON.stringify(this.state.persons)}</div>
        
      </ul>
       </div>
    );
  }
}

export default List;