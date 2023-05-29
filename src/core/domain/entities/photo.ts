export interface Photo {
  id: string;
  likes: number;
  description: string;
  urls: {
    regular: string;
  };
  user: User;
}

type User = {
  id: string;
  name: string;
};
