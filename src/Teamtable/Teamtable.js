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
  let tableBody = null
  if(this.props.data.length === 1){ 
    
    tableBody =this.props.data[0].POCList.map((team) => {

    return (
       <tr key={team.id}>
          <td>{team.id}</td>
          <td>{team.POCDesc}</td>
          <td>{team.WikiLink}</td>
          <td>{team.status}</td>
          <td>{team.Remarks}</td>
          <td>
       <span className="table-remove"><button type="button" onClick={this.props.deleteRow}
           className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
     </td>
       </tr>)})}
       else if(this.props.data.length > 1){

         tableBody = this.props.data.map((team) => {
             return team.POCList.map((poc)=>{
               return (
                 <tr key={poc.id}>
                    <td>{poc.id}</td>
                    <td>{poc.POCDesc}</td>
                    <td>{poc.WikiLink}</td>
                    <td>{poc.status}</td>
                    <td>{poc.Remarks}</td>
                    <td>
                 <span className="table-remove"><button type="button" onClick={this.props.deleteRow}
                     className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
               </td>
                 </tr>)
             })
           })}  
        return (
            
            <div style = {{marginTop:'5em'}}>
            <table id='team'>           
            <thead>
            <tr>
            <th>POC ID</th>
            <th>POC Description</th>
            <th>Wiki Link</th>
            <th>Status</th>
            <th>Remarks</th>
            <th>Remove</th>
            </tr>
            </thead>        

            <tbody>      
           {tableBody}
               </tbody>
            </table>
         </div>
      )
                }
              }