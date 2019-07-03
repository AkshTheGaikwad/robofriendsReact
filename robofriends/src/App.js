import React , { Component } from 'react';
import CardList from './cardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
// import 'babel-polyfill';


class App extends Component
{
    constructor ()
    {
        super()
        this.state =
        {
            robots : robots,
            searchfield : ''
        }
    }

    //on search change event

    onSearchChange =  (event) => {
        this.setState ({ searchfield : event.target.value})
    }
    render ()
    {
        const fileterdRobots = this.state.robots.filter(robots => {
            const filterText = this.state.searchfield.toLowerCase();
           // console.log (filterText);
           // console.log (robots.name.toLowerCase())

            return robots.name.toLowerCase().includes(filterText);
        })
         return (
    <div className ='tc'>
    <h1> Robo Friends </h1>
    < SearchBox  SearchChange={this.onSearchChange}/>
    <CardList robots={fileterdRobots} />
    </div>
);

    }
}

export default App;
