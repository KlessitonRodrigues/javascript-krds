import styled, { css } from "styled-components";

export const Container = styled.div(
  (props) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.4rem;
    background-color: #7e91dd;
    border-radius: 6px;
    min-width: 3rem;
    min-height: 2rem;
    color: #fff;
    cursor: pointer;

    :hover {
      background-color: #7e91dd99;
    }
  `
);

export const Arrows = styled.div<{ display?: boolean }>(
  (props) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #7e91dd;
    color: #fff;
    cursor: pointer;
    padding-right: 0.2rem;

    ${!props.display && "display: none;"}
  `
);

export const Content = styled.div(
  (props) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.4rem;
    padding: 0 0.6rem;
  `
);
