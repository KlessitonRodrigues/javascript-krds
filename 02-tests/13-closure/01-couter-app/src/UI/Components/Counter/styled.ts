import styled, { css } from "styled-components";

export const Container = styled.div(
  (props) => css`
    background-image: linear-gradient(to right, #3156c4, #4b6dd2);
    box-shadow: 1px 1px 6px 1px #222;
    border-radius: 10px;
    width: 100%;
    max-width: 20rem;
    padding: 1rem;
    margin: 0 auto;
  `
);

export const Buttons = styled.div(
  (props) => css`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 2rem 0 1rem;
  `
);
