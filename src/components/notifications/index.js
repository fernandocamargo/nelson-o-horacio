import { useEffect } from "react";

import { useNotifications } from "hooks";

export default ({ children }) => {
  const { refresh } = useNotifications();

  useEffect(() => {
    refresh();
  }, [refresh]);

  return children;
};
