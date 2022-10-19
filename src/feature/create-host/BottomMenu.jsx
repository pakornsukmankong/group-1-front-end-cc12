import { Link } from 'react-router-dom';

function BottomMenu({ back, next }) {
  return (
    <div className="sticky bottom-0 right-0 z-50 flex justify-between border-t bg-white border-t-slate-200 py-3.5 px-5">
      <Link
        to={back}
        className="px-6 py-3 font-semibold text-black underline underline-offset-1 "
      >
        Back
      </Link>
      <Link
        to={next}
        className="mr-5 px-6 py-3 font-semibold text-white bg-slate-900 rounded-lg shadow-sm"
      >
        Next
      </Link>
    </div>
  );
}
export default BottomMenu;
