import { Outlet } from 'react-router-dom';
import MainContainer from '../container/MainContainer';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function HomeLayout() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <MainContainer>
          <Outlet />
        </MainContainer>
      </div>
      <Footer />
    </>
  );
}

export default HomeLayout;
