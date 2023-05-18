import { useState, useMemo } from "react";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import Currency from "../Form/Currency";
import Date from "../Form/Date";

export default function AddSubGoal({ subGoals, setSubGoals }) {

  const [open, setOpen] = useState(false);
  const [subGoalValue, setSubGoalValue] = useState(null);
  const [subGoalDate, setSubGoalDate] = useState(null);
  const [errorDate, setErrorDate] = useState(null);

  const errorMessageDate = useMemo(() => {
    switch (errorDate) {
      case "minDate": {
        return "This date must be greater than today!";
      }

      case "invalidDate": {
        return "Your date is not valid";
      }

      default: {
        return "DD/MM/YYYY";
      }
    }
  }, [errorDate]);

  const minDate = () => {
    return subGoalValue ?
      subGoals[subGoals.findIndex(obj => obj.value >= subGoalValue) - 1]?.date || subGoals[0].date :
      subGoals[0].date;
  };

  const maxDate = () => {
    return subGoalValue ?
      subGoals[subGoals.findIndex(obj => obj.value > subGoalValue)]?.date || subGoals[subGoals.length - 1].date :
      subGoals[subGoals.length - 1].date;
  };

  const minValue = () => {
    return (subGoalDate) ?
      subGoals[subGoals.findIndex(obj => obj.date >= subGoalDate) - 1]?.value || subGoals[0].value :
      subGoals[0].value;
  };

  const maxValue = () => {
    return (subGoalDate) ?
      subGoals[subGoals.findIndex(obj => obj.date >= subGoalDate)]?.value || subGoals[subGoals.length - 1].value :
      subGoals[subGoals.length - 1].value;
  };

  const valueIsValid = () => {

    return (!subGoalValue || (subGoalValue > minValue() && subGoalValue < maxValue()));
  };

  const helperMessage = () => {
    if (subGoalValue <= minValue()) {
      return ("The value must be greater than " +
        minValue().toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }) + "!");
    }
    else if (subGoalValue >= maxValue()) {
      return ("The value must be less than " +
        maxValue().toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }) + "!");
    } else {
      return ("Enter a value between " +
        minValue().toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }) + " and " +
        maxValue().toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }) + "!");
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setSubGoalDate(null);
    setSubGoalValue(null);
    setOpen(false);
  };

  const handleClickAdd = () => {
    setSubGoals([...subGoals, { date: subGoalDate, value: Number(subGoalValue) }]
      .sort((objA, objB) => {
        const dateA = dayjs(objA.date);
        const dateB = dayjs(objB.date);
        if (dateA.isBefore(dateB)) {
          return -1;
        }
        if (dateA.isAfter(dateB)) {
          return 1;
        }
        return 0;
      }));
    setSubGoalDate(null);
    setSubGoalValue(null);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Subgoals
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add intermediate goals</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a date and value.
          </DialogContentText>
          <Box
            component="form"
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              width: "min-content",
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            <Currency
              required
              label="Goal Value"
              value={subGoalValue}
              minimumValue={String(minValue() + 1)}
              maximumValue={String(maxValue() - 1)}
              onChange={(e, value) => setSubGoalValue(value)}
              error={!valueIsValid()}
              helperText={helperMessage()}
            />

            <Date
              label="Goal Date"
              value={subGoalDate}
              minDate={dayjs(minDate()).add(1, "day")}
              maxDate={dayjs(maxDate()).subtract(1, "day")}
              onChange={(newValue) => setSubGoalDate(newValue)}
              onError={(newError) => setErrorDate(newError)}
              errorMessage={errorMessageDate}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClickAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
