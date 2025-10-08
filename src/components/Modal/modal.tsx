import type { UserType } from "../../Utils/userInterface";
import "./modal.css";
import { CircleX } from "lucide-react";

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
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="user-basic-info">
          <img src={user.image} alt={user.firstName} />
          {user.firstName} {user.lastName}
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
          <p>Address: {user.address.address}</p>
          <p>City: {user.address.city}</p>
          <p>State: {user.address.state}</p>
          <p>University: {user.university}</p>
          <p>Company: {user.company.name}</p>
          <p>Title: {user.company.title}</p>
          <p>Department: {user.company.department}</p>
          <p>Role: {user.role}</p>
        </div>
        <div className="close-icon">
          <CircleX onClick={() => setOpen(false)} />
        </div>
      </div>
    </div>
  );
}
