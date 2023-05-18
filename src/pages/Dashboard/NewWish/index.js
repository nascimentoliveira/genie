import { useState, useMemo } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import dayjs from "dayjs";

import PageTitle from "../../../components/Dashboard/PageTitle";
import Input from "../../../components/Form/Input";
import SubGoals from "../../../components/NewWish/SubGoals";
import Date from "../../../components/Form/Date";
import Currency from "../../../components/Form/Currency";

export default function NewWish() {

  const [wishName, setwishName] = useState(null);
  const [wishValue, setWishValue] = useState(null);
  const [wishImageURL, setWishImageURL] = useState(null);
  const [wishDate, setWishDate] = useState(null);
  const [errorDate, setErrorDate] = useState(null);

  const tomorrow = dayjs().add(1, "day");

  const errorMessage = useMemo(() => {
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

  return (
    <>
      <PageTitle title={"new wish"} />
      <Container>
        <Box
          component="form"
          sx={{
            boxShadow: 1,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            p: 2,
            width: "min-content",
            "& .MuiTextField-root": { m: 1, width: "300px" },
          }}
          noValidate
          autoComplete="off"
        >
          <Input
            required
            label="Name"
            type="text"
            variant="filled"
            value={wishName}
            placeholder="Wish Name"
            onChange={e => setwishName(e.target.value)}
          />

          <Currency
            required
            label="Wish Value"
            value={wishValue}
            onChange={(e, value) => setWishValue(value)}
          />

          <Date
            label="Resgate"
            minDate={tomorrow}
            value={wishDate}
            onChange={(newValue) => setWishDate(newValue)}
            onError={(newError) => setErrorDate(newError)}
            errorMessage={errorMessage}
          />

          <Input
            label="Image URL"
            type="text"
            variant="filled"
            value={wishImageURL}
            placeholder="Wish image URL"
            onChange={e => setWishImageURL(e.target.value)}
          />

        </Box>
        <div>
          {(wishDate && wishValue && !errorDate) && <SubGoals wishDate={wishDate} wishValue={wishValue} />}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
