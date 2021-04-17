import { useRouter } from "next/router";
import Head from "next/head";
import { ClipboardImageGenerator as Template } from "../templates/ClipboardImageGenerator";

const TITLE = "Clipboard Image Generator";
const DESCRIPTION =
  "クリップボードに含まれる画像データをファイルとして生成するサービスです。";
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
