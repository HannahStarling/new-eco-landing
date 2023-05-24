import { request } from "@/helpers/api/request";
import { APIURL } from "@/types/api";

export const sendRequest = ({
  body,
  token,
}: {
  token?: string | undefined;
  body?: Request;
}) => request({ url: APIURL.sendRequest, body, token });
