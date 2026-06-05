import ContactSection from "./Components/ContactSection";
import HereSection from "./Components/HereSection";
import ProjectsSection from "./Components/ProjectsSection";
import TechStack from "./Components/TechStack";
import WorkExperience from "./Components/WorkExperience";

const Home = () => {
  return (
    <>
     <main className="max-w-7xl mx-auto px-6 lg:px-8">
     <HereSection/>
     <WorkExperience/>
     <TechStack/>
     <ProjectsSection/>
     <ContactSection/>
     </main>
    </>
  );
};

export default Home;
