import { useEffect } from "react";
import { useRouter } from "next/router";

const Demo = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to www.google.com
    window.location.href =
      "https://www.loom.com/share/cf72ee681b5d4b1481385cc425f2cdf7?sid=da5c30c2-a971-4a2e-a515-5178a705ac9d";
  }, []);

  return null; // or you can render a loading indicator or custom message
};

export default Demo;
