import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    };
  }

  render() {
    return (
      <div>
        <output>Klinięcia: {this.state.clicks}</output>
        <button onClick={this.increment.bind(this)}>Kliknij</button>
      </div>
    );
  }

  increment() {
    console.log("was", this.state.clicks);
    this.setState({
      clicks: this.state.clicks + 1
    }, () => {
      console.log("is", this.state.clicks)
    });
  }
}

/*
class App extends React.Component {
  render() {
    return <button onClick={this.onClickHandler}>Kliknij  Myszką!</button>;
  }
  onClickHandler() {
    alert("Kliknięto!");
  }
}
*/

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => alert('Kliknięto!')}>Kliknij!</button>
      </header>
    </div>
  );
}
*/

export default App;
