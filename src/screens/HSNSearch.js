import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function HSNSearch() {
  const [search, setSearch] = useState();
  return (
    <div>
      <TextField
        id="standard-basic"
        label="Search HSN"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="contained" color="primary" href={`/hsn/${id}`}>
        Search
      </Button>
    </div>
  );
}

export default HSNSearch;
