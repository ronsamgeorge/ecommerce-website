import { css } from "styled-components";

// add responsive design for smartphones
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 500px) {
      ${props}
    }
  `;
};
