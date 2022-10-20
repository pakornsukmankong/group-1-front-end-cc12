function TopMenu({ isTransparent, bgButton, textColor }) {
  const bgColor = isTransparent ? ' bg-transparent ' : ' bg-white ';
  const position = isTransparent ? ' absolute ' : ' sticky ';

  const bgButtonColor = bgButton ?? ' bg-gray-100 ';
  const textButtonColor = textColor ?? ' text-black ';

  return (
    <div
      className={`${position} top-0 right-0 z-50 py-6 px-12 flex justify-end space-x-5  ${bgColor}`}
    >
      <button
        className={`px-4 py-2 font-semibold text-xs ${bgButtonColor} ${textButtonColor} rounded-full shadow-sm`}
      >
        Help
      </button>
      <button
        className={`px-4 py-2 font-semibold text-xs ${bgButtonColor} ${textButtonColor} rounded-full shadow-sm`}
      >
        Save and exit
      </button>
    </div>
  );
}
export default TopMenu;
