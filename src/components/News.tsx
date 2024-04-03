// import hackathon from "../assets/hackathon.png";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";

interface NewsItem {
  id: string;
  header: string;
  subHeader: string;
  url: string;
  updatedAt: string;
}

const News = () => {
  const {
    data: newsData,
    isLoading,
    isError,
  } = useQuery("fetchQuery", () => apiClient.fetchNews());

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

  return (
    <div className="my-10 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 item-start md:gap-12 gap-8">
        {newsData.map((news: NewsItem) => (
          <a href={`/news/${news.id}`} key={news.id}>
            <div className="bg-[rgba(255, 255, 255, 0.04)] md:flex hover:-translate-y-4 transition-all duration-300 cursor-pointer gap-3">
              <div>
                <img
                  src={news.url}
                  alt="terupdate"
                  className="max-h-[200px] max-w-[300px]"
                />
              </div>
              <div className="h-[100%]">
                <h5 className="text-2xl font-semibold text-primary mt-5 hover:text-gray-300">
                  {news.header}
                </h5>
                <div className="flex gap-5">
                  <p className="text-red">penulis</p>
                  <p className="text-yellow">{formatDate(news.updatedAt)}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;
