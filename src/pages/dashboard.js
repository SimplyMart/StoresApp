import styles from "../styles/Dashboard.module.scss";
import Drawer from "../component/Dashboard/Drawer";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../helper/AuthUserContext";

export default function Dashboard() {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  console.log(authUser);
  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading]);
  return (
    <div className={styles.Dashboard}>
      <Drawer />
    </div>
  );
}
