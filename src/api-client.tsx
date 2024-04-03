type NewsType = {
  id: string;
  header: string;
  subHeader: string;
  url: string;
  updatedAt: string;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const fetchNews = async () => {
  const response = await fetch(`${API_BASE_URL}/news`, {});

  if (!response.ok) {
    throw new Error("Error fetching news");
  }
  const data = await response.json();
  return data.data;
};

export const fetchNewsAdmin = async () => {
  const response = await fetch(`${API_BASE_URL}/admin`, {});

  if (!response.ok) {
    throw new Error("Error fetching news");
  }
  const data = await response.json();
  return data.data;
};

export const fetchNewsById = async (newsId: string): Promise<NewsType> => {
  const response = await fetch(`${API_BASE_URL}/news/${newsId}`, {});

  if (!response.ok) {
    throw new Error("Error fetching news");
  }
  const data = await response.json();
  return data.data;
};

export const deleteNews = async (newsId: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/${newsId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete news");
    }

    return await response.json(); // Jika server memberikan respons JSON
  } catch (error) {
    console.error("Error deleting news:", error);
    throw error;
  }
};

export const addNews = async (formData: FormData): Promise<NewsType | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/add-news`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Error adding new news");
    }

    const data = await response.json();
    return data; // Adjust the data structure based on your API response
  } catch (error) {
    console.error("Error in addNews:", error);
    return null;
  }
};
