import { Download } from "lucide-react";
import "./exportCSV.css";
import type { UserType } from "../../Utils/userInterface";
import Papa from "papaparse";
import { saveAs } from "file-saver";
export default function ExportCSV({ users }: { users: UserType[] }) {
  const handleExportCSV = () => {
    const csv = Papa.unparse(users);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "users.csv");
  };
  return (
    <div>
      <button className="export-csv-button" onClick={handleExportCSV}>
        {" "}
        <Download size={20} />
        Export CSV
      </button>
    </div>
  );
}
