import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from "@/core/application/protocols/http/";
import axios from "axios";

export class AxiosHttpClientAdapter implements HttpClient {
  async request<ResponseData = any>(
    params: HttpRequest
  ): Promise<HttpResponse<ResponseData>> {
    try {
      const axiosResponse = await axios.request({
        url: params.url,
        method: params.method,
        headers: params.headers,
        data: params.body,
      });

      return {
        statusCode: axiosResponse.status,
        data: axiosResponse.data,
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
