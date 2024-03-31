export type Photo = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};

export type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};
