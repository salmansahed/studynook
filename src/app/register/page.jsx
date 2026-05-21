export const metadata = {
  title: "StudyNook - Register",
};

import RegistrationForm from "@/components/auth/RegistrationForm";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center my-10 px-3">
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
