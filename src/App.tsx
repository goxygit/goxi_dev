import { useEffect, useRef, useState } from 'react';
import s from './App.module.css';
import { RootState, useAppDispatch } from './store/store';
import { fetchData } from './store/data-slice';
import { useSelector } from 'react-redux';
import Home from './components/home/main';
import AboutComponent from './components/about/main';
import ProjectsComponent from './components/projects/main';
import Header from './components/header/main';
import FooterComponent from './components/contacts/main';
import { Loader } from './components/loading/main';
function App() {
  //@ts-ignore
  const { status } = useSelector((state: RootState) => state.data)
  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(fetchData())
  }, [])


  useEffect(() => {
    const updateGradientColor = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const percentScrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      const startColor = [27, 44, 88]; // Blue
      const endColor = [75, 36, 106]; // Violet

      const color = startColor.map((channel, i) => {
        return Math.round(channel + (endColor[i] - channel) * (percentScrolled / 100));
      });

      document.documentElement.style.setProperty('--scrollbar-color', `rgb(${color[0]}, ${color[1]}, ${color[2]})`);

    };

    window.addEventListener('scroll', updateGradientColor);
    return () => {
      window.removeEventListener('scroll', updateGradientColor);
    };
  }, []);



  return (
    <>

      {
        status === 'succeeded'
          ? <main className={s.main} >
            <Header />
            <Home />
            <AboutComponent />
            <FooterComponent />
            <ProjectsComponent />


          </main > :
          <Loader />
      }
    </>



  );
}

export default App;
