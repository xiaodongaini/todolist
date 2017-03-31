import React from 'react';
import ReactDOM from 'react-dom';
export default class Search extends React.Component{
	constructor(props){
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
	}
	handleSearch(e){
		let name = ReactDOM.findDOMNode(this.refs.name).value;
		if(e.keyCode==13){
			if(name==''){
				return;
			}
			this.props.sendAction(name);
			ReactDOM.findDOMNode(this.refs.name).value="";
		}

	}
	handleInput(){
		let value = ReactDOM.findDOMNode(this.refs.name).value;
		this.props.sendInput(value);
	}
	render(){
		return(
			<div>
				<input type="text" ref="name" onInput={this.handleInput.bind(this)} 
				onKeyUp={this.handleSearch.bind(this)}/>
			</div>
			)
	}
}