import React, { Component } from 'react';
import logo from './logo.svg';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Teamtable from './Teamtable/Teamtable';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'T1',
      teamList: 
    [{"Team" : "T1",
    "POCList" : [
      {
        "id" : 1,
        "desc" : "poc1",
        "link" : "NA",
        "status" : "Pending",
        "remarks" : "NA"
      }
    ]
    },
    {"Team" : "T2",
    "POCList" : [
      {
        "id" : 2,
        "desc" : "poc2",
        "link" : "NA",
        "status" : "Pending",
        "remarks" : "To be added"
      }
    ]
    },
    {"Team" : "T3",
    "POCList" : [
      {
        "id" : 3,
        "desc" : "poc3",
        "link" : "NA",
        "status" : "Pending",
        "remarks" : "Done"
      }
    ]
    },
    {"Team" : "T4",
    "POCList" : [
      {
        "id" : 4,
        "desc" : "poc4",
        "link" : "NA",
        "status" : "Pending",
        "remarks" : "NA"
      }
    ]
    }],
    propTeam : [],
    tableSee : false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    var searchValue = event.target.value;
    var updatedList = [];
    updatedList = this.state.teamList.filter((item) => {
      return Object.keys(item).some(key => item[key].toString().search(searchValue) !== -1);
  });
  // this.state.propTeam.push(updatedList);
  this.setState({propTeam : updatedList[0].POCList})
  this.setState({tableSee: true})
  console.log("searchValue"+searchValue)
  console.log("updatedList"+JSON.stringify(updatedList))
  console.log("propTeam"+JSON.stringify(this.state.propTeam))
  }

  handleSubmit(event) {
    alert('You have selected team: ' + JSON.stringify(this.state.value));
    event.preventDefault();
  }

  componentDidMount() {
    // fetch("http://localhost:26854/api/premiershipteams")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then(data => {
    //     let teamsFromApi = data.map(team => {
    //       return {value: team, display: team}
    //     });
    //     this.setState({
    //       teams: [{value: '', display: '(Select your favourite team)'}].concat(teamsFromApi)
    //     });
    //   }).catch(error => {
    //     console.log(error);
    //   });
  }

   headerArray = ['Id #','Desc','Link','Stat','Rema']

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Project</h1>
        </header>
        <p className="App-intro">
         Please Select the Team...
        </p>
        <div className = "container">
        <form onSubmit={this.handleSubmit}>
         
          <div className = "col-md-3" style={{marginLeft: '25em', marginTop:'3em'}}>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="T1">Team 1</option>
            <option value="T2">Team 2</option>
            <option value="T3">Team 3</option>
            <option value="T4">Team 4</option>
          </select>
        </div>
       
      {/* <div style={{marginTop:'4em'}}> <input type="submit" value="Submit" />
      </div> */}
      {this.state.tableSee ? (<Teamtable data ={this.state.propTeam} header = {this.headerArray}/>):null}
      
      </form>
      </div>
     
      
      </div>
     
    );
  }
}

export default App;
