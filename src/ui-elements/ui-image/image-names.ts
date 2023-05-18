export enum ImageName {
  Comparison = "Comparison",
  PlatformModules = "PlatformModules",
  Process = "Process",
  Tender = "Tender",
  Edo = "Edo",
  EdoView = "EdoView",
  Smartphone = "Smartphone",
}

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
};
