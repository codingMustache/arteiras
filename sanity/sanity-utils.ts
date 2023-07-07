import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config"
import { Art } from "@/types/Art";

export const getArt = async (): Promise<Art> => {
  // grabs the single newest Art document
  return createClient(clientConfig).fetch(
    groq`*[_type == "art"] | order(_createdAt desc)[0] {
      _id,
      _createdAt,
      month,
      "slug": slug.current,
      "featured_artists": featured_artists.content[]{
        artist,
        "images": images[]{
          asset->{url}
        },
        caption,
        description,
        artist_url,
      }
    }`
  );
};

/**
 *
 * @param slug :string
 * @returns Promise
 */
export const getArtBySlug = async (slug:string): Promise<any> => {
  // grabs the single Art by passed Slug document
  return createClient(clientConfig).fetch(
    groq`*[slug.current == $slug]{
      "slug": slug.current,
      "featured_artists": featured_artists.content[]{
        artist,
        "images": images[]{
          asset->{url}
        },
        caption,
        artist_url,
        description,
      }
    }`,{ slug }
  );
};

export const getAllSlugs = async (): Promise<any>  => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "art"] | order(_createdAt desc) {
      slug
    }`
  )
}
