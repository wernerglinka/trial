import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

import Home from "../Home/Home";
import First from "../AnotherPage/AnotherPage";
import NotFound from "../NotFound/NotFound";

// source: https://codesandbox.io/s/l9m3zrj4lq?from-embed

function Pages({ location }) {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/another-page" component={First} />
              <Route component={NotFound} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

Pages.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string
  }).isRequired
};

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default withRouter(Pages);
