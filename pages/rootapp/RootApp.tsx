"use client";

import StoreProvider from "@/app/pages/StoreProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Navbar from "./Navbar";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const RootApp = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <StoreProvider>
        <QueryClientProvider client={queryClient}>
          <div className={`flex flex-col justify-between h-screen w-full  Gradient`}>
            <Navbar  />
            <main>{children}</main>
            <Footer />
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </StoreProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default RootApp;
