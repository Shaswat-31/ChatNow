import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  const navigate = useNavigate();

  return (
    <div className="mt-auto flex justify-between">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer mt-5 transition-transform transform hover:scale-105 hover:shadow-3xl"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
      <button
        onClick={() => navigate("/BackgroundSelection")}
        className="btn btn-md bg-white text-black hover:text-white transition-transform transform hover:scale-105 hover:shadow-3xl"
      >
        Change Background
      </button>
    </div>
  );
};

export default LogoutButton;
