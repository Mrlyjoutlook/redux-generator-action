import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {addOne,addMul,addMulProm,addMulPromArr,addMulPromArrAll,addMulPromArrRace} from '../action/actions';

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
    dispatch(addMulProm())
  }

  handleOnMulPromArrClick = ()=>{
    const {dispatch} = this.props;
    dispatch(addMulPromArr())
  }

  handleOnMulPromArrAllClick = ()=>{
    const {dispatch} = this.props;
    dispatch(addMulPromArrAll())
  }

  handleOnMulPromArrRaceClick = ()=>{
    const {dispatch} = this.props;
    dispatch(addMulPromArrRace())
  }

  render() {

    const {name}=this.props;

    return (
      <div style={{textAlign:'center'}}>
        <h1>Hello MR LYJ,{name}</h1>
        <h2>
          <a onClick={this.handleOnClick}>点击+1</a>
          <p style={{fontSize:14}}>(结果立刻+1)</p>
        </h2>

        <h2>
          <a onClick={this.handleOnMulClick}>点击+1,+2,+3</a>
          <p style={{fontSize:14}}>(由于处理效率一样，结果+6)</p>
        </h2>
        
        <h2>
          <a onClick={this.handleOnMulPromClick}>点击+1,+2,+3</a>
          <p style={{fontSize:14}}>(每隔2秒触发下一个action,结果顺序+1，+2，+3)</p>
        </h2>

        <h2>
          <a onClick={this.handleOnMulPromArrClick}>点击+1,[+1,+2,+3],+3</a>
          <p style={{fontSize:14}}>(每隔2秒触发下一个action,结果顺序+1，+1，+2，+3，+3)</p>
        </h2>

        <h2>
          <a onClick={this.handleOnMulPromArrAllClick}>点击+1,[+1,+2,+3],+3</a><br/>
          <p style={{fontSize:14}}>(每隔2秒触发下一个action,其中[]中是处理时间分别为1，2，3，所以[]处理时间总共3秒，等[]处理完才会处理下个action，结果顺序+1，+1，+2，+3，+2，+3，注意时间！)</p>
        </h2>

        <h2>
          <a onClick={this.handleOnMulPromArrRaceClick}>点击+1,[+1,+2,+3],+3</a>
          <p style={{fontSize:14}}>(每隔2秒触发下一个action,其中[]中是处理时间分别为1，2，3，等[]中第一个处理完才会处理[]外下一个action，结果顺序+1，+1，+2，+6，注意时间！)</p>
        </h2>

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
