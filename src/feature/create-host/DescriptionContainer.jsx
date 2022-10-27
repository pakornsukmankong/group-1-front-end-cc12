import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateHostDescription } from '../../api/hostApi';
import { getHostCreateId } from '../../utils/localStorage';
import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';

function DescriptionContainer() {
  let navigate = useNavigate();
  const maxLength = 500;
  const [count, setCount] = useState(0);
  const [description, setDescription] = useState('');
  const [hostId, setHostId] = useState(getHostCreateId());

  const onNext = async (description) => {
    try {
      const input = {
        propertyId: hostId,
        description
      };
      const res = await updateHostDescription(input);
      if (res.status === 201) {
        navigate(`/create-host/price/${hostId}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    const value = e.target.value;
    setCount(value.length);
    setDescription(value);
  };

  return (
    <div className="flex min-h-screen flex-col sm:flex-row">
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
        <div className="px-24 pb-10">
          <div className="pt-10 pb-5">
            <p className="text-start text-[1.5rem] font-medium tracking-[0.1rem] mb-4">
              Create your description
            </p>
          </div>
          <textarea
            type="text"
            maxLength={maxLength}
            rows={4}
            onChange={onChange}
            className="px-6 py-4 w-full h-[10rem] text-[1.15rem] bg-white border-gray flex justify-center items-center flex-col border-2 rounded-lg  hover:border-black  focus:border-black focus-visible:border-black focus-visible:outline-black "
            defaultValue={
              "You'll have a great time at this comfortable place to stay."
            }
          ></textarea>
          <p className="text-[.95rem] mt-4">
            {count}/{maxLength}
          </p>
        </div>
        <BottomMenu
          back={`/create-host/title/${hostId}`}
          disableNext={count > 0 ? false : true}
          onNext={() => onNext(description)}
        />
      </div>
    </div>
  );
}
export default DescriptionContainer;
