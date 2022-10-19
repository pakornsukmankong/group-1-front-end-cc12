function Footer() {
  return (
    <footer className="px-20 sticky bottom-0 z-10 text-center text-black bg-[#fafafa] border-t w-full py-2">
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap justify-start  gap-x-3">
          <span className="">© 2022 Airbnb, Inc.</span>
          <span className="">·</span>
          <a href="/terms/privacy_policy">Privacy</a>
          <span className="">·</span>
          <a href="/terms">Terms</a>
          <span className="">·</span>
          <a href="/sitemaps/v2" className="">
            Sitemap
          </a>
        </div>

        <div className="flex flex-wrap justify-end gap-x-3 rounded-full cursor-pointer ">
          <div type="button">
            <i className="mr-3 fa-solid fa-globe"></i>
            <span>English (US)</span>
          </div>
          <div>
            <span>
              <span>฿</span>
            </span>
            <span>THB</span>
          </div>
          <div>
            <a>Support &amp; resources</a>
            <i className="ml-2 fa-solid fa-angle-up"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
