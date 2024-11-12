import { FaSpinner } from "react-icons/fa";

export default function LoadingSkeleton() {
  return (
    <div className="flex items-center justify-center animate-spin">
      <FaSpinner
        size={128}
        className="stroke-primary-accent fill-primary-accent"
      />
    </div>
  );
}
