export const metadata = {
  title: "StudyNook - Register",
};

import RegistrationForm from "@/components/auth/RegistrationForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  if (user) {
    return redirect("/");
  }
  return (
    <div className="flex items-center justify-center my-10 px-3">
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
