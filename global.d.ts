export declare global {
  // next js
  type NextPageProps<T> = {
    params: T;
    searchParams: {
      [key: string]: string | string[];
    };
  };
}
