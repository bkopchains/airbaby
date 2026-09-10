import { Routes, Route } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/HomePage";
import RentABabyPage from "@/pages/RentABabyPage";
import BuffBabyPage from "@/pages/BuffBabyPage";
import BabyMatchPage from "@/pages/BabyMatchPage";
import OverviewPage from "@/pages/OverviewPage";
import AboutPage from "@/pages/AboutPage";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="rentababy" element={<RentABabyPage />} />
        <Route path="buffbaby" element={<BuffBabyPage />} />
        <Route path="babymatch" element={<BabyMatchPage />} />
        <Route path="info/overview" element={<OverviewPage />} />
        <Route path="info/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
