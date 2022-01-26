import React, {Component} from 'react';
import Logo from './components/Logo';
import GetListings from './components/Listings/GetListings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <h1 className="text-3xl mb-4 text-center font-bold">Sneaky Sasquatch</h1>
        <GetListings />
      </div>
    );
  }
}

export default App;
