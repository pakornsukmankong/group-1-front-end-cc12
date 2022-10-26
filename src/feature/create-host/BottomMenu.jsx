import { Link, useNavigate } from 'react-router-dom';

function BottomMenu({ back, next, onNext, disableNext = true }) {
  let navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };
  return (
    <div className="sticky bottom-0 right-0 z-50 flex justify-between border-t bg-white border-t-slate-200 py-3.5 px-5">
      <button
        onClick={onBack}
        className="px-6 py-3 font-semibold text-black underline underline-offset-1 "
      >
        Back
      </button>
      <Link
        onClick={onNext}
        to={disableNext ? null : next}
        className={`mr-5 px-6 py-3 font-semibold text-white ${
          disableNext ? 'bg-gray-300' : 'bg-slate-900'
        } rounded-lg shadow-sm`}
      >
        Next
      </Link>
    </div>
  );
}
export default BottomMenu;
