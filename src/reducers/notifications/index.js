import update from "immutability-helper";

import { FAIL, FETCH, SET } from "./constants";

export const getInitialState = () => ({
  error: null,
  items: [],
  loading: false
});

export default (state = getInitialState(), { error, items, type }) => {
  switch (type) {
    case FAIL:
      return update(state, {
        error: { $set: error },
        items: { $set: [] },
        loading: { $set: false }
      });
    case FETCH:
      return update(state, { loading: { $set: true } });
    case SET:
      return update(state, {
        error: { $set: null },
        items: { $set: items },
        loading: { $set: false }
      });
    default:
      return state;
  }
};
