export const metadata = {
  title: "StudyNook - Login",
};

import LoginForm from "@/components/auth/LoginForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  if (user) {
    return redirect("/");
  }

  return (
    <div className="flex items-center justify-center my-10 px-3">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
