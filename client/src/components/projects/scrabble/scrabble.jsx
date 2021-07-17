import React, { useState } from "react";
import PropTypes from "prop-types";
import { compose } from 'redux';
import { connect } from "react-redux";
import useLoading from "../../hooks/use-loading";
import Loader from "../../elements/loader";
import { injectReducer } from "../../withReducer";
import scrabbleReducer from "../../../store/scrabble/scrabble";
import * as scrabbleActions from "../../../store/scrabble/scrabble.actions";
import "../../../styles/scrabble.styl";

export const Scrabble = ({ words, getWords }) => {
  const [input, setInput] = useState("");
  const { loading, error, setError, callBack } = useLoading();

  const submit = (e) => {
    e.preventDefault();
    if (!input.length) {
      setError("Please enter input");
    } else {
      callBack(() => getWords(input));
    }
  };

  const list = words.map((word) => {
    return <li>{word}</li>;
  });

  return (
    <section className="scrabble">
      <div className="scrabble-container">
        <div className="heading">
          <img
            className="heading-img"
            alt="someImage"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"
          />
          <h1 className="heading-title">Scrabble</h1>
        </div>
        <form className="form">
          <div>
            <label className="form-label">~ I want to test ~</label>
            <input
              className="form-input"
              value={input}
              type="text"
              size="30"
              onChange={(e) => setInput(e.target.value)}
              required
            />
            <button className="button" onClick={submit}>
              <span>Submit</span>
            </button>
            {error && <div className="error-block">{error}</div>}
          </div>
        </form>
        {loading ? (
          <Loader />
        ) : (
          <div className="list">
            <ol className="toDoList">{list}</ol>
          </div>
        )}
      </div>
    </section>
  );
};

Scrabble.propTypes = {
  word: PropTypes.array,
};

const mapStateToProps = (state) => ({
  title: state.home.title,
  words: state.scrabble.words
});
const mapDispatchToProps = dispatch => {
  return {
    getWords: (input) => dispatch(scrabbleActions.getWords(input))
  }
};


const scrabbleStore = injectReducer(
 'scrabble',
 scrabbleReducer
)

export default compose(
  scrabbleStore,
  connect(mapStateToProps, mapDispatchToProps)
 )(Scrabble);
