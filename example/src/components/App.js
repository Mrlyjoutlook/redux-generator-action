import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {addOne,addMul} from '../action/actions';

class App extends Component {

  static propTypes = {
    name : PropTypes.number.isRequired
  }

  state = {
    age : 23
  }

  handleOnClick = ()=>{
    const {dispatch} = this.props;
    dispatch(addOne())
  }

  handleOnMulClick = ()=>{
    const {dispatch} = this.props;
    dispatch(addMul());
  }

  handleOnMulPromClick = ()=>{
    const {dispatch} = this.props;
  }

  render() {

    const {name}=this.props;

    return (
      <div>
        <h1>Hello MR LYJ,{name}</h1>
        <a onClick={this.handleOnClick}>点击+1</a><br/>
        <a onClick={this.handleOnMulClick}>点击+1,+2,+3</a>
        <a onClick={this.handleOnMulPromClick}>点击+1,+2,+3(每隔2秒)</a>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    name : state.name
  }
}

export default connect(mapStateToProps)(App);
