export interface Link {
  id: number;
  url: string;
}

export interface LinkApi {
  url: string;
}

export interface LinkResponse {
  shortUrl: string;
  url: string;
  __v: number;
  _id: string
}

export interface LinkWithShortUrl {
  shortUrl: string;
}