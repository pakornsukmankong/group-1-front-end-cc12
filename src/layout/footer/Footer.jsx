function Footer() {
  return (
    <footer className="sticky bottom-0 left-0 right-0 text-center text-black bg-gray-300 w-[100%]">
      <div className="flex justify-between items-center h-[50px]">
        <div className="flex  space-x-3 ml-8">
          <span className="cwdsfi8 dir dir-ltr" dir="ltr">
            © 2022 Airbnb, Inc.
          </span>
          <span className="_15vc6yg" aria-hidden="true">
            ·
          </span>
          <a href="/terms/privacy_policy" className="_1e6wtwm5">
            Privacy
          </a>
          <span className="_15vc6yg" aria-hidden="true">
            ·
          </span>
          <a href="/terms" className="_1e6wtwm5">
            Terms
          </a>
          <span className="_15vc6yg" aria-hidden="true">
            ·
          </span>
          <a href="/sitemaps/v2" className="_1e6wtwm5">
            Sitemap
          </a>
        </div>
        <div className="basis-2/12 flex flex-row items-center justify-center" />
        <div className="rounded-full flex flex-row w-auto p-2 gap-5 cursor-pointer hover:shadow mr-6">
          <div className="basis-/12 flex flex-row items-center justify-center">
            <span className="_19c5bku">
              <button type="button" className="_f2hxk3s">
                <i className="mr-3 fa-solid fa-globe"></i>
                <span className="_144l3kj">English (US)</span>
              </button>
            </span>
            <span className="_19c5bku">
              <button type="button" className="_f2hxk3s ml-5">
                <span className="_14tkmhr">
                  <span className="_pgfqnw">฿</span>
                </span>
                <span className="_144l3kj">THB</span>
              </button>
            </span>
          </div>
          <button type="button" className="_1emy0x17">
            <span className="atm_9s_116y0ak atm_vh_yfq0k3 atm_ar_vrvcex atm_h_esu3gu dir dir-ltr">
              <span className=" dir dir-ltr">Support &amp; resources</span>
              <i className="ml-[7px] fa-solid fa-angle-up"></i>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
