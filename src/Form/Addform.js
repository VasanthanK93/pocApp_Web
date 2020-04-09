import React, { Component } from 'react';
export default class Form extends Component {
render(){
return(
<div id="Form">
<form>
    <br/>
<input type="text" name="id" placeholder="Team ID" value={this.props.newId} onChange={this.props.handleInputChange} />
<span> </span>
<input type="text" name="desc" placeholder="Team Description" value={this.props.newDesc} onChange={this.props.handleInputChange} />
<span>   </span>
<input type="text" name="link" placeholder="Link" value={this.props.newLink} onChange={this.props.handleInputChange} />
<span>   </span>
<input type="text" name="status" placeholder="Status" value={this.props.newStatus} onChange={this.props.handleInputChange} />
 <span>   </span>
<input type="text" name="remarks" placeholder="Remarks" value={this.props.newRemark} onChange={this.props.handleInputChange} />
<span>   </span>
<br/>
<br/>
</form>
</div>
);
}
}