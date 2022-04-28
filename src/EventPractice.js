import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }

  render() {
    //state 에 input 값 담기
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          /*
          onChange={(e) => {
            //console.log(e.target.value);
            this.setState({
              message: e.target.value,
            });
          }}
        */
          onChange={this.handleChange}
        />

        <button
          /*
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: "",
            });
          }}
          */
          onClick={this.handleClick}
        >
          확인
        </button>
      </div>
    );
  }
}

//임의 메서드 만들기. 함수를 미리 만들어서 전달하는 방법이 있다.

export default EventPractice;
