import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-client";

const NewsDetail = () => {
  const { newsId } = useParams();

  const {
    data: news,
    isLoading,
    isError,
  } = useQuery(
    ["fetchTahunAjaran", newsId],
    () => apiClient.fetchNewsById(newsId ?? ""),
    {
      enabled: !!newsId,
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  console.log(news);

  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
      <div className="gradientBg rounded-xl md:p-9 px-4 py-9">
        <div>
          <div className="text-center">
            <h2 className="md:text-7xl text-4xl font-bold text-white my-8 leading-relaxed">
              {news?.header}
            </h2>
          </div>
          <div className="flex justify-center">
            <img src={news?.url} alt="banner" className="w-[90%]" />
          </div>
          <div className="text-center">
            <p className="text-black text-2xl my-8">{news?.subHeader}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
