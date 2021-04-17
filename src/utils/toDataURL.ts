export const toDataURL = async (file: File) => {
  const promise = new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result as string);

    reader.onerror = () => reject(reader.error);
  });

  return promise;
};
