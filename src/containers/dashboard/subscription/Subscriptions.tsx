import React from "react";
import SubscriptionCard from "./SubscriptionCard";
import CurvedButton from "@/components/buttons/CurvedButton";
import { ArrowForwardIos } from "@mui/icons-material";

const Subscriptions = () => {
  return (
    <div className="flex flex-col gap-4 w-full bg-inherit">
      <h1 className="font-medium">Subscription</h1>

      <main className="flex gap-4 items-center">
        <SubscriptionCard />
        <CurvedButton
          className="bg-primary text-white h-fit flex gap-2 items-center"
          py={"6"}
        >
          <p className="font-medium">See All Pricing Plans</p>
          <ArrowForwardIos sx={{ fontSize: 20 }} />
        </CurvedButton>
      </main>
    </div>
  );
};

export default Subscriptions;
