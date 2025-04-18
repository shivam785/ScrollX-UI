import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import OnThisPage from "@/components/OnThisPage";
import { Navbar } from "@/components/Navbar";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-1">
        <div className="hidden md:block w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 fixed inset-y-0 overflow-y-auto">
          <Sidebar />
        </div>

        <div className="flex-1 md:ml-64">
          <div className="container mx-auto flex">
            <div className="flex-1 px-4 py-8">
             <div className="prose prose-lg dark:prose-invert max-w-none">
               {children}
              </div>
              </div>

            <div className="w-64 hidden lg:block sticky top-16 self-start pl-4 pr-8 py-8">
              <OnThisPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
