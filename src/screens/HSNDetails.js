import React from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "HSN Code",
    headerName: "HSN Code",
    width: 150,
    editable: true,
  },
  {
    field: "UQC",
    headerName: "UQC",
    width: 150,
    editable: true,
  },
  {
    field: "Cap Limit",
    headerName: "Cap Limit",
    type: "number",
    width: 110,
    editable: true,
  },
];

function HSNDetails() {
  const [hsn, setHsn] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const req = await axios.get(`http://localhost:3002/hsn`);

      setHsn(req.data.data);
    };

    fetching();
  }, []);
  return (
    <div style={{ height: 400, width: "100%" }}>
      {hsn.map((data) => (
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      ))}
    </div>
  );
}

export default HSNDetails;
