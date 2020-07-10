import React,{ Component } from 'react';

import {CardList} from './cmponents/card-list/card-list.component';

import './App.css';

import {SearchBox} from './cmponents/search-box/search-box.component'


class App extends Component {
  constructor(){
    super();
    this.state = { 
      monsters: [],
      searchField:''

    };  
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(user=>this.setState({monsters:user}));
  }

  handleChange= (e) =>{
    this.setState({ searchField: e.target.value })
  }

render(){
  const {monsters,searchField} =this.state;
  const filteredMonsters = monsters.filter(monster=>
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

  return(
    <div className = 'App'>
    <h1>Monsters Rolodex</h1>
    <SearchBox
    placeholder='monsters name'
    handleChange= {this.handleChange}
    />
    <CardList monsters ={filteredMonsters}/> 
    
         </div>
 )
}
}
export default App


 