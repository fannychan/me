export interface Artist {
  name: string;
  genres: string[];
  images: {
    height: number;
    url: string;
    width: number;
  }[];
}
