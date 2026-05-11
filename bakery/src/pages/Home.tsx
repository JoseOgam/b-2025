import {
  Customization,
  EmailSignUp,
  Footer,
  HeroHeader,
  HowItWorks,
  MenuHighlights,
  NavBar,
  Testimonials,
  WhyToaster,
} from "../components";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to Our Bakery</h1>
      <NavBar />

      <HeroHeader />
      <HowItWorks />
      <MenuHighlights />
      <Customization />
      <WhyToaster />
      <Testimonials />
      <EmailSignUp />
      <Footer />
    </div>
  );
};

export default Home;
