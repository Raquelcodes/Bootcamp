const addQuestionsActionCreator = questions => {
  return {
    type: "ADD_QUESTION",
    payload: questions
  };
};

export const fetchQuestions = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://opentdb.com/api.php?amount=3");
    const data = await response.json();
    const questions = data.results;
    const action = addQuestionsActionCreator(questions);
    dispatch(action);
  };
};
