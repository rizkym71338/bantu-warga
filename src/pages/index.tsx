import { Benefit, Download, Hero, Information } from "../components";
import { MainLayout } from "../layouts";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Benefit />
      <Download />
      <Information />
    </MainLayout>
  );
};

export default Home;
