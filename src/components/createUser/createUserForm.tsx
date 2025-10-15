import { useState } from "react";
import "./createUserForm.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreateUserForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    gender: "",
    email: "",
    phone: "",
    profilePicture: "",
    address: "",
    city: "",
    state: "",
    company: "",
    title: "",
    department: "",
    university: "",
    role: "",
  });

  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/new-user",
        formData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(res.data);
      toast.success("User created successfully");
      navigate("/");
      setFormData({
        name: "",
        age: 0,
        gender: "",
        email: "",
        phone: "",
        profilePicture: "",
        address: "",
        city: "",
        state: "",
        company: "",
        title: "",
        department: "",
        university: "",
        role: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to create user");
    }
  };

  return (
    <>
      <Toaster />
      <div className="user-form-page">
        <div className="user-form-container">
          <h1 className="user-form-title">Create User</h1>
          <form className="user-form" onSubmit={handleCreateUser}>
            {/* Personal Information Section */}
            <div className="form-section">
              <h3 className="section-title">Personal Information</h3>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name *</label>
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
                <div className="form-field">
                  <label htmlFor="age">Age *</label>
                  <input
                    id="age"
                    type="number"
                    placeholder="30"
                    required
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: Number(e.target.value) })
                    }
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="gender">Gender *</label>
                  <select
                    id="gender"
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
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-field full-width">
                  <label htmlFor="profilePicture">Profile Picture URL *</label>
                  <input
                    id="profilePicture"
                    type="url"
                    placeholder="https://..."
                    required
                    value={formData.profilePicture}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        profilePicture: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="form-section">
              <h3 className="section-title">Contact Information</h3>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="email">Email *</label>
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
                <div className="form-field">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 555 123 4567"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="form-section">
              <h3 className="section-title">Address</h3>
              <div className="form-row">
                <div className="form-field full-width">
                  <label htmlFor="address">Address *</label>
                  <input
                    id="address"
                    type="text"
                    placeholder="123 Main St"
                    required
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="city">City *</label>
                  <input
                    id="city"
                    type="text"
                    placeholder="New York"
                    required
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="state">State *</label>
                  <input
                    id="state"
                    type="text"
                    placeholder="NY"
                    required
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Work Information Section */}
            <div className="form-section">
              <h3 className="section-title">Work Information</h3>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="company">Company *</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Company Name"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="title">Title *</label>
                  <input
                    id="title"
                    type="text"
                    placeholder="Job Title"
                    required
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="department">Department *</label>
                  <select
                    id="department"
                    required
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Select Department
                    </option>
                    <option value="engineering">Engineering</option>
                    <option value="support">Support</option>
                    <option value="legal">Legal</option>
                    <option value="hr">HR</option>
                    <option value="project management">
                      Project Management
                    </option>
                    <option value="marketing">Marketing</option>
                    <option value="services">Services</option>
                    <option value="accounting">Accounting</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="university">University *</label>
                  <input
                    id="university"
                    type="text"
                    placeholder="University Name"
                    required
                    value={formData.university}
                    onChange={(e) =>
                      setFormData({ ...formData, university: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="role">Role *</label>
                  <select
                    id="role"
                    required
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Select Role
                    </option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="manager">Moderator</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="user-form-actions">
              <button type="submit" className="user-form-submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
