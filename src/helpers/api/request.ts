import { ContentType, Credential, HeadersMode, Method } from "@/types/api";
import { BASE_URL } from "@/constants/api";
import { createAuthorizationHeader } from "@/helpers/create-authorization-header";
import { buildFormDataRequest } from "@/helpers/api/build-form-data-request";
import { prepareData } from "@/helpers/api/prepare-data";

export const request = ({
  url,
  method = Method.POST,
  token,
  body,
}: {
  url: string;
  method?: Method;
  token?: string;
  body?: Request;
}) => {
  const input = `${BASE_URL}${url}`;

  const config: RequestInit = {
    method,
    headers: {
      Accept: ContentType.JSON,
      "Content-Type":
        method === Method.GET ? ContentType.JSON : ContentType.FormData,
      ...(!!token && { Authorization: createAuthorizationHeader(token) }),
    },
    ...(!!body && { body: buildFormDataRequest(body) }),
    credentials: Credential.Include,
    mode: HeadersMode.CORS,
  };
  return fetch(input, config).then(prepareData);
};
