import { useState } from "react";

/**
 * useLoading – custom hook used to set loading state before and after callback.
 *
 * @returns {object} An object with loading and error state,
 * also setError and callback functions
 */
export default function useLoading() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //eslint-disable-next-line valid-jsdoc
  /**
   * callBack – function which triggers loading.
   *
   * @param {() => {}} callFunction promise
   * @param {() => {}} onSuccess optional function on promise resolve
   * @param {() => {}} onFailure optional function on promise reject
   *
   */
  const callBack = (
    callFunction,
    onSuccess = () => {},
    onFailure = () => {}
  ) => {
    setLoading(true);
    callFunction()
      .then(() => {
        setLoading(false);
        setError("");
        onSuccess();
      })
      .catch((err) => {
        setLoading(false);
        onFailure(err);
      });
  };
  return { loading, error, setError, callBack };
}
