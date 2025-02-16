import React, { useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const API_KEY =process.env.API_KEY; ;
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

// Custom Hook for fetching YouTube search results
const useYouTubeSearch = (query) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchVideos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          part: "snippet",
          maxResults: 5,
          q: query,
          key: API_KEY,
        },
      });
      setVideos(response.data.items);
      setError(null);
    } catch (err) {
      setError("Failed to fetch videos");
    }
    setLoading(false);
  };

  return { videos, loading, error, searchVideos };
};

const App = () => {
  const [query, setQuery] = useState("");
  const { videos, loading, error, searchVideos } = useYouTubeSearch(query);

  const handleSearch = () => {
    if (query.trim()) searchVideos();
  };

  return (
    <div className="p-5 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">YouTube Video Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search videos..."
        className="border p-2 w-full"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 mt-2 w-full">
        Search
      </button>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div>
        {videos.map((video) => (
          <div key={video.id.videoId} className="mt-4">
            <h3 className="font-semibold">{video.snippet.title}</h3>
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
