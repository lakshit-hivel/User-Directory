import { useState } from "react";
import "./createUserForm.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function CreateUserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    profilePicture: "",
    role: "",
    phone: "",
    password: "",
    country: "",
  });

  const handleCreateUser = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/new-user",
        formData
      );
      console.log(res.data);
      toast.success("User created successfully");
      setFormData({
        name: "",
        email: "",
        gender: "",
        profilePicture: "",
        role: "",
        phone: "",
        password: "",
        country: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Toaster />
      <div className="user-form-page">
        <div className="user-form-container">
          <h1 className="user-form-title">Create User</h1>
          <form className="user-form" noValidate>
            <div className="user-form-row">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="user-form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="user-form-row">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                defaultValue=""
                required
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="user-form-row">
              <label htmlFor="profilePicture">Profile Picture URL</label>
              <input
                id="profilePicture"
                type="url"
                placeholder="https://..."
                value={formData.profilePicture}
                onChange={(e) =>
                  setFormData({ ...formData, profilePicture: e.target.value })
                }
              />
            </div>

            <div className="user-form-row">
              <label htmlFor="role">Role</label>
              <input
                id="role"
                type="text"
                placeholder="e.g. Admin"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              />
            </div>

            <div className="user-form-row">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 555 123 4567"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div className="user-form-row">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <div className="user-form-row">
              <label htmlFor="country">Country</label>
              <input
                id="country"
                type="text"
                placeholder="United States"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
            </div>

            <div className="user-form-actions">
              <button
                onClick={handleCreateUser}
                type="submit"
                className="user-form-submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
