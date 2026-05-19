import ArtoraInput from "./ArtoraInput";
import ArtoraButton from "@/ArtoraButton"
import { useForm } from "react-hook-form";

function ArtoraForm() {
  const { form, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <ArtoraInput
        label="Email"
        type="email"
        value={form.email}
        {...form("email",{ required: true })}
        placeholder="hello@example.com"
      />
      {errors.email?.type === "required" && <p className="text-red-500">Email is required</p>}

      <ArtoraInput
        label="Password"
        type="password"
        value={form.password}
        {...form("password", { required: true })}
        placeholder="••••••••"
      />

      <ArtoraButton size="lg" fullWidth type="submit">
        Sign in →
      </ArtoraButton>
    </form>
  );
}

export default ArtoraForm;
