import * as yup from "yup";
export const CreationTicketSchema = yup.object({
  address: yup
    .string()
    .required("Obavezno polje")
    .min(6, "Adresa mora imati najmanje 6 karaktera"),
  description: yup
    .string()
    .required("Obavezno polje")
    .min(8, "Opis mora imati najmanje 8 karaktera"),
});
