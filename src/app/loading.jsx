import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div className="flex flex-col min-h-[80vh] sm:min-h-screen items-center justify-center gap-2">
      <Spinner size="xl" color="success" />
      <span className="text-xs text-muted">Please wait...</span>
    </div>
  );
};

export default loading;
