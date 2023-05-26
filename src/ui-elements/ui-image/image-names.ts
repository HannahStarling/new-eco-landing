import BoardStart from "/public/assets/images/BoardStart.png";
import BoardNew from "/public/assets/images/BoardNew.png";
import Comparison from "/public/assets/images/Comparison.png";
import PlatformModules from "/public/assets/images/PlatformModules.png";
import Process from "/public/assets/images/Process.png";
import Tender from "/public/assets/images/Tender.png";
import Edo from "/public/assets/images/Edo.png";
import EdoView from "/public/assets/images/EdoView.png";
import Smartphone from "/public/assets/images/Smartphone.png";

export enum ImageName {
  BoardStart = "BoardStart",
  BoardNew = "BoardNew",
  Comparison = "Comparison",
  PlatformModules = "PlatformModules",
  Process = "Process",
  Tender = "Tender",
  Edo = "Edo",
  EdoView = "EdoView",
  Smartphone = "Smartphone",
}

export const ImageSrc = {
  BoardStart,
  BoardNew,
  Comparison,
  PlatformModules,
  Process,
  Tender,
  Edo,
  EdoView,
  Smartphone,
};

export const ImageSize: Record<
  ImageName,
  {
    width: number;
    height: number;
  }
> = {
  [ImageName.Process]: {
    width: 1128,
    height: 549,
  },
  [ImageName.Tender]: {
    width: 840,
    height: 381.49,
  },
  [ImageName.PlatformModules]: {
    width: 744,
    height: 537,
  },
  [ImageName.Edo]: {
    width: 648,
    height: 366,
  },
  [ImageName.EdoView]: {
    width: 648,
    height: 366,
  },
  [ImageName.Smartphone]: {
    width: 369,
    height: 588,
  },
  [ImageName.Comparison]: {
    width: 1128,
    height: 404,
  },
  [ImageName.BoardStart]: {
    width: 563,
    height: 270,
  },
  [ImageName.BoardNew]: {
    width: 555,
    height: 268,
  },
};
