import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

export type SignInFormData = {
  username: string;
  password: string;
};
const Login = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/admin");
      window.location.reload();
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <div className="md:px-14 px-4 max-w-screen-2xl bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="container m-auto w-full max-w-2xl py-2">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
          onSubmit={onSubmit}
        >
          <h2 className="text-2xl font-bold mb-5 flex justify-center">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              username
              <input
                type="text"
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("username", {
                  required: "This field is required",
                })}
              ></input>
              {errors.username && (
                <span className="text-red-500">{errors.username.message}</span>
              )}
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              password
              <input
                type="password"
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("password", {
                  required: "This field is required",
                })}
              ></input>
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
