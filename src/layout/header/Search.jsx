import { useRef } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams
} from 'react-router-dom';
import { useProperty } from '../../contexts/PropertyContext';
import * as propertyService from '../../api/propertyApi';

function Search() {
  const searchRef = useRef(null);
  let navigate = useNavigate();
  const { setProperty } = useProperty();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickSearch = async () => {
    const textSearch = searchRef.current.value;
    const param = Object.fromEntries([...searchParams, ['search', textSearch]]);
    const queryParam = createSearchParams(param).toString();
    await fetchProperty(queryParam);
    navigate({
      pathname: '/',
      search: queryParam
    });
    searchRef.current.focus();
  };

  const fetchProperty = async (queryParam) => {
    try {
      let res = await propertyService.getPropertyByCategory(queryParam);
      setProperty(res.data.property);
    } catch (err) {
      console.log(err);
    }
  };

  const keyUp = (event) => {
    if (event.key === 'Enter') {
      onClickSearch();
    }
  };

  return (
    <div className="relative sm:w-12/12 md:w-12/12 lg:w-6/12 xl:w-6/12 ">
      <input
        ref={searchRef}
        className="w-full py-2 text-sm border rounded-full p-3 hover:shadow text-black focus:outline-none focus:bg-white focus:text-gray-900"
        placeholder="Search"
        autoComplete="off"
        onKeyUp={keyUp}
        defaultValue={searchParams.get('search') ?? ''}
      />
      <span className="absolute inset-y-0 right-2 flex items-center pl-2">
        <button
          onClick={onClickSearch}
          type="button"
          className="bg-red-500 rounded-full w-6 h-6 flex justify-center items-center"
        >
          <i className="fa-solid fa-magnifying-glass text-white text-[0.7rem]"></i>
        </button>
      </span>
    </div>
  );
}
export default Search;
