import { Outlet } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import styles from "./Layout module.css"

const Layout = () => {
    return (
       <div className={styles.countainer}>
          <Header />
          <div className={styles.mainCountainer}>
             <Sidebar />
              <Outlet />
          </div>
           <Footer />
       </div>
    )
}
export default Layout;