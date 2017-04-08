import React, { Component } from 'react';
import './App.css';
import TodoList  from './TodoList'
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text: ''};
  }

  componentDidMount() {
    this.getData();
  }

  getData(){
    axios.get('http://localhost:7654/')
    .then((response) => {
      this.setState({items: response.data})
      console.log(response)
    })
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:7654/', {arrData: this.state.text})
    .then(() => this.getData());
  }

  render() {
    return (
      <div className="App">
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default App;
