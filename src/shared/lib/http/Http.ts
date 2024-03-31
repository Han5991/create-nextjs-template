import axios, {type AxiosInstance, type AxiosRequestConfig} from 'axios';

class Http {
  private readonly instance: AxiosInstance;

  readonly baseURL: string;

  constructor() {
    this.baseURL =
      process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
    this.instance = axios.create({
      baseURL: this.baseURL,
    });
  }

  private setInterceptor() {
    this.instance.interceptors.request.use(config => config);
    this.instance.interceptors.response.use(
      response => response,
      error => Promise.reject(error),
    );
  }

  private getAxiosInstance() {
    this.setInterceptor();
    return this.instance;
  }

  protected async get<T, D = unknown>(
    url: string,
    data?: D,
    headers?: AxiosRequestConfig['headers'],
  ) {
    return this.getAxiosInstance().get<T>(url, {
      params: data,
      headers,
    });
  }

  protected async post<T, D>(
    url: string,
    data?: D,
    headers?: AxiosRequestConfig['headers'],
  ) {
    return this.getAxiosInstance().post<T>(url, data, {headers});
  }

  protected async put<T, D = unknown>(
    url: string,
    data: D,
    headers?: AxiosRequestConfig['headers'],
  ) {
    return this.getAxiosInstance().put<T>(url, data, {headers});
  }

  protected async delete<T, D = unknown>(
    url: string,
    data?: D,
    headers?: AxiosRequestConfig['headers'],
  ) {
    return this.getAxiosInstance().delete<T>(url, {headers, data});
  }
}

export default Http;
