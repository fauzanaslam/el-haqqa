import { useAppContext } from "../contexts/AppContext";
import { useMutation, useQuery } from "react-query";
import * as apiClient from "../api-client";
import SignOutButton from "../components/signoutButton";
import Login from "./Login";

interface NewsItem {
  id: string;
  header: string;
  subHeader: string;
  url: string;
  updatedAt: string;
}

const AdminPage = () => {
  const {
    data: newsData,
    isLoading,
    isError,
  } = useQuery("fetchQuery", () => apiClient.fetchNewsAdmin());

  const deleteMutation = useMutation((newsId: string) =>
    apiClient.deleteNews(newsId)
  );

  const { isLoggedIn } = useAppContext();

  if (!isLoggedIn) {
    return <Login />;
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  console.log(newsData);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    return `${day} ${month} ${year}`;
  };

  const handleDeleteNews = async (newsId: string) => {
    try {
      await deleteMutation.mutateAsync(newsId);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  return (
    <>
      <div className="bg-yellow">
        <SignOutButton />
      </div>
      <div className="my-10 md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className="my-10">
          <a href="/admin/add-news">
            <button className="bg-primary text-white rounded px-5 py-2 hover:bg-gray-500">
              add news
            </button>
          </a>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 item-start md:gap-12 gap-8">
          {newsData.map((news: NewsItem) => (
            <div key={news.id}>
              <a href={`/news/${news.id}`}>
                <div className="bg-[rgba(255, 255, 255, 0.04)] md:flex items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer gap-3">
                  <div>
                    <img
                      src={news.url}
                      alt="terupdate"
                      className="max-h-[200px] max-w-[290px]"
                    />
                  </div>
                  <div className="h-[100%]">
                    <h5 className="text-2xl font-seibold text-primary mt-5 hover:text-gray-300">
                      {news.header}
                    </h5>
                    <div className="flex gap-5">
                      <p className="text-red">penulis</p>
                      <p className="text-yellow">
                        {formatDate(news.updatedAt)}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <button
                onClick={() => handleDeleteNews(news.id)}
                className="bg-red text-white rounded px-5 py-2 my-2 hover:bg-gray-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
