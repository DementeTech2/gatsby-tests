import * as React from "react"
import NavBar from "./NavBar";

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
    <div className="Header">
            <NavBar />
        </div>
    <div className="container" style={contentStyle}>
      {props.children}
    </div>
  </div>
);

export default Layout;