import Logo from './Logo'
import MenuHeader from './MenuHeader'
import Search from './Search'

function Header() {
  return (
    <header className="z-40  px-20 bg-white border-b sticky top-0 left-0 right-0 h-20 flex flex-row justify-between items-center flex-nowrap">
      <div className="sm:basis-1/12 md:basis-1/12 lg:basis-2/12 xl:basis-2/12 xxl:basis-2/12">
        <Logo />
      </div>
      <div className="sm:basis-3/12 md:basis-3/12 lg:basis-6/12 xl:basis-7/12 flex flex-row items-center justify-center">
        <Search />
      </div>
      <div className="flex flex-row items-center justify-center ">
        <MenuHeader />
      </div>
    </header>
  )
}

export default Header
