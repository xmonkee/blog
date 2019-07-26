import React from "react";
import Header from "../header";
import Footer from "../footer";
import Container from "../container";

function Layout({ path, children, pageTitle, ogImage }) {
  return (
    <div>
      <Header path={path} pageTitle={pageTitle} ogImage={ogImage} />
      <Container>
        <main>{children}</main>

        <Footer />
      </Container>
    </div>
  );
}

export default Layout;
