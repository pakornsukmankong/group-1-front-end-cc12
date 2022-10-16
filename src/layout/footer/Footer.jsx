function Footer() {
  return (
    <footer className="sticky bottom-0 left-0 right-0 z-10 text-center text-black bg-[#fafafa] border-t   w-[100%]">
      <div className="flex justify-between items-center">
        <div className="flex space-x-3 ml-8 flex-wrap">
          <span className="" dir="ltr">
            © 2022 Airbnb, Inc.
          </span>
          <span className="">·</span>
          <a href="/terms/privacy_policy">Privacy</a>
          <span className="">·</span>
          <a href="/terms">Terms</a>
          <span className="">·</span>
          <a href="/sitemaps/v2" className="">
            Sitemap
          </a>
        </div>
        <div className="flex items-center justify-center" />
        <div className="flex flex-wrap w-auto p-2 gap-5 rounded-full cursor-pointer hover:shadow mr-6 ">
          <div className="flex items-center justify-center">
            <div type="button" className="">
              <i className="mr-3 fa-solid fa-globe"></i>
              <span className="_144l3kj">English (US)</span>
            </div>
            <div className="ml-5">
              <span className="">
                <span className="">฿</span>
              </span>
              <span className="">THB</span>
            </div>
          </div>
          <div className="">
            <a className="">Support &amp; resources</a>
            <i className="ml-[7px] fa-solid fa-angle-up"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
