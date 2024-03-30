import { greenBorder } from "@/assets/css/tailwindcss";
import React from "react";

const SubscriptionCard = () => {
  return (
    <div
      className={`w-60 bg-primary_light dark:bg-primary/40 ${greenBorder} p-3 flex flex-col gap-4`}
    >
      <section className="flex gap-2 items-center">
        {/* Amount */}
        <p className="text-xl font-semibold text-center">N 3,000</p>

        {/* Pricing schedule */}
        <p className="text-center text-lg ">/ Monthly</p>
      </section>

      <section className="flex items-center gap-2">
        <p className="font-medium text-lg">One-Off</p>
        <p className="text-primary font-medium">Active</p>
      </section>

      <section className="text-sm">
        {/* active or cancelled */}
        <table className=" border-separate truncate text-ellipsis">
          <tbody>
            <tr>
              <td className="font-medium">
                <p className="mr-4">Activated</p>
              </td>
              <td>
                <p>Jan 4, 2024</p>
              </td>
            </tr>

            <tr>
              <td className="font-medium">Expires</td>
              <td>Feb 5, 2024</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default SubscriptionCard;
