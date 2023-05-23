import { EMPTY_STRING } from "@/constants/texts";
import { LINK_BLANK, LINK_TAG } from "@/constants/general";

export const downloadFileByUrl = (url: string, fileName?: string) => {
  const link = document.createElement(LINK_TAG);
  link.download = fileName || EMPTY_STRING;
  link.href = url;
  link.target = LINK_BLANK;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
