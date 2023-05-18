import { useState } from "react";
import dayjs from "dayjs";
import {
  Stepper,
  Step,
  StepLabel,
  Box
} from "@mui/material";

import AddSubGoal from "./AddSubGoal";

export default function SubGoals({ wishDate, wishValue }) {
  const today = dayjs();
  const [subGoals, setSubGoals] = useState([
    { date: today, value: 0 },
    { date: dayjs(wishDate), value: Number(wishValue) },
  ]);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper orientation="vertical">
        {subGoals.map((subGoal, index) => (
          <Step key={index}>
            <StepLabel>
              {subGoal.date.format("DD/MM/YYYY") + " - " +
                Number(subGoal.value).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <AddSubGoal subGoals={subGoals} setSubGoals={setSubGoals}/>
    </Box>
  );
}
