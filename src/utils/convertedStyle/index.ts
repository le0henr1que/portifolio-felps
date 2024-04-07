export const convertedStyle = (styles: any) => {
  const convertedStyle = JSON.stringify(styles)
    .replaceAll('"', "")
    .replaceAll(",", " ")
    .replaceAll("{", "")
    .replaceAll("}", "")
    .replace(/^\[/, "")
    .replace(/\]$/, "");

  return convertedStyle;
};
