import "./UserCards.css";
import axios from "axios";
import { Mail, Phone, User } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Modal } from "../../Modal/modal";
import type { UserType } from "../../../Utils/userInterface";
import { useDispatch } from "react-redux";
import { setUsers } from "../../../Utils/features/userSlice";

export function UserCards({
  searchQuery,
  filterQuery,
}: {
  searchQuery: string;
  filterQuery: string[];
}) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<UserType>();
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("https://dummyjson.com/users");
      dispatch(setUsers(res.data.users));
      return res.data.users;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  const searchUsers = users?.filter(
    (user: UserType) =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredUsers =
    filterQuery.length === 0
      ? searchUsers
      : searchUsers.filter((user: UserType) =>
          filterQuery.some(
            (filter) =>
              user.gender.toLowerCase() === filter.toLowerCase() ||
              user.company.department.toLowerCase() === filter.toLowerCase() ||
              user.role?.toLowerCase() === filter.toLowerCase()
          )
        );

  const openModal = (user: UserType) => {
    setShowModal(true);
    setSelectedUser(user);
  };

  return (
    <div>
      <div className="user-cards-container">
        {filteredUsers.map((user: UserType, index: number) => (
          <div
            onClick={() => openModal(user)}
            className="user-card"
            key={index}
          >
            <img className="user-img" src={user.image} alt="" />
            <div className="user-card-info">
              <User size={20} />
              <p>
                {user.firstName} {user.lastName}
              </p>
            </div>
            <div className="user-card-info">
              <Mail size={20} />
              <p>{user.email}</p>
            </div>
            <div className="user-card-info">
              <Phone size={20} />
              <p>{user.phone}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedUser && (
        <Modal open={showModal} setOpen={setShowModal} user={selectedUser} />
      )}
    </div>
  );
}
