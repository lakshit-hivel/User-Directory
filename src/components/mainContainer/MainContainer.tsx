import "./MainContainer.css";
import { Sidebar } from "./sidebar/Sidebar";
import { UserCards } from "./userCards/UserCards";

function MainConatiner() {
  return (
    <div className="mainContainer">
      <div className="one">
        <Sidebar />
      </div>
      <div className="two">
        <UserCards />
      </div>
    </div>
  );
}

export default MainConatiner;
