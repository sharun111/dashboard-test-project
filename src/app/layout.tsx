import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "sidebar menu",
  description: "powered by shadcn ui",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <SidebarProvider
          style={
    {
      "--sidebar-width": "calc(var(--spacing) * 72)", // This is the current width
      "--header-height": "calc(var(--spacing) * 12)",
    } as React.CSSProperties
  }
        >
            <AppSidebar />
            < SidebarTrigger/>
          <div className="flex h-screen w-screen">
         <main className="flex-1 overflow-auto p-6">
              {children}
            </main>
          </div>
       
        </SidebarProvider>
      </body>
    </html>
  );
}