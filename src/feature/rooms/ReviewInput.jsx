import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLoading } from '../../contexts/LoadingContext'
import { useReview } from '../../contexts/ReviewContext'
import { toastError, toastSuccess } from '../../utils/toast'

function ReviewInput() {

  const { id: propertyId } = useParams()
  const { startLoading, stopLoading } = useLoading()
  const { createReview } = useReview()
  const [input, setInput] = useState()

  const handleOnClick = async () => {
    try {
      startLoading()
      await createReview(propertyId, input)
      setInput('')
      toastSuccess('review created')
    } catch (err) {
      console.log(err)
      toastError(err.response?.data.message)
    } finally {
      stopLoading()
    }
  }

  // console.log(propertyId, 'Id');
  return (
    <div>
      <textarea
        type="text"
        className="flex border-2 rounded-lg border-gray-400 p-3 w-full h-[140px]"
        placeholder="write your review"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {input && (
        <div className="my-3">
          <button
            className="w-[100px] h-[40px] bg-blue-500 rounded-lg text-white"
            onClick={handleOnClick}>
            Submit
          </button>
          <button
            className="w-[100px] h-[40px] bg-stone-200 rounded-lg ml-2"
            onClick={() => setInput('')}>
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}

export default ReviewInput
