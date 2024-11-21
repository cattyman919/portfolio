import { FaSpinner } from "react-icons/fa";

export default function LoadingSkeleton() {
  return (
    <section className="flex items-center justify-center animate-spin overflow-hidden">
      <FaSpinner
        size={128}
        className="stroke-primary-accent fill-primary-accent"
      />
    </section>
  );
}
