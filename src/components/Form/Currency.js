import CurrencyTextField from "@unicef/material-ui-currency-textfield"

export default function Currency({ ...props }) {
  return (
    <CurrencyTextField {...props}
      variant="filled"
      currencySymbol="R$"
      minimumValue="0"
      outputFormat="string"
      decimalCharacter=","
      digitGroupSeparator="."
      placeholder="0,00"
      style={{ "marginTop": "8px" }}
    />
  );
}