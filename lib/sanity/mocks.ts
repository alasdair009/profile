import { GET_ALL_POSTS, Post } from "./queries";
import { SanityClient } from "next-sanity";

export const mockPosts: Post[] = [
  {
    title: "Hello Sanity",
    slug: { current: "hello-sanity" },
    publishedAt: "2024-02-10T12:00:00Z",
    // ref format: image-<assetId>-<width>x<height>-<format>
    mainImage: {
      asset: { _type: "reference", _ref: "image-abc123-1200x800-jpg" },
    },
    _id: "",
    listed: false,
    description: "",
    categories: [],
    body: {
      _type: "",
      _key: "",
    },
  },
  {
    title: "RSC in Storybook",
    slug: { current: "rsc-in-storybook" },
    publishedAt: "2024-03-05T09:00:00Z",
    mainImage: {
      asset: { _type: "reference", _ref: "image-def456-1600x900-png" },
    },
    _id: "",
    listed: false,
    description: "",
    categories: [],
    body: {
      _type: "",
      _key: "",
    },
  },
];

export const mockSanityClient: SanityClient = {
  // Only the parts BlogList actually uses:
  fetch: async <T>(query: string): Promise<T> => {
    // If it’s your imported query, return the mock posts
    if (query === GET_ALL_POSTS) {
      return mockPosts as unknown as T;
    }
    console.warn("Unexpected query:", query);
    return [] as unknown as T;
  },
  config: () => ({
    projectId: "demo", // arbitrary, but required for imageUrlBuilder
    dataset: "production",
    apiVersion: "2024-01-01",
  }),
} as unknown as SanityClient;
