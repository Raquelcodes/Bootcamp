import styled from "styled-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: purple;
`;
const Score = styled.div`
  display: flex;
  justify-content: center;
  background-color: purple;
  color: white;
`;

class Question extends Component {
  render() {
    // const nextPath = `/question/${parseInt(this.props.match.params.order, 10) +
    //   1}`; //finish this
    const nextPath = "/question/";
    return (
      <div>
        <Title> Question</Title>
        <div>{this.props.questions}</div>
        <div>
          <input type="radio" />
        </div>
        <Link to={nextPath}> Next Question</Link>
        <br />
        <Score>Your score:</Score>
      </div>
    );
  }
}

const mapStateToProps = (state, propsSoFar) => {
  console.log("in mapstate", state);
  console.log(propsSoFar);
  //const order = propsSoFar.match.params.order;

  // const question = Object.values(state.questions).filter(
  //   question => question.order === parseInt(propsSoFar.match.params.order, 10)
  // )[0];
  // const answers = question.incorrect_answers.map(answer => ({
  //   content: answer,
  //   isCorrect: false
  // }));
  // answers.push({
  //   content: question.correct_answer,
  //   isCorrect: true
  // });

  return {
    questions: state.questions[0].question //,
    // answers: state.questions[0].answers
  };
};
export default connect(mapStateToProps)(Question);
