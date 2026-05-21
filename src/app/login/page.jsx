export const metadata = {
  title: "StudyNook - Login",
};

import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center my-10 px-3">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
