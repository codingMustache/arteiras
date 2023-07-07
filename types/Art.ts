export type AristDetails = {
  artist: string;
  images: string[];
  caption: string;
  description: string;
  artist_url: string;
};

export type Artists = {
  content: AristDetails[];
};

export type Art = {
  _id: string;
  _createdAt: Date;
  name: String;
  month: Date;
  slug: string;
  featured_artists: Artists;
};
