import * as Tabs from "@radix-ui/react-tabs";
import React from "react";

interface ITabs {
  value: string;
  label: string;
  content: React.ReactNode;
}

export default function TabContent({ tabs }: { tabs: ITabs[] }) {
  return (
    <>
      {tabs.map((tab) => (
        <Tabs.Content
          key={tab.value}
          value={tab.value}
          className="group-button-content"
        >
          {tab.content}
        </Tabs.Content>
      ))}
    </>
  );
}
