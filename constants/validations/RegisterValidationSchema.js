import * as yup from "yup";
export const RegisterSchema = yup.object({
  email: yup
    .string()
    .required("Obavezno polje")
    .min(6, "Email mora imati najmanje 6 karaktera"),
  password: yup
    .string()
    .required("Obavezno polje")
    .min(8, "Lozinka mora imati najmanje 8 karaktera"),
  password_confirmation: yup
    .string()
    .required("Obavezno polje")
    .min(8, "Lozinka mora imati najmanje 8 karaktera"),
});
