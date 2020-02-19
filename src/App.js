import React, {Component}from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import TableOfSongs from './components/TableOfSongs';
import Scroll from './components/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pattern: '',
      typeOfTab: '',
      listOfSongs: []
    }
  }

  /**
   * Keeps track of changes made by the user in the input field.
   */
onSearchChange = (event) => {
  this.setState({ pattern: event.target.value });
}

/**
 * When the user clicks the 'Search' button, this function fetches a .json object with the list of songs and properties. It also sets
 * state for the tab type that the user has chosen.
 */
onButtonSubmit = () => {
  //https://cors-anywhere.herokuapp.com/
  const element = document.getElementById("tabs");
  fetch(`https://www.songsterr.com/a/ra/songs.json?pattern=${this.state.pattern}`, {
    method: 'get'
  })
    .then(response => response.json())
    .then(songs => this.setState({ listOfSongs: songs }))
    .catch(err => console.log(err))
    this.setState({ typeOfTab: element.options[element.selectedIndex].value});
}

  render() {
    const { listOfSongs, typeOfTab } = this.state;
    return (
      <div className='tc'>
        <SearchBox onSearchChange={this.onSearchChange} onButtonSubmit={this.onButtonSubmit}/>
        { !listOfSongs.length == 0 ?
          <Scroll>
            <TableOfSongs songs={listOfSongs} tab={typeOfTab}/>
          </Scroll>
          : <div></div>
        }
      </div>
    );
  }
}

export default App;
