"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SessionProvider } from "next-auth/react";

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const hasToken = true;
    if (!hasToken) {
      router.push("/login");
    }
  }, []);

  return (
    <SessionProvider>
      {children}
      {/* {status !== AuthStatus.UNKNOWN ? (
        children
      ) : (
        <div className="flex flex-col items-center">
          <div className="pt-4 w-[350px] flex justify-center">
            <Skeleton className="h-8 w-[300px]" />
          </div>
          <div className="space-y-2 w-[300px] flex justify-center">
            <div>Authenticating</div>
          </div>
        </div>
      )} */}
    </SessionProvider>
  );
}
