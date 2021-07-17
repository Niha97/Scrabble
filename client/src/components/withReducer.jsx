import React, { useContext} from "react";
import { ReactReduxContext } from 'react-redux';

const injectReducer = (key, reducer) => ConnectedWrappedComponent => {
  const Extended = (props) => {
    const context = useContext(ReactReduxContext);
    context.store.injectReducer(key, reducer);
    return <ConnectedWrappedComponent {...props} />;
  };
  return Extended;
};

export { injectReducer };