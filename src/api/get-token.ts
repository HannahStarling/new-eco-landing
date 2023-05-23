import { APIURL, Method } from "@/types/api";
import { request } from "@/helpers/api/request";

export const getToken = () =>
  request({ url: APIURL.getToken, method: Method.GET });
