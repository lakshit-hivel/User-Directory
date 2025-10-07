import { useEffect, useState } from "react";
import "./UserCards.css";
import axios from "axios";
import { Mail, Phone, User } from "lucide-react";

interface Address {
  address: string;
  city: string;
  postalCode: string;
  state: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  image: string;
  height: number;
  weight: number;
  address: Address;
  birthDate: string;
  company: {
    name: string;
    title: string;
    department: string;
    address: Address;
  };
}

export function UserCards({ searchQuery }: { searchQuery: string }) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("https://dummyjson.com/users");
      setUsers(res.data.users);
    };
    fetchUsers();
  }, []);
  console.log(users);

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <p>{searchQuery}</p>
      <div className="user-cards-container">
        {filteredUsers.map((user, index) => (
          <div className="user-card" key={index}>
            <img className="user-img" src={user.image} alt="" />
            <div className="user-card-info">
              <User size={20} />
              <p>
                {user.firstName} {user.lastName}
              </p>
            </div>
            <div className="user-card-info">
              <Mail size={20} />
              <p>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </p>
            </div>
            <div className="user-card-info">
              <Phone size={20} />
              <p>
                <a href={`tel:${user.phone}`}>{user.phone}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
