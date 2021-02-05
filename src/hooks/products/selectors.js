import identity from "lodash/identity";
import property from "lodash/property";
import { createSelector } from "reselect";

export const getProducts = property("products");

export default createSelector(getProducts, identity);
