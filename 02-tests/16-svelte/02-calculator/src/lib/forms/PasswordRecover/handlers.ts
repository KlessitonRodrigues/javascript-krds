import { toast } from "../../../utils/toast";

export const onSubmit = async (form: Forms.SingIn) => {
  console.log(form);
  toast.success("Email sent successfully");
};
