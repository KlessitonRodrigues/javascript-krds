import styled, { css } from "styled-components";

export const Container = styled.div(
  (props) => css`
    background-color: #444;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  `
);

export const Content = styled.div(
  (props) => css`
    background-color: #444;
    width: fit-content;
    margin: 0 auto;
    transition: transform 1s;
    position: relative;
  `
);
