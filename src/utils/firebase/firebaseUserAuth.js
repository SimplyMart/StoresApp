import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

export function FirebaseAuth() {
  const router = useRouter();
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [storeData, setStoreData] = useState([]);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  const updateStoreData = (data, extras = {}) => {
    setStoreData((prev) => ({ ...prev, ...data, ...extras }));
  };

  const signout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
    setAuthUser(null);
    setLoading(false);
  };

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    storeData,
    authUser,
    loading,
    signout,
    updateStoreData,
  };
}
