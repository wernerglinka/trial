import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LogoWrapper = styled("div")`
  width: ${props => props.width}px;

  .bracket {
    fill: red;
  }
  .logoText {
    fill: #333;
  }
`;

const MainLogo = ({ width }) => (
  <LogoWrapper width={width}>
    <svg version="1.1" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
      <g
        className="main-logo-container"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g fill="#000" className="main-logo" fillRule="nonzero">
          <path
            d="m15 47.139c4.08-1.26 4.5-4.38 4.5-9.6v-11.219c0-4.86 3.3-8.1 5.1-8.1h4.379v4.44h-2.399c-2.16 0-2.16 1.8-2.16 4.56v11.339c0 7.02-3.78 10.02-4.56 10.5 0.78 0.48 4.56 3.48 4.56 10.56v11.28c0 2.76 0 4.559 2.16 4.559h2.399v4.44h-4.379c-1.8 0-5.1-3.239-5.1-8.1v-11.16c0-5.28-0.42-8.399-4.5-9.66v-3.839z"
            className="bracket"
          />
          <path
            d="m59.82 40.719h0.12c1.98-2.7 4.56-4.2 8.04-4.2 7.8 0 9.6 5.64 9.6 12.24v16.739h-4.8v-15.899c0-4.56-0.36-8.64-5.939-8.64-6.6 0-7.02 6.12-7.02 11.16v13.379h-4.8v-28.199h4.8v3.42h-1e-3z"
            className="logoText"
          />
          <path
            d="m84.18 51.458c0-8.28 6.54-14.939 14.819-14.939s14.819 6.66 14.819 14.939-6.599 14.82-14.818 14.82-14.82-6.54-14.82-14.82zm4.8-0.06c0 5.76 4.08 10.44 10.02 10.44 5.939 0 10.02-4.68 10.02-10.44 0-5.7-4.08-10.439-10.02-10.439s-10.02 4.74-10.02 10.439z"
            className="logoText"
          />
          <polygon
            points="143.58 65.498 138.78 65.498 138.78 16 143.58 16"
            className="logoText"
          />
          <path
            d="m150 51.458c0-8.28 6.539-14.939 14.819-14.939s14.819 6.66 14.819 14.939-6.6 14.819-14.819 14.819-14.819-6.539-14.819-14.819zm4.799-0.06c0 5.76 4.079 10.44 10.02 10.44 5.939 0 10.02-4.68 10.02-10.44 0-5.7-4.08-10.439-10.02-10.439-5.941 0-10.02 4.74-10.02 10.439z"
            className="logoText"
          />
          <path
            d="m211.68 64.118c0 4.5 0 8.399-2.88 12.12-2.641 3.359-6.72 4.979-10.92 4.979-7.859 0-13.68-4.979-13.859-12.959h4.8c0.06 5.22 3.84 8.52 8.999 8.52 7.44 0 9.061-5.459 9.061-11.819v-3.36h-0.12c-2.28 2.94-6 4.68-9.78 4.68-8.219 0-13.439-6.899-13.439-14.759 0-7.919 5.28-15 13.62-15 3.899 0 7.319 1.74 9.6 4.8h0.12v-4.02h4.8v26.818h-2e-3zm-23.22-13.019c0 5.52 3.24 10.74 9.24 10.74 6.18 0 9.42-4.98 9.42-10.68 0-5.64-3.541-10.2-9.48-10.2-5.58 0-9.18 4.86-9.18 10.14z"
            className="logoText"
          />
          <path
            d="m218.52 51.458c0-8.28 6.539-14.939 14.818-14.939 8.28 0 14.82 6.66 14.82 14.939s-6.6 14.819-14.82 14.819c-8.218 1e-3 -14.818-6.539-14.818-14.819zm4.799-0.06c0 5.76 4.08 10.44 10.02 10.44s10.02-4.68 10.02-10.44c0-5.7-4.079-10.439-10.02-10.439-5.94 0-10.02 4.74-10.02 10.439z"
            className="logoText"
          />
          <path
            d="m285.66 50.979c-4.08 1.26-4.5 4.38-4.5 9.66v11.16c0 4.86-3.3 8.1-5.1 8.1h-4.38v-4.44h2.399c2.16 0 2.16-1.799 2.16-4.559v-11.28c0-7.08 3.779-10.08 4.561-10.56-0.781-0.48-4.561-3.479-4.561-10.5v-11.34c0-2.76 0-4.56-2.16-4.56h-2.399v-4.44h4.38c1.8 0 5.1 3.24 5.1 8.1v11.219c0 5.22 0.42 8.34 4.5 9.6v3.84z"
            className="bracket"
          />
        </g>
      </g>
    </svg>
  </LogoWrapper>
);

MainLogo.propTypes = {
  width: PropTypes.number.isRequired
};

export default MainLogo;
