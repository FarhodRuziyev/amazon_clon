import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
interface layoutProps {
  children: React.ReactNode | React.ReactElement;
}
const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <main className="pages">{children}</main>
        <Footer/>
      </div>
    </React.Fragment>
  );
};

export default Layout;
