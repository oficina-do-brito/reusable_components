import styled, { css } from "styled-components";

export type propsStyle = {
  modo?: string;
};
export const ButtonRadiusStyle = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 15px;
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 12px;
  letter-spacing: 2px;
  word-spacing: 2px;

  ${(props: propsStyle) => {
    switch (props.modo) {
      case "background":
        return css`
          border: none;
          color: white;
          &.com-hover {
            &:hover {
              background-color: rgba(0, 0, 0, 0.2);
            }
          }
          @media only screen and (max-width: 320px) {
            background-color: red;
          }
          @media only screen and (min-width: 321px) and (max-width: 480px) {
            background-color: blue;
          }
          @media only screen and (min-width: 481px) and (max-width: 768px) {
            background-color: orange;
          }
          @media only screen and (min-width: 769px) and (max-width: 1024px) {
            background-color: yellow;
          }
          @media only screen and (min-width: 1025px) and (max-width: 1200px) {
            background-color: lightblue;
          }
          @media only screen and (min-width: 1201px) {
            background: MediumSeaGreen;
          }
        `;

      case "no-background":
        return css`
          border: 1px solid black;
          color: black;
          &.com-hover {
            &:hover {
              background-color: rgba(0, 0, 0, 0.2);
            }
          }
          @media only screen and (max-width: 320px) {
            background: transparent;
          }
          @media only screen and (min-width: 321px) and (max-width: 480px) {
            background: transparent;
          }
          @media only screen and (min-width: 481px) and (max-width: 768px) {
            background: transparent;
          }
          @media only screen and (min-width: 769px) and (max-width: 1024px) {
            background: transparent;
          }
          @media only screen and (min-width: 1025px) and (max-width: 1200px) {
            background: transparent;
          }
          @media only screen and (min-width: 1201px) {
            background: transparent;
          }
        `;
    }
  }}
`;
