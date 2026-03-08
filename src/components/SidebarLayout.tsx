import * as React from "react";
import { SidebarProvider, SidebarInset } from "@components/ui/sidebar";
import { AppSidebar } from "@components/app-sidebar";
import { TooltipProvider } from "@components/ui/tooltip"; // 1. Import the provider

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    // 2. Wrap everything in the TooltipProvider
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
