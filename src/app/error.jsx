"use client";

import { Button } from "@heroui/react"; // HeroUI button import
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter();
  const handleGoHome = () => {
    router.push("/");
  };
  const handleTryAgain = () => {
    router.refresh();
  };
  return (
    <div className="min-h-[80vh] sm:min-h-screen flex flex-col items-center justify-center p-6 text-center">
      {/* Icon Section */}
      <div className="text-8xl sm:text-9xl mb-6">⚠️</div>

      {/* Message Section */}
      <h1 className="text-3xl sm:text-4xl font-extrabold  dark:text-gray-100 mb-2">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
        We are sorry, but our server encountered an error and could not load the
        page. Please try again. 🙂
      </p>
      {/* Actions Buttons */}
      <div className="flex gap-4">
        <Button variant="danger" onClick={handleTryAgain}>Try Again</Button>
        <Button variant="outline" onClick={handleGoHome}>
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
