import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function Button({ variant="extended", children, ...props }) {
  return (
    <Fab variant={variant} aria-label="Delete" {...props}>
      <AddIcon />
      NEW WISH
    </Fab>
  );
}
