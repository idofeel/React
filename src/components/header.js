import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    // 父组件传入的参数 props
    console.log(props);
    // react 特性 >> state属性改变会发生重新渲染
    this.state = {
      name: props.name
    };
  }
  addAge() {
    // 通过setState方法进行改变数据
    this.setState({
      name: this.state.name + 3
    });
  }
  sendParent(){
      this.props.callback(this.state.name);
  }
  render() {
    return (
      <div>
        <h1 onClick={()=>{this.sendParent()}}>Header</h1>
        <span onClick={this.addAge.bind(this)}>{this.state.name}</span>
      </div>
    );
  }
}
