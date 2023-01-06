import styled, { css } from "styled-components";

export const Container = styled.div(
  (props) => css`
    width: 100%;
    background-color: #eeeeeecc;
    border-radius: 6px;
    color: #222;
    padding: 0.5rem 2rem;
    font-size: 2rem;
    text-align: right;
  `
);
