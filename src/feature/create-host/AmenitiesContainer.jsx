import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFacilityList, updateHostFacility } from '../../api/hostApi';
import { getHostCreateId } from '../../utils/localStorage';
import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';

const BoxChecked = ({ item }) => {
  const [checked, setChecked] = useState(false);
  const checkedClass = `${
    checked ? 'bg-gray-50 border-black' : 'bg-white border-gray'
  }`;
  return (
    <label
      htmlFor={item?.id}
      className={`px-7 py-4 h-40 w-44  flex flex-col justify-center cursor-pointer items-center  border-2 rounded-lg hover:border-black ${checkedClass}`}
    >
      <i className={`${item.facilityIconImage} text-[1.9rem] mb-5`}></i>
      <p className="text-center text-sm">{item.facilityName}</p>
      <input
        onChange={() => setChecked(!checked)}
        className="hidden"
        type="checkbox"
        id={item?.id}
        name={item?.id}
        value={checked ? item?.id : ''}
      />
    </label>
  );
};

function AmenitiesContainer() {
  let navigate = useNavigate();
  const [dataList, setDataList] = useState([]);
  const [hostId, setHostId] = useState(getHostCreateId());
  const [selectFacility, setSelectFacility] = useState();

  const form = useRef(null);

  useEffect(() => {
    const fetchFacilityList = async () => {
      try {
        const res = await getFacilityList();
        const { data } = res.data;
        const mapData = data.map((i) => ({ ...i, checked: false }));
        setDataList(mapData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFacilityList();
  }, []);

  const onNext = async (selectFacility) => {
    try {
      const input = {
        propertyId: hostId,
        list: selectFacility
      };
      const res = await updateHostFacility(input);
      if (res.status === 201) {
        navigate(`/create-host/photos/${hostId}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeList = (e) => {
    e.preventDefault();
    let newArr = [...dataList];
    const updateIndex = newArr.findIndex((i) => i.id === Number(e.target.name));
    newArr[updateIndex].checked = e.target.checked;
    const activeData = newArr
      .filter((i) => i.checked === true)
      .map((i) => ({ facilityId: i.id }));
    setSelectFacility(activeData);
  };

  return (
    <div className="flex flex-row min-h-screen">
      <div className="basis-2/4 bg-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="fixed top-0 bottom-0 left-0 text-white text-center h-screen w-2/4 flex flex-col justify-center">
          <h1 className="text-start text-[3rem] p-12 font-medium tracking-[0.1rem]">
            Let guests know what your place has to offer
          </h1>
        </div>
      </div>
      <div className="basis-2/4 bg-white flex flex-col justify-between">
        <TopMenu />
        <form
          ref={form}
          name="facilityFrom"
          className="mb-10"
          onChange={onChangeList}
        >
          <div className="px-20">
            <div className="pt-10 pb-5">
              <h1 className="text-start text-[1.5rem] font-medium tracking-[0.1rem]">
                Do you have any standout amenities?
              </h1>
            </div>
            <div className="grid gap-x-7 gap-y-4 grid-cols-3 ">
              {dataList.map((item, keys) => {
                return <BoxChecked key={keys} item={item} />;
              })}
            </div>
          </div>
        </form>
        <BottomMenu
          back={`/create-host/floor-plan/${hostId}`}
          disableNext={
            selectFacility && selectFacility.length > 0 ? false : true
          }
          onNext={() => onNext(selectFacility)}
        />
      </div>
    </div>
  );
}
export default AmenitiesContainer;
