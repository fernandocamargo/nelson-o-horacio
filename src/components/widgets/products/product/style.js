import property from 'lodash/property';
import styled from 'styled-components';

export default component => styled(component)`
  .MuiCard-root {
    max-width: calc(100vw / 3);
  }

  .MuiCardMedia-root {
    height: calc(100vh / 3);
  }

  .MuiCardContent-root {
    ${property('theme.typography.body2')};
    color: ${property('theme.palette.text.secondary')};
  }
`;
