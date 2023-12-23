import { Link } from "react-router-dom";

const User = ({ user: { id, name, username, email } }) => {
  console.log(id, name, username, email);
  return (
    <div>
      <div className="relative h-[400px] w-[300px] rounded-lg">
        <img
          src="https://picsum.photos/200"
          alt=""
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{name}</h1>
          <p className="mt-2 text-sm text-gray-300">{username}</p>
          <Link to={`/users/${id}`}>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              More Details →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
