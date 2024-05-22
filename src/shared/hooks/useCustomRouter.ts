"use client";
import { useRouter } from "next/navigation";

const useCustomRouter = () => {
  const router = useRouter();
  const navigate = (href: string) => {
    if (href) router.push(href, { scroll: false });
  };

  return { navigate };
};

export default useCustomRouter;
