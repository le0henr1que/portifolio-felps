import * as Tabs from "@radix-ui/react-tabs";
import React from "react";

export default function TabRoot({ children }: { children: React.ReactNode }) {
  return (
    <Tabs.Root className="group-button-root" defaultValue="tab1">
      {children}
    </Tabs.Root>
  );
}
