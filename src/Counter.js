import React, { Component } from "react";

//클래스형 컴포넌트의 state
class Counter extends Component {
  //state를 constructor에서 꺼내기
  //constructor를 사용하지 않고 state 초깃값 설정 가능
  state = {
    number: 0,
    fixedNumber: 0,
  };

  /*
    constructor(props) {
    super(props);
    //state의 초깃값 설정하기
    //state 객체 안에 여러 값이 있을 때
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }*/

  render() {
    const { number, fixedNumber } = this.state; //state 를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            // this.setState를 사용하여, 새로운 값을 넣을 수 있습니다.
            // 인자로 전달된 객체 안에 들어 있는 값만 바꾸어 준다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
