import { Link } from "react-router-dom";
import "./sidebar.css";
import { Trash2 } from "lucide-react";

export function Sidebar({
  setFilterQuery,
}: {
  setFilterQuery: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setFilterQuery((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((item) => item !== value);
      }
    });
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Filters</h2>

      <section className="filter-group">
        <h3 className="filter-heading">Gender</h3>
        {["male", "female"].map((gender) => (
          <label key={gender} className="checkbox">
            <input
              type="checkbox"
              value={gender}
              onChange={handleCheckboxChange}
            />
            <span>{gender}</span>
          </label>
        ))}
      </section>

      <section className="filter-group">
        <h3 className="filter-heading">Department</h3>
        {[
          "engineering",
          "support",
          "research & development",
          "hr",
          "project management",
          "marketing",
          "services",
          "accounting",
          "training",
          "legal",
        ].map((dept) => (
          <label key={dept} className="checkbox">
            <input
              type="checkbox"
              value={dept}
              onChange={handleCheckboxChange}
            />
            <span>{dept}</span>
          </label>
        ))}
      </section>

      <section className="filter-group">
        <h3 className="filter-heading">Role</h3>
        {["admin", "user", "moderator"].map((role) => (
          <label key={role} className="checkbox">
            <input
              type="checkbox"
              value={role}
              onChange={handleCheckboxChange}
            />
            <span>{role}</span>
          </label>
        ))}
      </section>

      <Link to="/recently-deleted">
        <section className="deletedUsers">
          <div className="deletedUsers-icon">
            <Trash2 color="red" />
          </div>
          <div className="deletedUsers-text">Recently Deleted</div>
        </section>
      </Link>
    </aside>
  );
}
