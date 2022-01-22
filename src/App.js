import React, {Component} from 'react';
import logo from './logo.svg';
import GetListings from './components/Listings/GetListings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="text-center">
          <img src={logo} alt="Sneaky Sasquatch" className="max-h-40 mx-auto mb-2" />
        </div>
        <h1 className="text-3xl mb-4 text-center font-bold">Sneaky Sasquatch</h1>
        <GetListings />
      </div>
    );
  }
}

export default App;
