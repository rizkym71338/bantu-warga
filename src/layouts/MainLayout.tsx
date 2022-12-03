import { Footer, Navbar } from "../components";

interface MainLayout {
  children?: any;
}

const MainLayout = ({ children }: MainLayout) => {
  return (
    <>
      <Navbar />
      <div className={`overflow-hidden`}>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
