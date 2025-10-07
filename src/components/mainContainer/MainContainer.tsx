import "./MainContainer.css";
import { Sidebar } from "./sidebar/Sidebar";
import { UserCards } from "./userCards/UserCards";

function MainConatiner({ searchQuery }: { searchQuery: string }) {
  return (
    <div className="mainContainer">
      <div className="one">
        <Sidebar />
      </div>
      <div className="two">
        <UserCards searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default MainConatiner;
