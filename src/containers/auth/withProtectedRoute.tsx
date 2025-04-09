"use client";
import { ReactNode, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";

const withProtectedRoute = (WrappedComponent: (props: any) => ReactNode) => {
  return (props: any) => {
    const { user } = useAuth();
    const router = useRouter();
    

    useEffect(() => {
      // If the user is not authenticated, redirect to the login page
      if (user)
      if (!user) {
        router.push("/login");
      }
    }, [user, router]);

    // If the user is authenticated, render the WrappedComponent
    // Otherwise, render null while the redirection is in progress
    return user ? <WrappedComponent {...props} /> : null;
  };
};

export default withProtectedRoute;
