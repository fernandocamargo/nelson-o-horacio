import { string } from 'prop-types';
import React from 'react';

export const Part = ({ type, value }) => (
  <span aria-roledescription={type}>{value}</span>
);

Part.propTypes = {
  type: string.isRequired,
  value: string.isRequired,
};

export default Part;
