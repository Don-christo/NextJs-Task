import z from "zod";

export const addSchoolSchema = z.object({
  name: z.string().min(2, "name is required"),
  address: z.string().min(2, "address is required"),
  city: z.string().min(2, "city is required"),
  state: z.string().min(2, "state is required"),
  contact: z.number().min(11, "phone number is required"),
  image: z.string().min(2, "image is required"),
  email_id: z.string().email({ message: "email is invalid" }),
});
