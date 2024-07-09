import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Heart, Brain, Users } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Past Trauma",
    to: "#past-trauma",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Emotions",
    to: "#emotions",
    icon: <Heart className="h-4 w-4" />,
  },
  {
    title: "Behaviors",
    to: "#behaviors",
    icon: <Brain className="h-4 w-4" />,
  },
  {
    title: "Impact",
    to: "#impact",
    icon: <Users className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;