import React, { useEffect } from "react";
import Img1 from "../../assets/img1.jpg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Users = ({users, fetchMessages}) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('user:token');
    localStorage.removeItem('user:detail');
    console.log("YOU ARE LOGOUT");
    navigate('/users/sign_in');
  }

  return (
    <div>
      <Button label="Logout" type="button" onClick={handleLogout}></Button>
      <div className="text-primary text-lg">People</div>
      {users.length > 0 ? (
        users.map(({ userId, user }) => {
          return (
            <div className="flex items-center py-8 border-b border-b-gray-300">
              <div
                className="cursor-pointer flex items-center"
                onClick={() => fetchMessages("new", user)}
              >
                <div>
                  <img
                    alt="img1"
                    src={Img1}
                    className="w-[60px] h-[60px] rounded-full p-[2px] border border-primary"
                  />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold">{user?.fullName}</h3>
                  <p className="text-sm font-light text-gray-600">
                    {user?.email}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center text-lg font-semibold mt-24">
          No Conversations
        </div>
      )}
    </div>
  );
};

export default Users;
