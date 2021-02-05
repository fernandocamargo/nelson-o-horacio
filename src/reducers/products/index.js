import times from "lodash/times";
import { commerce, image, random } from "faker";

export const items = times(10).map(() => ({
  image: [image.fashion(), "jpg"].join("."),
  description: commerce.productDescription(),
  id: random.uuid(),
  name: commerce.productName(),
  price: commerce.price()
}));

export const getInitialState = () => ({ items });

export default (state = getInitialState(), { type }) => {
  switch (type) {
    default:
      return state;
  }
};
