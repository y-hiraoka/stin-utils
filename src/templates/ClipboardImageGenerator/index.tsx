import { Button } from "../../atoms/Button";
import {
  useHandlePaste,
  useDataURLList,
  useRemoveImageDataURL,
  useDownloadImages,
} from "../../logic/ClipboardImageGenerator";
import styles from "./styles.module.css";

export const ClipboardImageGenerator: React.VFC = () => {
  const handlePaste = useHandlePaste();
  const dataURLList = useDataURLList();
  const removeImageDataURL = useRemoveImageDataURL();
  const downloadImages = useDownloadImages();

  return (
    <div className={styles.root} onPaste={handlePaste}>
      <h1 className={styles.title}>Clipboard Image Generator</h1>
      <div className={styles.images}>
        {dataURLList.map((dataURL, index) => (
          <div key={index} className={styles.image}>
            <div className={styles.buttonContainer}>
              <Button variant="rounded" onClick={() => removeImageDataURL(index)}>
                削除
              </Button>
            </div>
            <div className={styles.imageContainer}>
              <img
                className={styles.imageEl}
                src={dataURL}
                alt=""
                style={{ border: "1px solid #efefef" }}
              />
              </div>
          </div>
        ))}
      </div>
      <div className={styles.button}>
        <Button variant="fulfilled" onClick={downloadImages}>
          生成する
        </Button>
      </div>
    </div>
  );
};
