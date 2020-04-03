import * as React from 'react';
import './Teamtable.css';

export default class Teamtable extends React.Component {

render(){  
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
              </tr>)}):null}
               </tbody>
            </table>
         </div>
      );
    
  }
}