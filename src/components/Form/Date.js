import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Date({ errorMessage, ...props }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en-gb"}>
      <DatePicker {...props}
        format="DD/MM/YYYY"
        slotProps={{
          textField: {
            helperText: errorMessage,

            variant: "filled",
            required: true,
          },
        }}
      />
    </LocalizationProvider>
  );
}
