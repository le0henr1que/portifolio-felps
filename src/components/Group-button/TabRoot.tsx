import * as Tabs from "@radix-ui/react-tabs";
import React from "react";

export default function TabRoot({ children }: { children: React.ReactNode }) {
  return (
    <Tabs.Root className="group-button-root flex-shrink-0 " defaultValue="tab1">
      {children}
    </Tabs.Root>
  );
}
