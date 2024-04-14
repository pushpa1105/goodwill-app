import { Logo } from "@/components/logo";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <div className="flex justify-center mb-4">
        <Logo height={175} width={175} />
      </div>
      <SignUp />
    </div>
  );
}
