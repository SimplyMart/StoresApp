import { getAuth, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore();
export const auth = getAuth();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = async () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      if (!isUserEqual(user)) {
        await setDoc(doc(collection(db, "store"), user.uid), {
          storeName: "",
          ownerName: "",
          address: "",
          phoneNumber: "",
          profileUrl: user.photoURL,
          qrcode: `http://api.qrserver.com/v1/create-qr-code/?data=${user.uid}`,
        });
        await setDoc(doc(collection(db, "admin"), user.uid), {
          name: user.displayName,
          email: user.email,
          storeId: user.uid,
        });
      } else {
        console.log("user already exists");
      }
    })
    .catch((err) => console.error(err));
};

async function isUserEqual(user) {
  if (user) {
    const docRef = doc(db, "admin", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return true;
    } else {
      return false;
    }
  }
}
