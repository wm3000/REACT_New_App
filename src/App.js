import React from 'react';
import './App.css';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

const renderLineChart = (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dateVisible: true };
  }

  onButtonClick() {
    this.setState(state => ({ dateVisible: !state.dateVisible }));
  }

  render() {
    return (
      <div>        
        <button onClick={this.onButtonClick.bind(this)}>Kliknij</button>
        {this.state.dateVisible && <DateComponent />} 
        <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>  
      </div>
    );
  }
}

class DateComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerId = window.setInterval(this.updateDate.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  updateDate() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const dateStr = this.state.date.toString();
    return <time>{dateStr}</time>;
  }
}
/*
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
*/
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
