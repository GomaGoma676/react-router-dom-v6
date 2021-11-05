import { useNavigate } from "react-router-dom";
export const Auth = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 font-mono">
      <h1>Auth</h1>
      <button
        className="mt-3 px-3 py-2 text-white bg-indigo-600 rounded"
        onClick={() => navigate("todo")}
      >
        Navigate to Todo
      </button>
    </div>
  );
};
