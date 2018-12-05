import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// 引入组件
import Header from "./components/header";
import Footer from "./components/footer";

class App extends Component {
  // 向子组件传入一个回调函数，通过参数的方式返回子组件传回来的数据
  fromChild(age){
    alert(age)
  }
  render() {
    return (
      <div className="App">
        <Header parent={this} age={1}  callback={this.fromChild}/>
        <header className="App-header">
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
        </header>
        <Footer parent={this} name={'脚部'}/>
      </div>
    );
  }
}

export default App;
