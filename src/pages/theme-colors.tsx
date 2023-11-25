import { useRouter } from "next/router";
import Head from "next/head";
import { ThemeColors as Template } from "../templates/ThemeColors";

const TITLE = "Theme Colors";
const DESCRIPTION = "色のスケールを計算するツールです";
const URL = "https://utils.stin.ink";

const ClipboardImageGenerator: React.VFC = () => {
  const router = useRouter();
  router.pathname;
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${URL}${router.pathname}`} />
        <meta property="og:type" content={"article"} />
        <meta property="og:site_name" content={TITLE} />
      </Head>
      <Template />
    </>
  );
};

export default ClipboardImageGenerator;
