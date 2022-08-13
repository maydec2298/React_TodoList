import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";

import "./style.css";

const Layout = () => {
  return (
    <div className="wrap">
      <Header />
      <Form />
      <List />
    </div>
  );
};

export default Layout;