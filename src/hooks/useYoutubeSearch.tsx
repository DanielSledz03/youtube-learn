import { YouTubeAPIResponse, YouTubeVideo } from "@types";
import { useState, useEffect } from "react";

// NOTE: For this recruitment task, the API key is stored using EXPO_PUBLIC_.
// I understand this is not secure and would typically use a backend proxy or secure storage in production.
const API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_API_KEY;

export function useYouTubeSearch(query: string) {
  const [results, setResults] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${API_KEY}`;
        const response = await fetch(url);
        const data: YouTubeAPIResponse = await response.json();

        if (response.ok) {
          setResults(data.items);
        } else {
          setError(data.error?.message || "Something went wrong");
        }
      } catch (err) {
        setError((err as Error).message || "Network error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { results, loading, error };
}
