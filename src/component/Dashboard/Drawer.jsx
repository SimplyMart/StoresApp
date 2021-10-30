import { useState } from "react";
import styles from "../../styles/component/Drawer.module.scss";
import Logo from "../Logo";
import { Button } from "antd";
import {
  MoneyCollectOutlined,
  OrderedListOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useAuth } from "../../../helper/AuthUserContext";

export default function Drawer() {
  const { signout } = useAuth();
  const [selectedNav, setSelectedNav] = useState(0);

  const navList = [
    { id: 0, name: "Payments", icon: <MoneyCollectOutlined /> },
    { id: 1, name: "Products", icon: <OrderedListOutlined /> },
    { id: 2, name: "Logout", icon: <LogoutOutlined /> },
  ];

  const handleNav = (e) => {
    const { id } = e.currentTarget.dataset;
    setSelectedNav(parseInt(id));
  };

  return (
    <div className={styles.Drawer}>
      <Logo classes={`${styles.drawerLogo}`} />
      <div className={styles.drawerNav}>
        {navList.map((nav) => (
          <Button
            key={nav.id}
            className={`${styles.navBox} ${
              selectedNav === nav.id && styles.selected
            }`}
            data-id={nav.id}
            onClick={handleNav}
          >
            {nav.icon}
            <span>{nav.name}</span>
          </Button>
        ))}
        <Button onClick={signout}> signOut </Button>
      </div>
    </div>
  );
}
