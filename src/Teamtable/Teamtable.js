import * as React from 'react';
import './Teamtable.css';
import Form from '../Form/Form';

export default class Teamtable extends React.Component {

render(){
  let tableBody = null
  if(this.props.data.length === 1){ 
    
    tableBody =this.props.data[0].pocList.map((team) => {

    return (
       <tr key={team.id}>
          <td>{team.id}</td>
          <td>{team.pocDesc}</td>
          <td>{team.wikiLink}</td>
          <td>{team.status}</td>
          <td>{team.remarks}</td>
          <td>
       <span className="table-remove"><button type="button" onClick={this.props.deleteRow}
           className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
     </td>
       </tr>)})}
       else if(this.props.data.length > 1){

         tableBody = this.props.data.map((team) => {
             return team.pocList.map((poc)=>{
               return (
                 <tr key={poc.id}>
                    <td>{poc.id}</td>
                    <td>{poc.pocDesc}</td>
                    <td>{poc.wikiLink}</td>
                    <td>{poc.status}</td>
                    <td>{poc.remarks}</td>
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