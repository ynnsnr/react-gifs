import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'xT9IgDEI1iZyb2wqo8'
    }
  }

  search = (query) => {
    var giphy = require('giphy-api')();
    // Search with options using callback
    giphy.search({
        q: query,
        rating: 'g',
        limit: 10
    }, (err, res) => {
        // Res contains gif data!
        this.setState({
          gifs: res.data
        });
    });
  }

  selectGif = (id) => {
      this.setState({
        selectedGifId: id
      });
    }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    )
  }
}

export default App;
