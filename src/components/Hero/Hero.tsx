import { Search } from "lucide-react";
import "./hero.css";

function Hero() {
  return (
    <div>
      <div className="noto-sans-regular hero-container">
        <h1 className="hero-heading outfit">User Directory</h1>
        <p className="hero-subheading">
          Find people across the directory, access their profiles and follow or
          unfollow them.
        </p>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search users..."
            onChange={(e) => e.target.value}
            className="search-bar"
          />
          <button className="search-button">
            <Search size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
