import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../categories/Categories';
import CardRoomItem from './CardRoomItem';
import {
  createSearchParams,
  useNavigate,
  useSearchParams
} from 'react-router-dom';
import { useProperty } from '../../contexts/PropertyContext';
import * as propertyService from '../../api/propertyApi';

function HomeContainer() {
  const { property, setProperty } = useProperty();
  const [searchParams, setSearchParams] = useSearchParams();
  //   console.log(property);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const param = Object.fromEntries([...searchParams]);
        const queryParam = createSearchParams(param).toString();
        let res = await propertyService.getPropertyByCategory(queryParam);
        setProperty(res.data.property);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProperty();
  }, []);

  return (
    <>
      <div className="sticky top-20 left-0 right-0 z-[5]">
        <Categories />
      </div>
      <main className="my-5">
        {(property || []).length > 0 ? (
          <div className="grid gap-x-7 gap-y-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {property.map((item, keys) => {
              return <CardRoomItem key={keys} dataItem={item} />;
            })}
          </div>
        ) : (
          <div className="grid gap-y-2 grid-cols-1 ">
            <div className="text-[1.5rem] font-medium">No exact matches</div>
            <div>
              Try changing some of your category or adjusting your search.
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default HomeContainer;
