import styled from "styled-components";
import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchQuestions } from "./store/fetchQuestions";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: purple;
`;

class Home extends Component {
  componentDidMount = async () => {
    // const response = await fetch("https://opentdb.com/api.php?amount=10");
    // const data = await response.json();
    // const questions = data.results;
    // console.log("in fetch", questions);
    // const action = {
    //   type: "ADD_QUESTION", payload: questions },
    // this.props.dispatch(action);
    this.props.addQuestions();
  };

  render() {
    return (
      <div>
        <Title>Welcome to Trivial Game</Title>
        <Link to="/question/">Start</Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addQuestions: () => {
      dispatch(fetchQuestions());
    }
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(Home);
