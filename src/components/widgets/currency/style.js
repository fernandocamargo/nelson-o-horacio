import styled from 'styled-components';

export default component => styled(component)`
  span {
    &[aria-roledescription='type'] {
      color: red;
    }
  }
`;
