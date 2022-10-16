import Logo from './Logo';
import MenuHeader from './MenuHeader';
import Search from './Search';

function Header() {
  return (
    <header className="z-40  px-12 bg-white border-b sticky top-0 left-0 right-0 h-20 flex flex-row justify-between items-center flex-nowrap">
      <div className="basis-2/12">
        <Logo />
      </div>
      <div className="basis-7/12 flex flex-row items-center justify-center">
        <Search />
      </div>
      <div className="flex flex-row items-center justify-center ">
        <MenuHeader />
      </div>
    </header>
  );
}

export default Header;
