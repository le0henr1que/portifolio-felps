import * as Tabs from "@radix-ui/react-tabs";
import React from "react";

interface ITabs {
  value: string;
  label: string;
  content: React.ReactNode;
}

export default function TabList({ tabs }: { tabs: ITabs[] }) {
  return (
    <>
      <Tabs.List className="group-button-list flex-shrink-0 " aria-label="">
        {tabs.map((tab) => (
          <Tabs.Trigger
            className="group-button"
            key={tab.value}
            value={tab.value}
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </>
  );
}
