import React from 'react';
import ReactDOM from 'react-dom';
import Pitem from './pitem'
export default class Plist extends React.Component{
	constructor(props){
		super(props);
		this.state={"list":[]}
	}
	componentWillReceiveProps(nextProps){
		var list = nextProps.listdata;
		this.setState({
			"list":list
		});
	}
	render(){
		return(
			<div className="row">
				<ul>
				{this.state.list.map((item,index)=>{
					return (
						<Pitem key={index} itemdata={item} 
						deletetodo={this.props.deletetodo} />
					)
				})}
				</ul>
			</div>
		)
	}
}