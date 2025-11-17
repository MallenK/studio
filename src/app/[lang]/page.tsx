import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dictionary = await getDictionary(lang);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Header dictionary={dictionary.header} />
        <main>
          <HeroSection dictionary={dictionary.hero} />
          <AboutSection dictionary={dictionary.about} />
          <SkillsSection dictionary={dictionary.skills} />
          <ProjectsSection dictionary={dictionary.projects} />
          <ContactSection dictionary={dictionary.contact} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
