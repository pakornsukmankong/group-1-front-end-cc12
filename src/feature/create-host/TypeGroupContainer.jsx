import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createHostPropertyType, getPropertyTypeList } from '../../api/hostApi';
import { setHostCreateId } from '../../utils/localStorage';
import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';

function TypeGroupContainer() {
  let navigate = useNavigate();
  const [dataList, setDataList] = useState([]);
  const [selectType, setSelectType] = useState();

  useEffect(() => {
    const fetchPropertyTypeList = async () => {
      try {
        const res = await getPropertyTypeList();
        const { data } = res.data;
        setDataList(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPropertyTypeList();
  }, []);

  const onSelect = (item) => {
    setSelectType(item);
  };

  const onNext = async (selectType) => {
    try {
      const input = { propertyTypeId: selectType.id };
      const res = await createHostPropertyType(input);
      const { host } = res.data;
      if (host) {
        setHostCreateId(host?.id);
        navigate(`/create-host/category-type/${host?.id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-row min-h-screen">
      <div className="basis-2/4 bg-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="fixed top-0 bottom-0 left-0 text-white text-center h-screen w-2/4 flex flex-col justify-center">
          <h1 className="text-start text-[3rem] p-12 font-medium tracking-[0.19rem]">
            What kind of place will you host?
          </h1>
        </div>
      </div>
      <div className="basis-2/4 bg-white flex flex-col justify-between">
        <TopMenu />
        <div className="px-32 text-center pb-10">
          {dataList.map((item, keys) => {
            const active =
              selectType === item ? `border-black bg-gray-50 border-black` : '';

            return (
              <button
                onClick={() => onSelect(item)}
                key={keys}
                className={`border-2 w-full	bg-white border-gray flex flex-row flex-nowrap justify-between items-center rounded-lg mt-5 hover:border-black focus:bg-gray-50 focus:border-black ${active}`}
              >
                <div className="pl-6 font-medium text-start">
                  {item.propertyTypeName}
                </div>
                <div className="aspect-square h-24 p-4 ">
                  <img
                    className="object-cover rounded-md"
                    src={item.propertyTypeIconImage}
                    alt="image"
                  />
                </div>
              </button>
            );
          })}
        </div>
        <BottomMenu
          disableNext={selectType ? false : true}
          onNext={() => onNext(selectType)}
        />
      </div>
    </div>
  );
}
export default TypeGroupContainer;
