import React , { Component } from 'react';
import CardList from '../Components/cardList';
// import { robots } from './robots';
import SearchBox from '../Components/SearchBox';
import './App.css'
import Scroll from '../Components/scroll'
// import 'babel-polyfill';


class App extends Component
{
    constructor ()
    {
        super()
        this.state =
        {
            robots : [],
            searchfield : ''
        }
    }

    //on search change event
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users =>  this.setState({robots:users}));

    }

    onSearchChange =  (event) => {
        this.setState ({ searchfield : event.target.value})
    }
    render ()
    {
        const fileteredRobots = this.state.robots.filter(robots => {
            const filterText = this.state.searchfield.toLowerCase();
           // console.log (filterText);
           // console.log (robots.name.toLowerCase())

            return robots.name.toLowerCase().includes(filterText);
        })
        if(this.state.robots.length ===0)
        {
            return <h1>Loading</h1>

         }
         else
         {
            return (

                 <div className="tc">
    <h1>RoboFriends</h1>
    < SearchBox  SearchChange={this.onSearchChange}/>
    <Scroll>
    <CardList robots={fileteredRobots} />
     </Scroll>
    </div>

);
        }


    }
}

export default App;
