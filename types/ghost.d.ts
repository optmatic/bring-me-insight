declare module "@tryghost/content-api" {
  export interface PostOrPage {
    id: string;
    uuid: string;
    title: string;
    slug: string;
    html: string;
    comment_id: string;
    feature_image: string;
    featured: boolean;
    visibility: string;
    created_at: string;
    updated_at: string;
    published_at: string;
    custom_excerpt: string;
    codeinjection_head: string;
    codeinjection_foot: string;
    custom_template: string;
    canonical_url: string;
    tags: Tag[];
    authors: Author[];
    primary_author: Author;
    primary_tag: Tag;
    url: string;
    excerpt: string;
    reading_time: number;
    access: boolean;
    comments: boolean;
    og_image: string;
    og_title: string;
    og_description: string;
    twitter_image: string;
    twitter_title: string;
    twitter_description: string;
    meta_title: string;
    meta_description: string;
    email_subject: string;
  }

  export interface Tag {
    id: string;
    name: string;
    slug: string;
    description: string;
    feature_image: string;
    visibility: string;
    meta_title: string;
    meta_description: string;
    url: string;
  }

  export interface Author {
    id: string;
    name: string;
    slug: string;
    profile_image: string;
    cover_image: string;
    bio: string;
    website: string;
    location: string;
    facebook: string;
    twitter: string;
    meta_title: string;
    meta_description: string;
    url: string;
  }

  export interface BrowseOptions {
    limit?: number;
    page?: number;
    filter?: string;
    include?: string[];
    fields?: string[];
    formats?: string[];
    order?: string;
  }

  export interface ReadOptions {
    include?: string[];
    formats?: string[];
  }

  export interface PostsOrPages {
    posts: PostOrPage[];
    meta: {
      pagination: {
        page: number;
        limit: number;
        pages: number;
        total: number;
        next: number | null;
        prev: number | null;
      };
    };
  }

  export default class GhostContentAPI {
    constructor(options: { url: string; key: string; version: string });

    posts: {
      browse(options?: BrowseOptions): Promise<PostsOrPages>;
      read(
        data: { id?: string; slug?: string },
        options?: ReadOptions
      ): Promise<PostOrPage>;
    };
  }
}
