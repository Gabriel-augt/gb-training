import NavBar from "./NavBar";
import Hero from "./Hero";
import NavBarMobile from "./NavBarMobile";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../switcher/LanguageSwitcher";

export default function Home() {
  const t = useTranslations('HomePage.anchors');
  return (
    <div id={t('homeAnchor')}>
        <NavBar />
        <NavBarMobile />
        <LanguageSwitcher />
        <Hero />
    </div>
  );
}
