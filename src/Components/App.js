import React,{Component} from "react";



import CardList from '../Containers/CardList';
import SearchBar from '../Containers/SearchBar';
import './App.css';
import Scroll from "../Containers/Scroll";

//import {robots} from '../robots';

class App extends Component{

  constructor(){
    super();
    this.state={
      robots:[],
      searchfield:''
    }
  }

  ///fetching the data from the JSONPlaceholder rather than from the js file that is located in this project
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json()).then(data=>{this.setState({robots:data})})
  
  }
  
  //search field for filtering the cards by name

    searchChange =(event)=>{
      console.log(event);
      this.setState({searchfield : event.target.value});
    }

  
  
  
  render()
    {
      // array destructuring
      const { robots, searchfield } = this.state;
     
      const filtered_robots = robots.filter(
               robot=>  {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase());
               }
      );
      return(!robots.length ?
        <h1>Loading</h1> :    <div className="App">
            <h1>RoboFriends</h1>
            <SearchBar searchChange={this.searchChange}/>
            
               <CardList robots ={filtered_robots}/>

           
            </div>
          
          
          );
     
    }
      
  

   
 
}

export default App;