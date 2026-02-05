import { useNavigate } from "react-router-dom";
import LandingPagePhoto from "../assets/landing.jpg";
import CustomButton from "../components/CustomButton";

const Home = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/about");
  };

  return (
    <div className=" w-full">
      <section className="w-full h-[calc(100vh-80px)] relative">
        <img
          src={LandingPagePhoto}
          alt="Landing Page photo"
          className="w-full h-full object-cover"
        />
        {/*  overlay content */}
        <div className="flex-col absolute inset-0 flex items-center justify-center">
          <h1 className=" text-amber-300 text-4xl md:text-6xl font-bold">
            Ogam Poultry
          </h1>

          <CustomButton
            title="Explore"
            handleClick={handleExplore}
            containerStyles="bg-blue-600 text-white py-3 px-3 rounded-lg hover:bg-blue-700 transition"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
