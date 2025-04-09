"use client";
import { AppStoreType, makeStore } from "@/api/redux/store";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { useRef } from "react";
import { Provider as ReduxProvider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStoreType>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <ReduxProvider store={storeRef.current}>
      <TooltipProvider>{children}</TooltipProvider>
    </ReduxProvider>
  );
}
