import { FAIL, FETCH, SET } from "reducers/notifications/constants";

export const fail = ({ error }) => ({ type: FAIL, error });

export const fetch = () => ({ type: FETCH });

export const set = ({ items }) => ({ type: SET, items });
