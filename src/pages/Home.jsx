import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import KnowledgeGalaxy from "../components/KnowledgeGalaxy";
import FutureInput from "../components/FutureInput";
import MentorHub from "../components/MentorHub";
import SkillTree from "../components/SkillTree";
import Challenges from "../components/Challenges";
import CuriositySection from "../components/CuriositySection";
import FutureMirror from "../components/FutureMirror";
import Mission from "../components/Mission";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import NovaChat from "../components/NovaChat";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <KnowledgeGalaxy />
      <FutureInput />
      <NovaChat />
      <MentorHub />
      <SkillTree />
      <Challenges />
      <CuriositySection />
      <FutureMirror />
      <Mission />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;