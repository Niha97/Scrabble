import axios from "axios";

/**
 * Middleware which takes custom action objects and converts
 * them to dispatchable actions wih plain objects
 *
 * @param store provides dispatch and getState to next
 * @param next is thunk middlware which dispatches plain object actions
 * @param action is our custom object
 */
const axiosMiddleware = () => (next) => (action) => {
  const { types, request, ...rest } = action;
  if (!request) {
    return next(action);
  }
  const [REQUEST, SUCCESS, FAILURE] = types;
  next({ ...rest, type: REQUEST });

  return request(axios).then(
    (response) => next({ ...rest, response, type: SUCCESS }),
    (error) => next({ ...rest, error, type: FAILURE })
  );
};

export default axiosMiddleware;
