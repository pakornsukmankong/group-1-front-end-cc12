import { useState } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../categories/Categories';
import CardRoomItem from './CardRoomItem';
import { useProperty } from '../../contexts/PropertyContext';

function HomeContainer() {
  const { property } = useProperty();
  //   console.log(property);
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
