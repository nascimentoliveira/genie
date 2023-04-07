import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function Button({ variant='extended', children, ...props }) {
  return (
    <Fab variant={variant} aria-label="Delete" {...props}>
      <AddIcon />
      NEW WISH
    </Fab>
  );
}
