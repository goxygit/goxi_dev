import { useEffect, useRef } from 'react';
import s from './App.module.css';
import { RootState, useAppDispatch } from './store/store';
import { fetchData } from './store/data-slice';
import { useSelector } from 'react-redux';
import Home from './components/home/main';
import AboutComponent from './components/about/main';
import ProjectsComponent from './components/projects/main';
import Header from './components/header/main';
import FooterComponent from './components/contacts/main';
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
            <FooterComponent />
            <ProjectsComponent />
          </main > :
          <>Loading</>
      }
    </>



  );
}

export default App;
