import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";

const SignOutButton = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <div className="container bg-yellow flex justify-end py-1 items-center">
      <div>
        <button
          onClick={handleClick}
          className="text-red px-3 font-bold hover:underline text-xl"
        >
          Keluar
        </button>
      </div>
    </div>
  );
};

export default SignOutButton;
