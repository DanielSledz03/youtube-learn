export interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

export interface YouTubeAPIResponse {
  items: YouTubeVideo[];
  error?: {
    message: string;
  };
}
