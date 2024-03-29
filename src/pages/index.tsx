import { useEffect, useState } from 'react';

// Sections
import HomeSection from './sections/Home';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Portfolio from './sections/portfolio';

// Components
import Loader from '../components/Loader';
import Clients from './sections/Clients';
import News from './sections/News';
import Team from './sections/Team';
import Milestones from './sections/Milestones';

// -------------------

function Landing() {
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeOffLoader, setFadeOffLoader] = useState<boolean>(false);

  useEffect(() => {
    const loaderTimer = setTimeout(handleLoad, 500);
    return () => {
      clearTimeout(loaderTimer);
    };
  }, []);

  const handleLoad = () => {
    setFadeOffLoader(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <>
      {loading ? <Loader fadeOffLoader={fadeOffLoader} /> : <></>}
      <div id="content" className="site-content center-relative">
        <HomeSection />
        <Services />
        <Portfolio />
        <Clients />
        <Team />
        <News />
        <Milestones />
        <Contact />
      </div>
    </>
  );
}

export default Landing;
