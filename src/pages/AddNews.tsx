import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { useLocation, useNavigate } from "react-router-dom";

type NewsFormData = {
  header: string;
  subHeader: string;
  file: FileList | null;
  updatedAt: string;
};

const AddNews = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsFormData>();

  const mutation = useMutation(apiClient.addNews, {
    onSuccess: async () => {
      navigate(location.state?.from?.pathname || "/admin");
    },
  });

  const onSubmit = handleSubmit(async (formData: NewsFormData) => {
    const formDataToSend = new FormData();
    formDataToSend.append("header", formData.header);
    formDataToSend.append("subHeader", formData.subHeader);
    if (formData.file) {
      formDataToSend.append("file", formData.file[0]);
    }
    formDataToSend.append("updatedAt", formData.updatedAt);

    mutation.mutate(formDataToSend);
  });

  return (
    <div className="md:px-14 px-4 max-w-screen-2xl bg-gray-200 min-h-screen">
      <div className="container m-auto w-full max-w-2xl pt-16 ">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={onSubmit}
        >
          <h2 className="text-2xl font-bold mb-5">Add News</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Judul
              <input
                type="text"
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("header", {
                  required: "This field is required",
                })}
              ></input>
              {errors.header && (
                <span className="text-red-500">{errors.header.message}</span>
              )}
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Deskripsi
              <textarea
                rows={10}
                className="border rounded w-full py-1 px-2 font-normal h-[200px]"
                {...register("subHeader", {
                  required: "This field is required",
                })}
              ></textarea>
              {errors.subHeader && (
                <span className="text-red-500">{errors.subHeader.message}</span>
              )}
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              image
              <input
                type="file"
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("file", {
                  required: "Please upload a file",
                })}
              ></input>
              {errors.file && (
                <span className="text-red-500">{errors.file.message}</span>
              )}
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add News
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
