import logo from "./logo.svg";
import "./App2.css";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

function App2() {
  // if문 대신 조건부 연산자
  const name = "react";
  return <div>{name === "react" && <h1>react!</h1>}</div>;
}

function App3() {
  // undefined 를 렌더링하지 않기

  const name = undefined;

  return <div>{name || "undefined"}</div>;
  //return name || 'undefined';
}

function App4() {
  // 인라인 스타일링
  // 요소에 스타일을 적용할 때는 객체 형태로 적용, 스타일 이름은 카멜 표기법으로 작성

  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
  };

  return <div style={style}>{name}</div>;
}

function App5() {
  // class 대신 className
  const name = "react";
  return <div className="react">{name}</div>;
}

function App6() {
  //꼭 닫아야 하는 태그
  const name = "react";
  return (
    <>
      <div className="react">{name}</div>
      <input />
    </>
  );
}

function App7() {
  //주석
  const name = "react";
  return (
    <>
      {/* 주석은 이렇게 작성합니다 */}
      <div className="react">{name}</div>
      // 그대로 나타나는 주석
    </>
  );
}

export default App7;
