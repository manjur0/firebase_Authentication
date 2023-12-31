import { useEffect, useState } from "react";
import User from "./User";
import { useNavigation } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  const fcthData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  };
  // load user data
  useEffect(() => {
    navigation.state === "loading" ? <Loader /> : fcthData();
  }, []);
  return (
    <div className="container mx-auto w-3/4 my-8">
      <h1 className="text-5xl font-bold text-center my-12">Our Team </h1>
      <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
