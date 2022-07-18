import { getProviders, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import HeroSection from "../../components/HeroSection";
import LoginForm from "../../components/LoginForm";
import { AuthProviderMap } from "../../lib/types";

export default function Login({ providers }: { providers: AuthProviderMap }) {
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && status === "authenticated") {
      router.push("/");
    }
  }, [status]);

  return (
    <section className="flex h-screen w-screen overflow-hidden">
      <LoginForm
        wrapperClassName="grow-[7] flex flex-col justify-start items-center xs:p-4 max-xs:pt-5"
        authProviders={providers}
      />
      <HeroSection wrapperClassName="grow-[5] hidden lg:flex items-center bg-indigo-500 h-screen flex-col px-4 gap-4"/>
    </section>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
