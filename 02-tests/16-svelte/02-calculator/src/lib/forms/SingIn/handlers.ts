import { toast } from "../../../utils/toast";

export const onSubmit = async (form: Forms.SingIn) => {
  try {
    const { email, password } = form;

    if (email !== "test" || password !== "test") {
      throw new Error("Invalid email or password");
    }
  } catch (err: any) {
    toast.error("Login Error", err.message);
  }
};
