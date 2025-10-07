import "./sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Filters</h2>

      <section className="filter-group">
        <h3 className="filter-heading">Gender</h3>
        <label className="checkbox" htmlFor="gender-male">
          <input type="checkbox" id="gender-male" />
          <span>Male</span>
        </label>
        <label className="checkbox" htmlFor="gender-female">
          <input type="checkbox" id="gender-female" />
          <span>Female</span>
        </label>
        <label className="checkbox" htmlFor="gender-other">
          <input type="checkbox" id="gender-other" />
          <span>Other</span>
        </label>
      </section>

      <section className="filter-group">
        <h3 className="filter-heading">Department</h3>
        <label className="checkbox" htmlFor="dept-engineering">
          <input type="checkbox" id="dept-engineering" />
          <span>Engineering</span>
        </label>
        <label className="checkbox" htmlFor="dept-support">
          <input type="checkbox" id="dept-support" />
          <span>Support</span>
        </label>
        <label className="checkbox" htmlFor="dept-rnd">
          <input type="checkbox" id="dept-rnd" />
          <span>R&D</span>
        </label>
        <label className="checkbox" htmlFor="dept-hr">
          <input type="checkbox" id="dept-hr" />
          <span>HR</span>
        </label>
        <label className="checkbox" htmlFor="dept-pm">
          <input type="checkbox" id="dept-pm" />
          <span>Project Management</span>
        </label>
        <label className="checkbox" htmlFor="dept-marketing">
          <input type="checkbox" id="dept-marketing" />
          <span>Marketing</span>
        </label>
        <label className="checkbox" htmlFor="dept-services">
          <input type="checkbox" id="dept-services" />
          <span>Services</span>
        </label>
        <label className="checkbox" htmlFor="dept-accounting">
          <input type="checkbox" id="dept-accounting" />
          <span>Accounting</span>
        </label>
        <label className="checkbox" htmlFor="dept-training">
          <input type="checkbox" id="dept-training" />
          <span>Training</span>
        </label>
        <label className="checkbox" htmlFor="dept-legal">
          <input type="checkbox" id="dept-legal" />
          <span>Legal</span>
        </label>
      </section>

      <section className="filter-group">
        <h3 className="filter-heading">Role</h3>
        <label className="checkbox" htmlFor="role-admin">
          <input type="checkbox" id="role-admin" />
          <span>Admin</span>
        </label>
        <label className="checkbox" htmlFor="role-user">
          <input type="checkbox" id="role-user" />
          <span>User</span>
        </label>
        <label className="checkbox" htmlFor="role-moderator">
          <input type="checkbox" id="role-moderator" />
          <span>Moderator</span>
        </label>
      </section>
    </aside>
  );
}
