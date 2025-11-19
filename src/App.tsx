import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import useSmoothScroll from "./hooks/useSmoothScroll";

export default function App() {
  useSmoothScroll();

  return (
   
    <MainLayout>
      <Home />
    </MainLayout>
    
  );
}
