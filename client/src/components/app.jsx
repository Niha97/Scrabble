import React, { useState } from "react";
// import useLoading from "./hooks/use-loading";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as scrabbleActions from "../store/scrabble/scrabble.actions";

export const App = ({ words, getWords }) => {
  const [input, setInput] = useState("");
  // const { loading, error, setError, callBack } = useLoading();
  window.console.log(input);
  const submit = (e) => {
    window.console.log(e);
    e.preventDefault();
    // if (!input.length) {
    //   setError("Please enter the code");
    // } else {
    //   callBack(() => getWords(input));
    // }
    window.console.log("hello");
    getWords(input);
  };

  const list = words.map((word) => {
    return <li>{word}</li>;
  });

  return (
    <section className="container">
      <div className="heading">
        <img
          className="heading__img"
          alt="someImage"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"
        />
        <h1 className="heading__title">Scrabble</h1>
      </div>
      <form className="form">
        <div>
          <label className="form__label">
            ~ I want to test ~
          </label>
          <input
            className="form__input"
            value={input}
            type="text"
            id="todo"
            name="to-do"
            size="30"
            onChange={(e) => setInput(e.target.value)}
            required
          />
          {/* {error && <div className="error-block">{error}</div>} */}
          <button className="button" onClick={submit}>
            <span>Submit</span>
          </button>
        </div>
      </form>
      <div className="list">
        <ul className="toDoList">{list}</ul>
      </div>
      {/* {loading ? (
        <div className="loading">hi</div>
      ) : (

      )} */}
    </section>
  );
};


App.propTypes = {
  word: PropTypes.array,
};

export default connect(
  (state) => ({
    words: state.scrabble.words,
  }),
  {
    getWords: scrabbleActions.getWords,
  }
)(App);
