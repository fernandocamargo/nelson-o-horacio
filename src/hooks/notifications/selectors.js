import identity from "lodash/identity";
import property from "lodash/property";
import { createSelector } from "reselect";

export const getNotifications = property("notifications");

export default createSelector(getNotifications, identity);
