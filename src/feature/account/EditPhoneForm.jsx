function EditPhoneForm() {
  return (
    <div className="absolute left-[10rem]">
      <div className="flex justify-center items-center gap-5">
        <input
          type="tel"
          id="phone"
          className="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20rem] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Phone Number"
        />
        <button
          type="button"
          className="px-5 py-2 mb-1 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Save
        </button>
      </div>
    </div>
  )
}

export default EditPhoneForm
