import { Outlet } from "react-router-dom";
import Header from "./Header";
import classes from "./Layout.module.scss";

function Layout() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
