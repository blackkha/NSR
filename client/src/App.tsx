import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/landing-page";
import LandingPageUk from "@/pages/landing-page-uk";
import { useEffect } from "react";

function Router() {
  const [location] = useLocation();
  
  // Remove any existing language preferences to ensure English is default
  useEffect(() => {
    // Clear any previous Ukrainian preference to ensure English is default
    if (location === "/") {
      localStorage.removeItem("selectedLanguage");
    }
    
    // Only redirect if user has explicitly clicked the Ukrainian button
    if (location === "/uk") {
      localStorage.setItem("selectedLanguage", "uk");
    }
  }, [location]);
  
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/uk" component={LandingPageUk} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
