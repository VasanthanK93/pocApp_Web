import React, { Component } from 'react';
import logo from './logo.svg';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Teamtable from './Teamtable/Teamtable';
import Form from './Form/Form';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      dropValue : '',
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
    items: [],
    id : '',
    desc : '',
    link : '',
    statusFull:['Pending','In Progress','Completed','Hold'],
    status : [],
    remarks : '',
    tableSee : false,
    showForm: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  addNewRow = () => {
     this.setState({showForm: true})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    var searchValue = event.target.value;
    var updatedList = [];
    updatedList = this.state.teamList.filter((item) => {
      return Object.keys(item).some(key => item[key].toString().search(searchValue) !== -1);
  });
  this.setState({propTeam : updatedList[0].POCList})
  this.setState({items : this.state.propTeam})
  this.setState({tableSee: true})
  console.log("items : "+JSON.stringify(this.state.items))
console.log("propTeam : "+JSON.stringify(this.state.propTeam));
  }

   handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.propTeam];
console.log("items : "+items)
console.log("propTeam : "+JSON.stringify(this.state.propTeam));
    items.push({
      id : this.state.id,
    desc : this.state.desc,
    link : this.state.link,
    status : this.state.status,
    remarks : this.state.remarks,
    });
    this.setState({
      propTeam : items,
      id : '',
    desc : '',
    link : '',
    status : [],
    remarks : '',
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  deleteRow = (index) => {
    var propTeam = [...this.state.propTeam];
    propTeam.splice(index, 1);
    this.setState({propTeam});
    console.log("delete"+this.state.propTeam)
  }


  handleDropChange = (event) => {
    console.log(event.target.value)
    this.setState({dropValue: event.target.value});
    var searchValue = event.target.value;
    var updatedList = [];
  {this.state.statusFull.filter(name => name.includes(searchValue)).map(filteredName => (
    updatedList = filteredName
  ))}

  this.setState({ status: updatedList})
  console.log("+++++++"+JSON.stringify(updatedList))
  console.log("+++++++"+JSON.stringify(this.state.status))
  };


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
        <form>
         
          <div className = "col-md-3" style={{marginLeft: '25em', marginTop:'3em'}}>
          <select value={this.state.value} onChange={this.handleChange} placeholder="Select">
          <option value="">Select</option>
            <option value="T1">Team 1</option>
            <option value="T2">Team 2</option>
            <option value="T3">Team 3</option>
            <option value="T4">Team 4</option>
          </select>
        </div>
      {this.state.tableSee ? (<Teamtable data ={this.state.propTeam} items={ this.state.items } deleteRow={this.deleteRow} />):null}  
      {this.state.tableSee ?( <button style = {{marginTop:'3em'}} onClick={this.addNewRow} type="button" className="btn btn-primary text-center"> 
      <i className="fa fa-plus-circle" aria-hidden="true"></i>
      </button>):null}
      {this.state.showForm ? ( <Form handleFormSubmit={ this.handleFormSubmit } 
      handleInputChange={ this.handleInputChange } handleDropChange = {this.handleDropChange}
      newId={ this.state.id }
      newDesc={ this.state.desc } 
      newLink={ this.state.link }
      newStatus={ this.state.status }
      newRemark={ this.state.remarks }/>):null} 
     </form>
      </div>
    </div>
     
    );
  }
}

export default App;
