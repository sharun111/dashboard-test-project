
import { AppSidebar } from "@/components/app-sidebar"
import { DataTable } from "@/components/data-table"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./dashboard/data.json"

export default function Home() {
  return (
    <div>
      <div>
        <div className="w-full bg-white px-6 ">
          <h1 className="text-2xl font-bold text-center mb-6">Articles</h1>
          <div className="flex justify-center mb-4">
            <div className="inline-flex space-x-4 rounded-md shadow-sm border border-gray-200 overflow-hidden">
              <button className="px-4 py-2 text-white bg-blue-600 font-medium">
                Generated Articles
              </button>
              <button className="px-4 py-2 bg-white text-gray-800 hover:bg-gray-100">
                Published Articles
              </button>
              <button className="px-4 py-2 bg-white text-gray-800 hover:bg-gray-100">
                Scheduled Articles
              </button>
              <button className="px-4 py-2 bg-white text-gray-800 hover:bg-gray-100">
                Archived Articles
              </button>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Search for Title & Keywords..."
              className="border px-2 py-1 rounded-md w-full max-w-md"
            />
          </div>
          {/* Table or other content goes here */}
          {/* Tab Buttons */}
        </div>
      </div>
      <div>
        <SidebarProvider
          style={
            {
              "--sidebar-width": "calc(var(--spacing) * 72)",
              "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties
          }
        >
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col">
              <div className="@container/main flex flex-1 flex-col gap-0">
                <div className="flex flex-col gap-0 py-0 md:gap-0 md:py-0">
                  <div className="px-0 lg:px-0">
                    {/* Content goes here */}
                  </div>
                  <DataTable data={data} />
                </div>
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>

    </div>
  );
}
