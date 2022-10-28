import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useReview } from '../../contexts/ReviewContext';

function ReviewInput() {
  const { id: propertyId } = useParams();
  const { createReview } = useReview();
  const [input, setInput] = useState('');

  const handleOnClick = async () => {
    try {
      await createReview(propertyId, input);
      setInput('');
    } catch (err) {
      console.log(err);
    }
  };

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
      <div className="my-3">
        <button
          className="w-[100px] h-[40px] bg-blue-500 rounded-lg text-white"
          onClick={handleOnClick}
        >
          Submit
        </button>
        <button
          className="w-[100px] h-[40px] bg-stone-200 rounded-lg ml-2"
          onClick={() => setInput('')}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ReviewInput;
