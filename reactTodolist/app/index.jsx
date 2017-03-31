import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search';
import Plist from './components/plist'

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			"data":[],
			"dataShow":[],
			"keyword":"aaaa"
		};
		this.refreshKeyword=this.refreshKeyword.bind(this);
	}
	refreshKeyword(name){
		var data = this.state.data;
		data.push(name);
		this.setState({
			"data":data,
			"dataShow":[]
		},function(){	
		});
	}
	handleInput(input){
		let data = this.state.data;
		let dataShow = [];
		if(input!==""){
			for(var i=0;i<data.length;i++){
				if(data[i].indexOf(input)>-1){
					dataShow.push(data[i]);
				}
			}
		}
		this.setState({
			"dataShow":dataShow
		});

	}
	deletetodo(item){
		let data = this.state.data;
		let dataShow = this.state.dataShow;
		data = data.filter(function(idata) {
		  return idata !== item;
		});
		dataShow = dataShow.filter(function(sdata){
			return sdata!==item;
		});
		this.setState({
			"data":data,
			"dataShow":dataShow
		});
	}
	render(){
		return(
			<div className="container">
				<Search sendAction={this.refreshKeyword} 
				sendInput={this.handleInput.bind(this)} />
				<Plist listdata={this.state.dataShow} 
				deletetodo={this.deletetodo.bind(this)} />
			</div>
		)
	}
} 

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);