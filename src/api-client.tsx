const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const fetchNews = async () => {
  const response = await fetch(`${API_BASE_URL}/news`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching news");
  }
  const data = await response.json();
  console.log(data.data);
  return data.data;
};
