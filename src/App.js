import React, {Component}from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import TableOfSongs from './components/tableOfSongs';
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

onSearchChange = (event) => {
  this.setState({ pattern: event.target.value });
}
onButtonSubmit = () => {
  //https://cors-anywhere.herokuapp.com/
  const element = document.getElementById("tabs");
  fetch(`http://www.songsterr.com/a/ra/songs.json?pattern=${this.state.pattern}`, {
    method: 'get'
  })
    .then(response => response.json())
    .then(songs => this.setState({ listOfSongs: songs }))
    .catch(err => console.log(err))
    this.setState({ typeOfTab: element.options[element.selectedIndex].value});
    console.log("log: ", this.state.typeOfTab);
}

onSelectChange = (event) => {
  //this.setState({ typeOfTab: event.target.value });
}

  render() {
    const { listOfSongs, typeOfTab } = this.state;
    return (
      <div className='tc'>
        <SearchBox onSearchChange={this.onSearchChange} onButtonSubmit={this.onButtonSubmit} onSelectChange={this.onSelectChange}/>
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
