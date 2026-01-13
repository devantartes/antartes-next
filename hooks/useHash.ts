"use client"; // This hook runs only on the client side

import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation"; // For Next.js 13/14 App Router

const getHash = () => {
  if (typeof window !== "undefined") {
    // Returns the hash including the '#' character, e.g., "#section1"
    return window.location.hash;
  }
  return "";
};

export const useHash = () => {
  const [hash, setHash] = useState(getHash());
//   const router = useRouter(); // To handle navigations via next/link or router.push

  useEffect(() => {
    const handleHashChange = () => {
      setHash(getHash());
    };

    // Listen for changes when using browser's back/forward buttons or manual hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); // Empty dependency array means this runs once on mount

  // Return the current hash value
  return hash;
};
