import * as yup from "yup";
export const ProfileEditValidationSchema = yup.object({
  name: yup
    .string()
    .required("Obavezno polje")
    .min(4, "Ime mora imati najmanje 4 karaktera"),
  address: yup
    .string()
    .required("Obavezno polje")
    .min(8, "Adresa mora imati najmanje 8 karaktera"),
});
