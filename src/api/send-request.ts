import { request } from "@/helpers/api/request";
import { APIURL } from "@/types/api";

export const sendRequest = async ({
  body,
  token,
}: {
  token?: string | undefined;
  body?: Request;
}) => await request({ url: APIURL.sendRequest, body, token });
