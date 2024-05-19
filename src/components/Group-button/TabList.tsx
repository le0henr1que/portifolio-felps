import * as Tabs from "@radix-ui/react-tabs";
import React from "react";

interface ITabs {
  value: string;
  label: string;
  content: React.ReactNode;
}
export default function TabList({
  tabs,
  className,
}: {
  tabs: ITabs[];
  className: string;
}) {
  return (
    <>
      <Tabs.List className={className} aria-label="">
        {tabs.map((tab) => (
          <Tabs.Trigger
            id="group-button"
            className="group-button group-button-responsive"
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
