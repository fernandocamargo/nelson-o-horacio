import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAll } from "services/notifications";
import { fail, fetch, set } from "actions/notifications";

import selector from "./selectors";

export default () => {
  const dispatch = useDispatch();
  const notifications = useSelector(selector);
  const refresh = useCallback(() => {
    dispatch(fetch());

    return getAll()
      .then((items) => dispatch(set({ items })))
      .catch((error) => dispatch(fail({ error })));
  }, [dispatch]);

  return { refresh, ...notifications };
};
