import * as React from 'react';
import './Teamtable.css';
import Form from '../Form/Form';

export default class Teamtable extends React.Component {

    EmptyRowsView = () => {
       console.log("indide....")
      const message = "No data to show";
      return (
        <div style={{ textAlign: "center", padding: "100px" }} >   
          <h3>{message}</h3>
        </div>
      );
    };

render(){  
  console.log("delete_table"+this.props.data)
        return (
            
            <div style = {{marginTop:'5em'}}>
            <table id='team'>           
            <thead>
            <tr>
            <th>Team #</th>
            <th>Team Description</th>
            <th>Link</th>
            <th>Status</th>
            <th>Remarks</th>
            <th>Remove</th>
            </tr>
            </thead>        

            <tbody>      
            {this.props.data.length > 0 ? this.props.data.map((team) => {

           return (
              <tr key={team.id}>
                 <td>{team.id}</td>
                 <td>{team.desc}</td>
                 <td>{team.link}</td>
                 <td>{team.status}</td>
                 <td>{team.remarks}</td>
                 <td>
              <span className="table-remove"><button type="button" onClick={this.props.deleteRow}
                  className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
            </td>
              </tr>)}):null}
               </tbody>
            </table>
         </div>
      );
    
  }
}