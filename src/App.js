import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";

class App1 extends Component {
  // 이후 배울 state 기능 및 라이프사이클 기능을 사용할 수 있음
  // 임의 메서드를 정의할 수 있음

  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}

const App2 = () => {
  //컴포넌트를 사용할 때 props 값 지정하기
  return (
    <MyComponent name={"react"} favoriteNumber={1}>
      리액트
    </MyComponent>
  );
};

const App3 = () => {
  return <Say />;
};

const App4 = () => {
  return <EventPractice />;
};

export default App4;
