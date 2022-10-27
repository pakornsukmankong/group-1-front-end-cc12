import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategoryList, updateHostCategory } from '../../api/hostApi';
import { getHostCreateId } from '../../utils/localStorage';
import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';

function CategoryTypeContainer() {
  let navigate = useNavigate();
  const [dataList, setDataList] = useState([]);
  const [selectType, setSelectType] = useState();
  const [hostId, setHostId] = useState(getHostCreateId());
  const [selectName, setSelectName] = useState([]);

  useEffect(() => {
    const fetchPropertyTypeList = async () => {
      try {
        const res = await getCategoryList();
        const { data } = res.data;
        setDataList(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPropertyTypeList();
  }, []);

  const onSelect = (item, currentSelect) => {
    if (currentSelect) {
      let newArr;
      if (currentSelect.length) {
        const newCurrentArr = [...currentSelect];
        const findIndex = newCurrentArr.findIndex((i) => i.id === item.id);
        //check current array have active
        if (findIndex !== -1) {
          newArr = newCurrentArr.filter((i) => i.id !== item.id);
        } else {
          newArr = [{ ...currentSelect.pop() }, { ...item }];
        }
      } else {
        // first selected
        newArr = [{ ...item }];
      }

      setSelectType(newArr);
      setSelectName(newArr.map((i) => i.categoryName));
    } else {
      setSelectType(item);
      setSelectName([item.categoryName]);
    }
  };

  const onNext = async (selectType) => {
    try {
      const list = selectType.map((i) => ({ categoryId: i.id }));
      const input = { propertyId: hostId, list };
      const res = await updateHostCategory(input);
      if (res.status === 201) {
        navigate(`/create-host/location/${hostId}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-row min-h-screen">
      <div className="basis-2/4 bg-slate-500">
        <video
          className="h-[30%] w-full object-none object-center sm:h-screen"
          controls
          autoPlay
          muted
          style={{ objectFit: 'cover', objectPosition: '0px 25%' }}
        >
          <source
            src="https://a0.muscache.com/v/55/86/558653ec-da4e-5148-b0e2-828b7a691e86/558653ecda4e5148b0e2828b7a691e86_4000k_1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="basis-2/4 bg-white flex flex-col justify-between">
        <TopMenu />

        <div className="px-32 pb-10">
          <p className="text-start font-medium mb-5">
            Choose up to 2 highlights
          </p>
          <div className="flex flex-wrap gap-3">
            {dataList.map((item, keys) => {
              const active = selectName.includes(item.categoryName)
                ? `border-black bg-gray-50 border-2 hover:border-black`
                : '';
              return (
                <button
                  onClick={() => onSelect(item, selectType)}
                  key={keys}
                  className={`px-5 py-4 box-border bg-white border-gray text-start flex flex-nowrap items-center border-2  rounded-full  ${active}`}
                >
                  <img
                    className="w-5 h-5 mr-2"
                    src={item.categoryIconImage}
                  ></img>
                  <span className=" text-start font-medium">
                    {item.categoryName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <BottomMenu
          back={`/create-host/property-type-group`}
          disableNext={selectType && selectType.length === 2 ? false : true}
          onNext={() => onNext(selectType)}
        />
      </div>
    </div>
  );
}
export default CategoryTypeContainer;
