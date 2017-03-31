import React from 'react';
import ReactDOM from 'react-dom';
export default class Pitem extends React.Component{
	constructor(props){
		super(props);
		this.state={"list":[]}
	}
	handleDelete(){
		this.props.deletetodo(this.props.itemdata);
	}
	render(){
		var item = this.props.itemdata;
		return(
			<li>
				{item}
				<span onClick={this.handleDelete.bind(this)}>X</span>
			</li>
		)
	}
}