import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../styles/ress.css";
import "../styles/variables.css";

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
