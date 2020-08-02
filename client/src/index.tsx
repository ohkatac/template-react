import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React ts with Parcel World</h1>
      </div>
    );
  }  
}

ReactDOM.render(<App />, document.getElementById('app'));