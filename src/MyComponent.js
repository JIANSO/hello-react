import React from "react";

/*
const MyComponent = (props) => {
  return (
    <div>
      안녕하세요. 제 이름은 {props.name} 입니다.
      <br />
      children의 값은
      {props.children} 입니다.
    </div>
  );
};


*/

const MyComponent = (props) => {
  const { name, children } = props; //ES6의 비구조화 할당 문법, 내부값 바로 추출 가능
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다. <br />
      children 값은 {children} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름2",
};

export default MyComponent;
