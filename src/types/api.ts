export enum Method {
  GET = "GET",
  POST = "POST",
}

export enum ContentType {
  JSON = "application/json",
  FormData = "multipart/form-data",
}

export enum Credential {
  Include = "include",
}

export enum HeadersMode {
  CORS = "cors",
}

export enum APIURL {
  getToken = "/getToken",
  sendRequest = "/sendRequest",
}

export type ErrorMessage = string;
export type Errors = Array<ErrorMessage>;
export type ErrorAPI = { error: Errors };

export type SuccessResponseAPI<Data> = {
  success: true;
  data: Data;
};
export type RejectAPIResponse = {
  success: false;
  data: ErrorAPI;
};

export type ContactUsRequest = {
  Name: string;
  Phone: string;
  EMail?: string;
  Organization?: string;
  Appointment?: string;
};

export type ContactUsResponse = SuccessResponseAPI<string> | RejectAPIResponse;
