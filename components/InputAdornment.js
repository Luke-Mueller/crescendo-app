import { IconButton, InputAdornment as MuInputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function InputAdornment({ submitHandler }) {
  return (
    <MuInputAdornment position="end">
      <IconButton aria-label="submit search" onClick={submitHandler}>
        <SearchIcon color="secondary" />
      </IconButton>
    </MuInputAdornment>
  );
}
