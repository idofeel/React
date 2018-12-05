import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      age: props.age
    };
  }
  addAge() {
    // react 特性 >> state属性改变会发生重新渲染
    // 通过setState方法进行改变数据
    this.setState({
      age: this.state.age + 3
    });
  }

  sendParent(){
      this.props.callback(this.state.age);
  }
  
  render() {
    return (
      <div>
        <h1 onClick={()=>{this.sendParent()}}>Header</h1>
        <span onClick={this.addAge.bind(this)}>{this.state.age}</span>
      </div>
    );
  }
}
