//import React, { Component } from 'react';
//import { Button } from 'antd';

//import './App.css';
//import TodoList from './components/TodoList';


//export default class App extends Component {
//    static displayName = App.name;

//    constructor(props) {
//        super(props);
//        this.state = { todos: [], loading: true };
//    }

    //componentDidMount() {
    //    this.populateTodosData();
    //}



//    static renderForecastsTable(todos) {
//        return (


//            <table className='table table-striped' aria-labelledby="tabelLabel">
//                <thead>
//                    <tr>
//                        <th>ID</th>
//                        <th>Title</th>
//                        <th>Completed</th>
//                        <th>Button</th>
//                    </tr>
//                </thead>
//                <tbody>
//                    {todos.map(todos =>
//                        <tr key={todos.id}>
//                            <td>{todos.id}</td>
//                            <td>{todos.title}</td>
//                            <td>{todos.completed}</td>
//                            <Button type="primary">Button</Button>
//                        </tr>
//                    )}
//                </tbody>
//                </table>
//        );
//    }

//    render() {
//        let contents = this.state.loading
//            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
//            : App.renderForecastsTable(this.state.todos);

//        return (
//            <div>
//                <h1 id="tabelLabel" >ToDo List</h1>

//                <p>This component demonstrates fetching data from the server.</p>
//                {contents}
//            </div>
//        );
//    }

//    async populateTodosData() {
//        //const response = await fetch('weatherforecast');
//        const response = await fetch('mytodos');
//        const data = await response.json();
//        this.setState({ todos: data, loading: false });
//    }
//}



//import React from 'react';
//import { Button } from 'antd';
//import 'antd/dist/reset.css';

 import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="App">
            <TodoList/>
            {/*<Button type="primary">Button</Button>*/}
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        </div>
    );
}

export default App;