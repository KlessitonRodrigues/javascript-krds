import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Container = styled.span<Props.CssProps>(
  ({ size }) => css`
    display: inline-flex;
    font-size: ${cssSize(size || 6)};
    cursor: pointer;
  `,
);
