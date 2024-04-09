import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const canControlScrollRestoration = 'scrollRestoration' in window.history
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, [pathname]);
  
  return children;
}



/* async function checkUIDValidity() {
  try {
      // Make a request to backend to verify UID existence
      const response = apiClient.executeUidValidation(urlUID);
      if (response.status === 200) {
      //   setIsValidUID(true);
      //   setLoading(false);
      console.log("uid existe")
      } else {
          alert("La UID no existe")
      }
    } catch (error) {
      console.error('Error verifying UID:', error);
      // Handle error
    }
} */