import { useState } from "react";
import "./MainContainer.css";
import { Sidebar } from "./sidebar/Sidebar";
import { UserCards } from "./userCards/UserCards";
import { backendURL } from "../../Utils/backendURL";

function MainConatiner({ searchQuery }: { searchQuery: string }) {
  const [filterQuery, setFilterQuery] = useState<string[]>([]);

  return (
    <div className="mainContainer">
      <div className="one">
        <Sidebar setFilterQuery={setFilterQuery} />
      </div>
      <div className="two">
        <UserCards
          searchQuery={searchQuery}
          filterQuery={filterQuery}
          getAPI={`${backendURL}/api/all-users`}
        />
      </div>
    </div>
  );
}

export default MainConatiner;
