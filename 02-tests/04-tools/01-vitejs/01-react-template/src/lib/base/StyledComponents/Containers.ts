import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Page = styled.div(
  () => css`
    height: 100%;
  `,
);

export const PageContent = styled.div(
  () => css`
    padding: ${cssSize(4)};
    height: 100%;
  `,
);

export const FlexRow = styled.div<Props.CssProps>(
  ({ gap }) => css`
    display: flex;
    align-items: center;
    gap: ${cssSize(gap || 2)};
  `,
);
