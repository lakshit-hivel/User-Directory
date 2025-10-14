import axios from "axios";
import type { UserType } from "../../Utils/userInterface";
import "./modal.css";
import { CircleX, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

export function Modal({
  open,
  user,
  setOpen,
}: {
  open: boolean;
  user: UserType;
  setOpen: (open: boolean) => void;
}) {
  if (!open) return null;

  const handleDelete = async (id: number) => {
    const res = await axios.delete(
      "http://localhost:4000/api/delete-user/" + id
    );
    if (res.status === 200) {
      toast.success("User deleted successfully");
      setOpen(false);
      window.location.reload();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="user-basic-info">
          <img src={user.profilePicture} alt={user.name} />
          {user.name}
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
        </div>
        <div className="user-info">
          <p>
            Email: <a href={`mailto:${user.email}`}>{user.email}</a>{" "}
          </p>
          <p>
            Phone: <a href={`tel:${user.phone}`}>{user.phone}</a>{" "}
          </p>
          <p>Address: {user.address}</p>
          <p>City: {user.city}</p>
          <p>State: {user.state}</p>
          <p>University: {user.university}</p>
          <p>Company: {user.name}</p>
          <p>Title: {user.title}</p>
          <p>Department: {user.department}</p>
          <p>Role: {user.role}</p>
        </div>
        <div className="icons">
          <Trash2 color="red" onClick={() => handleDelete(user.id)} />
          <CircleX onClick={() => setOpen(false)} />
        </div>
      </div>
    </div>
  );
}
