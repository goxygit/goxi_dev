import { useEffect, useRef } from 'react';
import s from './App.module.css';
import { RootState, useAppDispatch } from './store/store';
import { fetchData } from './store/data-slice';
import { useSelector } from 'react-redux';
import Home from './components/home/main';
import AboutComponent from './components/about/main';
import SkillsComponents from './components/skills/main';
import ProjectsComponent from './components/projects/main';
import Footer from './components/footer/main';
import Header from './components/header/main';
import Slider from 'react-slick';

function App() {
  //@ts-ignore
  const { status } = useSelector((state: RootState) => state.data)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {
        status === 'succeeded'
          ? <main className={s.main}>
            <Header />
            <Home />

            <AboutComponent />

            <SkillsComponents />
            <ProjectsComponent />

            {/* <Footer /> */}
          </main> :
          <>Loading</>
      }
    </>



  );
}

export default App;
