import GhostContentAPI from "@tryghost/content-api";

let api: GhostContentAPI | null = null;

function getGhostAPI() {
  if (!api) {
    const url = process.env.NEXT_PUBLIC_GHOST_URL;
    const key = process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY;

    if (!url || !key) {
      throw new Error(
        "Ghost API configuration is missing. Please check your environment variables."
      );
    }

    console.log("Initializing Ghost API with URL:", url);

    try {
      api = new GhostContentAPI({
        url,
        key,
        version: "v5.0",
      });
    } catch (error) {
      console.error("Error initializing Ghost API:", error);
      throw error;
    }
  }

  return api;
}

export async function getPosts(
  page: number = 1,
  limit: number = 10,
  filter?: string
) {
  try {
    const ghostApi = getGhostAPI();
    console.log("Fetching posts with params:", { page, limit, filter });

    const posts = await ghostApi.posts
      .browse({
        limit,
        page,
        include: ["tags", "authors"],
        order: "published_at DESC",
        filter,
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        if (err.response) {
          console.error("Response data:", err.response.data);
          console.error("Response status:", err.response.status);
        }
        return null;
      });

    return posts;
  } catch (error) {
    console.error("Error in getPosts:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return null;
  }
}

export async function getPost(slug: string) {
  try {
    const ghostApi = getGhostAPI();
    console.log("Fetching post with slug:", slug);

    const post = await ghostApi.posts
      .read({ slug }, { include: ["tags", "authors"] })
      .catch((err) => {
        console.error("Error fetching post:", err);
        if (err.response) {
          console.error("Response data:", err.response.data);
          console.error("Response status:", err.response.status);
        }
        return null;
      });

    return post;
  } catch (error) {
    console.error("Error in getPost:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return null;
  }
}

export async function getRelatedPosts(tags: string[], limit: number = 3) {
  try {
    const ghostApi = getGhostAPI();
    console.log("Fetching related posts with tags:", tags);

    const posts = await ghostApi.posts
      .browse({
        limit,
        filter: `tag:[${tags.join(",")}]`,
        include: ["tags", "authors"],
      })
      .catch((err) => {
        console.error("Error fetching related posts:", err);
        if (err.response) {
          console.error("Response data:", err.response.data);
          console.error("Response status:", err.response.status);
        }
        return [];
      });

    return posts;
  } catch (error) {
    console.error("Error in getRelatedPosts:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return [];
  }
}

export default api;
