import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Container = styled.header(
  ({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.mainText};
    padding: ${cssSize(4)};
  `,
);
