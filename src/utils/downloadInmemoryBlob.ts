import { sleep } from "./sleep";

/** browser only */
export function downloadInmemoryBlob(blob: Blob, fileName: string) {
  const anchorElement = document.createElement("a");

  const blobUrl = window.URL.createObjectURL(blob);

  anchorElement.download = fileName;
  anchorElement.href = blobUrl;

  anchorElement.click()

  sleep(1000).then(() => {
    window.URL.revokeObjectURL(blobUrl);
  });
}
