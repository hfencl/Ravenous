import React from 'react';
import './App.css';
import logo from './logo.svg';

import BusinessList from './Components/BusinessList/BusinessList';
import Yelp from './util/Yelp';
import SearchBar from './Components/SearchBar/SearchBar';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses:[],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    //console.log(`${term}, ${location}, and ${sortBy}`);
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses });
    });
  }

  render() {
    return (
     <div className="App">
     <h1>ravenous</h1>
     <SearchBar searchYelp={this.searchYelp} />
     <BusinessList businesses={this.state.businesses} /> 
  </div>
   );
  }
}

export default App;
