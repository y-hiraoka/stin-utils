import { atom, useRecoilCallback, useRecoilValue } from "recoil";
import { downloadInmemoryBlob } from "../utils/downloadInmemoryBlob";
import { toBlobFromDataURL } from "../utils/toBlobFromDataURL";
import { toDataURL } from "../utils/toDataURL";

const dataURLListAtom = atom<string[]>({
  key: "data url list atom",
  default: [],
});

export const useDataURLList = () => useRecoilValue(dataURLListAtom);

export const useRemoveImageDataURL = () => {
  const removeImageDataURL = useRecoilCallback(({ set }) => (index: number) => {
    set(dataURLListAtom, (prev) => prev.filter((_, i) => i !== index));
  });

  return removeImageDataURL;
};

export const useHandlePaste = () => {
  const handlePaste: React.ClipboardEventHandler<HTMLDivElement> = useRecoilCallback(
    ({ set }) => async (e) => {
      const itemIndex = e.clipboardData.types.indexOf("Files");

      if (itemIndex !== -1) {
        const file = e.clipboardData.items[itemIndex].getAsFile();
        if (file === null) return;

        if (file.type.startsWith("image/")) {
          const dataURL = await toDataURL(file);
          set(dataURLListAtom, (prev) => [...prev, dataURL]);
        }
      }
    },
    []
  );

  return handlePaste;
};

export const useDownloadImages = () => {
  const downloadImages = useRecoilCallback(({ snapshot }) => async () => {
    const dataURLList = await snapshot.getPromise(dataURLListAtom);

    dataURLList.forEach((dataURL, index) => {
      const blob = toBlobFromDataURL(dataURL);

      downloadInmemoryBlob(
        blob,
        dataURLList.length > 1 ? `clipboard-image-${index + 1}` : `clipboard-image`
      );
    });
  });

  return downloadImages;
};
