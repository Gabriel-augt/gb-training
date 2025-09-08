import Link from "next/link";
import NavBarButton from "./NavBarButton";
import NavBarItem from "./NavBarItem";
import {useTranslations} from 'next-intl';

export default function NavBar() {
  const t = useTranslations('HomePage');
  return (
    <header
      className="flex flex-row justify-center items-center fixed w-full z-10 font-Outfit
    invisible lg:visible">
      <nav className="flex flex-row justify-around items-center w-full backdrop-blur-3xl py-2">
        <span className="font-oxanium text-2xl">
          <a href={`#${t('anchors.homeAnchor')}`}>
            GB Training
          </a>
        </span>
        <ul
          className="flex gap-6 justify-center items-center font-outfit text-lg text-white 
        min-[1280px]:text-xl min-[1280px]:gap-10">
          <NavBarItem>
            <Link href={`#${t('anchors.homeAnchor')}`}>
              {t('navBar.home')}
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href={`#${t('anchors.aboutAnchor')}`}>
              {t('navBar.about')}
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href={`#${t('anchors.qualificationAnchor')}`}>
              {t('navBar.qualification')}
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href={`#${t('anchors.servicesAnchor')}`}>
              {t('navBar.services')}
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href={`#${t('anchors.feedbackAnchor')}`}>
              {t('navBar.feedback')}
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href={`#${t('anchors.contactAnchor')}`}>
              {t('navBar.contact')}
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href={`#${t('anchors.faqAnchor')}`}>
              {t('navBar.faq')}
            </Link>
          </NavBarItem>
        </ul>
        <NavBarButton />
      </nav>
    </header>
  );
}
