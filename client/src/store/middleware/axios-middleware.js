import axios from "axios";

const axiosMiddleware = store => next => action => {
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

