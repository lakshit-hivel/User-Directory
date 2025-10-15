import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { UserType } from "../../Utils/userInterface";
import "./deletedUserCards.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function DeletedUserCards() {
  const navigate = useNavigate();
  const { data: deletedUsers } = useQuery({
    queryKey: ["deleted-users"],
    queryFn: async () => {
      const res = await axios.get(
        "http://localhost:4000/api/all-deleted-users"
      );
      return res.data.data;
    },
  });

  const handleRestore = async (id: number) => {
    try {
      await axios.put("http://localhost:4000/api/restore-user/" + id);
      toast.success("User restored successfully.");
      navigate("/");
    } catch (error) {
      toast.error("Error restoring user.");
      console.log(id, error);
    }
  };

  return (
    <div>
      <h1 className="heading-deleted-users">Recently Deleted</h1>
      <div className="deleted-user-card-container">
        {deletedUsers?.map((user: UserType) => (
          <div key={user.id} className="deleted-user-card">
            <img src={user.profilePicture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <button onClick={() => handleRestore(user.id)}>Restore</button>
          </div>
        ))}
      </div>
    </div>
  );
}
