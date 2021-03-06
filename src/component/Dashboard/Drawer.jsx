import styles from '../../styles/component/Drawer.module.scss';
import Logo from '../Logo';
import { Button } from 'antd';
import {
  MoneyCollectOutlined,
  OrderedListOutlined,
  LogoutOutlined,
  QrcodeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useAuth } from '../../utils/context/AuthUserContext';

export default function Drawer({ selectedNav, setSelectedNav }) {
  const { signout } = useAuth();

  const navList = [
    { id: 0, name: 'Payments', icon: <MoneyCollectOutlined /> },
    { id: 1, name: 'Products', icon: <OrderedListOutlined /> },
    { id: 2, name: 'QR Code', icon: <QrcodeOutlined /> },
    { id: 3, name: 'Profile', icon: <UserOutlined /> },
    {
      id: 10,
      name: 'Logout',
      icon: <LogoutOutlined style={{ color: 'red' }} />,
      onClick: signout,
      styles: { color: 'red', marginTop: 50 },
    },
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
            onClick={nav.onClick || handleNav}
            style={nav.styles}
          >
            {nav.icon}
            <span>{nav.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
