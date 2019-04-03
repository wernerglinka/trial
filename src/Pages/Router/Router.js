import React, { useContext } from "react";
import { __RouterContext, Switch, Route } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";

import Home from "../Home/Home";
import First from "../AnotherPage/AnotherPage";
import NotFound from "../NotFound/NotFound";

// source: https://codesandbox.io/embed/jp1wr1867w
// for fading in/out
// const transitions = useTransition(location, location => location.pathname, {
//  from: { opacity: 0 },
//  enter: { opacity: 1 },
//  leave: { opacity: 0 }
// });
// note that the position of the route-section is impacted by the container
// having transform in the version below. Using fade doesn't use transfor thus
// the absolute top position must be adjusted

function Router() {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });
  return transitions.map(({ item, props, key }) => (
    <Wrapper key={key}>
      <animated.div style={props}>
        <section className="route-section">
          <Switch location={item}>
            <Route exact path="/" component={Home} />
            <Route path="/another-page" component={First} />
            <Route component={NotFound} />
          </Switch>
        </section>
      </animated.div>
    </Wrapper>
  ));
}

const Wrapper = styled.div`
  max-width: ${props => props.theme.contentWidth};
  margin: 0 auto;
  padding: 0 30px;

  .transition-group {
    position: relative;
  }
  .route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default Router;
