import React, {Component}from 'react';
import './App.css';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pattern: '',
      listOfSongs: []
    }
  }

onSearchChange = (event) => {
  this.setState({ pattern: event.target.value });
}
onButtonSubmit = () => {
  //https://cors-anywhere.herokuapp.com/
  fetch(`http://www.songsterr.com/a/ra/songs.json?pattern=${this.state.pattern}`, {
    method: 'get',
  })
    .then(response => response.json())
    .then(songs => this.setState({ listOfSongs: songs }))
    .catch(err => console.log(err))
    console.log(this.state.listOfSongs.length)
}

  render() {
    return(
      <div className='tc'>
        <SearchBox searchChange={this.onSearchChange} buttonSubmit={this.onButtonSubmit}/>
      </div>
    );
  }
}

export default App;
