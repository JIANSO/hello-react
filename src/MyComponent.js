import React, { Component } from "react";
import PropTypes from "prop-types";
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

const MyComponent2 = ({ name, favoriteNumber, children }) => {
  // const { name, children } = props; //ES6의 비구조화 할당 문법, 내부값 바로 추출 가능
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다. <br />
      children 값은 {children} 입니다. <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

//클래스형 컴포넌트에서 props 사용하기
class MyComponent extends Component {
  static defaultProps = {
    name: "기본이름",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화할당

    return (
      <div>
        안녕하세요, 제 이름은 {name} 입니다. <br />
        children 값은 {children} 입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

/*
MyComponent.defaultProps = {
  name: "기본 이름2",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
*/
export default MyComponent;
