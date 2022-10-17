function Search() {
  return (
    <div className="relative sm:w-12/12 md:w-12/12 lg:w-6/12 xl:w-6/12 ">
      <input
        type="search"
        name="q"
        className="w-full py-2 text-sm border rounded-full p-3 hover:shadow text-white focus:outline-none focus:bg-white focus:text-gray-900"
        placeholder="Search"
        autoComplete="off"
      />
      <span className="absolute inset-y-0 right-2 flex items-center pl-2">
        <button
          type="submit"
          className="bg-red-500 rounded-full w-6 h-6 flex justify-center items-center"
        >
          <i className="fa-solid fa-magnifying-glass text-white text-[0.7rem]"></i>
        </button>
      </span>
    </div>
  );
}
export default Search;
