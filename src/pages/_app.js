import "../styles/globals.scss";
import { AuthUserProvider } from "../../helper/AuthUserContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}

export default MyApp;
