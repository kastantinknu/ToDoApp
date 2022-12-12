//import React, { Component } from 'react';
//import { Button } from 'antd';

//import './App.css';
//import TodoList from './components/TodoList';


//export default class App extends Component {
//    static displayName = App.name;

//    constructor(props) {
//        super(props);
//        this.state = { forecasts: [], loading: true };
//    }

//    componentDidMount() {
//        this.populateWeatherData();
//    }

//    static renderForecastsTable(forecasts) {
//        return (

//            //<TodoList />
//            //<div className="App">

//            <table className='table table-striped' aria-labelledby="tabelLabel">
//                <thead>
//                    <tr>
//                        {/*<th>Date</th>*/}
//                        {/*<th>Temp. (C)</th>*/}
//                        {/*<th>Temp. (F)</th>*/}
//                        {/*<th>Summary</th>*/}
//                        <th>ID</th>
//                        <th>Title</th>
//                        <th>Completed</th>
//                        <th>Button</th>
//                    </tr>
//                </thead>
//                <tbody>
//                    {/*{forecasts.map(forecast =>*/}
//                    {/*    <tr key={forecast.date}>*/}
//                    {/*        <td>{forecast.date}</td>*/}
//                    {/*        <td>{forecast.temperatureC}</td>*/}
//                    {/*        <td>{forecast.temperatureF}</td>*/}
//                    {/*        <td>{forecast.summary}</td>*/}
//                    {/*        <Button type="primary">Button</Button> */}
//                    {/*    </tr>*/}
//                    {/*)}*/}
//                    {forecasts.map(forecast =>
//                        <tr key={forecast.id}>
//                            <td>{forecast.id}</td>
//                            <td>{forecast.title}</td>
//                            <td>{forecast.completed}</td>
//                            <Button type="primary">Button</Button>
//                        </tr>
//                    )}
//                </tbody>
//                </table>
//            //</div>

//        );
//    }

//    render() {
//        let contents = this.state.loading
//            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
//            : App.renderForecastsTable(this.state.forecasts);

//        return (
//            <div>
//                {/*<h1 id="tabelLabel" >111 Weather forecast</h1>*/}
//                <h1 id="tabelLabel" >ToDo List</h1>

//                <p>This component demonstrates fetching data from the server.</p>
//                {contents}
//            </div>
//        );
//    }

//    async populateWeatherData() {
//        //const response = await fetch('weatherforecast');
//        const response = await fetch('todos');
//        const data = await response.json();
//        this.setState({ forecasts: data, loading: false });
//    }
//}



//// import 'antd/dist/reset.css';

//// import logo from './logo.svg';


////function App() {
////    return (
////        <div className="App">
////            <TodoList />

////            {/* <header className="App-header">
////        <img src={logo} className="App-logo" alt="logo" />
////        <p>
////          Edit <code>src/App.js</code> and save to reload.
////        </p>
////        <a
////          className="App-link"
////          href="https://reactjs.org"
////          target="_blank"
////          rel="noopener noreferrer"
////        >
////          Learn React
////        </a>
////      </header> */}
////        </div>
////    );
////}

////export default App;
