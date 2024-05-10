import { Metadata } from "next";
import PortfolioLayout from "./components/PortfolioLayout";
import MainBanner from "./organisms/MainBanner";

export default function Home() {
  return (
    <PortfolioLayout>
      <MainBanner />
    </PortfolioLayout>
  );
}
