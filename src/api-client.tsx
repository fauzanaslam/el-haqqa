type NewsType = {
  id: string;
  header: string;
  subHeader: string;
  url: string;
  updatedAt: string;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const fetchNews = async () => {
  const response = await fetch(`${API_BASE_URL}/news`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching news");
  }
  const data = await response.json();
  return data.data;
};

export const fetchNewsById = async (newsId: string): Promise<NewsType> => {
  const response = await fetch(`${API_BASE_URL}/news/${newsId}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching news");
  }
  const data = await response.json();
  return data.data;
};
