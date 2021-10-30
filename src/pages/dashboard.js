import styles from "../styles/Dashboard.module.scss";
import Drawer from "../component/Dashboard/Drawer";
import Products from "../component/Dashboard/Products";
import { useRouter } from "next/router";
import { useAuth } from "../utils/context/AuthUserContext";

export default function Dashboard() {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  console.log(authUser);

  if (!loading && !authUser) {
    router.push("/");
    return <></>;
  }

  return (
    <div className={styles.Dashboard}>
      {/* Width 21% */}
      <Drawer />
      <div className={styles.dashMain}>
        <Products />
      </div>
    </div>
  );
}
