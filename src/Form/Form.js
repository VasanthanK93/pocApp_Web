import React, { Component } from 'react';
import Addform from './Addform';
export default class Form extends Component {
    state = {addExtraRow : false}

    addExtraRow = () =>{
        this.setState({addExtraRow: true})
    }
render(){
return(
<div id="Form">
<form onSubmit={this.props.handleFormSubmit}>
    <br/>
<input type="text" name="id" placeholder="Team ID" value={this.props.newId} onChange={this.props.handleInputChange} />
<span>    </span>
<input type="text" name="desc" placeholder="Team Description" value={this.props.newDesc} onChange={this.props.handleInputChange} />
 <span>   </span>
<input type="text" name="link" placeholder="Link" value={this.props.newLink} onChange={this.props.handleInputChange} />
<span>   </span>
{/* <input type="text" name="status" placeholder="Status" value={this.props.newStatus} onChange={this.props.handleInputChange} /> */}
<select value={this.props.newStatus} onChange={this.props.handleDropChange} placeholder="Status">
            <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In progress</option>
              <option value="Completed">Completed</option>
              <option value="Hold">Hold</option>
      </select>
 <span>   </span>
<input type="text" name="remarks" placeholder="Remarks" value={this.props.newRemark} onChange={this.props.handleInputChange} />
<span>   </span>
{/* <button onClick={this.addExtraRow} type="button" className="btn btn-primary text-center"> 
<i className="fa fa-plus-circle" aria-hidden="true"></i>
</button>
{this.state.addExtraRow ? (<Addform />):null}   */}
<br/>
<br/>
<button type="submit" value="Submit">Add Item</button>
</form>
</div>
);
}
}