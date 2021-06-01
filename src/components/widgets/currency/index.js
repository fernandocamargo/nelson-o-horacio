import { number, oneOfType, string } from 'prop-types';
import React, { useMemo } from 'react';

import Part from './part';
import withStyle from './style';

export const renderPart = (part, index) => <Part key={index} {...part} />;

export const Currency = ({ className, ...props }) => {
  const parts = useMemo(
    () =>
      new Intl.NumberFormat(props.locale, {
        currency: props.currency,
        style: 'currency',
      }).formatToParts(props.value),
    [props]
  );

  return <span className={className}>{parts.map(renderPart)}</span>;
};

Currency.propTypes = {
  className: string.isRequired,
  currency: string.isRequired,
  locale: string.isRequired,
  value: oneOfType([number.isRequired, string.isRequired]).isRequired,
};

Currency.defaultProps = {
  currency: 'EUR',
  locale: window.navigator.language,
};

export default withStyle(Currency);
