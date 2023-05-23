import { request } from '@/helpers/api/request';
import { APIURL } from '@/types/api';

type Props = {
  body?: Request;
  token?: string | null;
};
export const sendRequest = ({ body, token }: Props) =>
  request({ url: APIURL.sendRequest, body, token });
