import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { robots } from '../robot';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      robots: robots,
      searchTerm: ''
    }
  }


  onSearchChange = (event) => {
    const searchQuery = event.target.value
    this.setState({
      searchTerm: searchQuery
    })
  }

  render(){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchTerm)
    })
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBar searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }

}

export default App;
