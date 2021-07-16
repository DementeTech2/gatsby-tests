import * as React from "react"
import NavBar from "./NavBar";
import { Helmet } from 'react-helmet';

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    <Helmet>
      <title>Gatsby + Node.js (TypeScript) API</title>
      <script src="https://edgetest.ocdndns.com/optlyjs/CF_ACCOUNT/WORKER_NAME/edge-client/v1/20224852609/20439120195"></script>
    </Helmet>
    <div className="Header">
            <NavBar />
        </div>
    <div className="container" style={contentStyle}>
      {props.children}
    </div>
  </div>
);

export default Layout;