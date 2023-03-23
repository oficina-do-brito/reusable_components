import styled, { css } from "styled-components";

export const HomeStyle = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 320px) {
    }
    @media only screen and (min-width: 321px) and (max-width: 480px) {
    }
    @media only screen and (min-width: 481px) and (max-width: 768px) {
    }
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
    }
    @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    }
    @media only screen and (min-width: 1201px) {
    }
  `}
`;
