import { useState } from "react";
import CurrencyTextField from "@unicef/material-ui-currency-textfield"


import PageTitle from "../../../components/Dashboard/PageTitle";
import Input from "../../../components/Form/Input";

export default function NewWish() {
  const [wishName, setwishName] = useState("");
  const [wishValue, setWishValue] = useState("");
  const [wishImageURL, setWishImageURL] = useState("");

  console.log("atualizou esta pagina");

  return (
    <>
      <PageTitle title={"new wish"} />
      
      <form noValidate autoComplete="off">
        <Input 
          required
          label="Name" 
          type="text" 
          variant="filled" 
          value={wishName}
          placeholder="Name"
          onChange={e => setwishName(e.target.value)} 
        />

        <CurrencyTextField 
          required
          label="Value"
          variant="filled" 
          value={wishValue}
          currencySymbol="R$"
          minimumValue="0"
          outputFormat="string"
          decimalCharacter=","
          digitGroupSeparator="."
          onChange={(e, value)=> setWishValue(value)}
          placeholder="0,00"
          style={{"margin-top": "8px"}}
        />

        <Input 
          label="Image URL" 
          type="text" 
          variant="filled" 
          value={wishImageURL}
          placeholder="Image URL"
          onChange={e => setWishImageURL(e.target.value)} 
        />
      </form>
    </>
  );
}
