import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';

import './create-host.css';
import { getHostCreateId } from '../../utils/localStorage';
import { updateHostPhoto } from '../../api/hostApi';

const ImageBox = ({ imageURLs, fileImages, onImageChange, onRemoveImage }) => {
  let imageArraySize = imageURLs?.length >= 5 ? imageURLs?.length : 4;

  let boxSize = new Array(imageArraySize).fill({});

  if (imageURLs?.length === 0) {
    return (
      <div className="flew flex-col justify-between">
        <div className="px-32 pb-10 h-full">
          <div className="px-7 py-4 w-[100%] h-[20rem] bg-white border-gray flex justify-center items-center flex-col border-dashed border-2 focus:bg-gray-50 focus:border-black">
            <i className="fa-solid fa-images text-[4rem] mb-5"></i>
            <p className="text-center font-medium text-[1.5rem] mb-2">
              Drag your photos here
            </p>
            <p className="text-center font-light text-md mb-3">
              Add at least 5 photos
            </p>
            <label
              htmlFor="files"
              className="text-center text-sm mt-3 underline cursor-pointer"
            >
              Upload from your device
            </label>
            <input
              id="files"
              style={{ visibility: 'hidden' }}
              type="file"
              multiple
              accept="image/*"
              onChange={onImageChange}
            ></input>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="px-10 pb-5">
        <div className="sticky top-0 right-0 z-50 flex justify-between items-center">
          <div>
            <div className="text-[1.5rem]">Add at least 5 photos</div>
            <div className="text-[1rem] font-light">Drag to reorder</div>
          </div>
          <label
            htmlFor="files"
            className="px-3 py-2 text-black bg-white border-black border rounded-lg shadow-sm"
          >
            <i className="fa-solid fa-upload mr-3 text-[1.2rem]"></i>
            <span>Upload</span>
            <input
              multiple
              accept="image/*"
              id="files"
              style={{ display: 'none' }}
              type="file"
              onChange={onImageChange}
            ></input>
          </label>
        </div>
      </div>
      <div className="h-[60vh] overflow-y-scroll pb-10 photo-box">
        <div className="px-10 pb-5">
          <div className="relative aspect-[577/374] bg-white border-gray flex justify-center items-center flex-col  focus:bg-gray-50 focus:border-black">
            <img className="aspect-[577/374]" src={imageURLs[0]} alt={'0'} />
            <div className="absolute top-3 left-4 px-2  text-[0.9rem] text-black bg-white border-gray-300 border rounded">
              Cover photo
            </div>
            <button
              onClick={() => onRemoveImage(imageURLs[0], fileImages[0])}
              className="absolute z-[5] top-2 right-3 bg-gray-100 px-3 py-1.5 rounded-full shadow-lg"
            >
              <i className="fa-solid fa-trash text-[0.9rem] text-black cursor-pointer"></i>
            </button>
          </div>
        </div>
        <div className="px-10 grid grid-cols-2 gap-4">
          {boxSize.map((x, index) => {
            if (imageURLs[index + 1] === undefined) {
              return (
                <label
                  key={index}
                  htmlFor="files"
                  className="relative aspect-[577/374] bg-white border-gray-400 flex justify-center items-center flex-col border-dashed border hover:border-black hover:border-solid"
                >
                  <i className="fa-regular fa-image text-[2rem] cursor-pointer"></i>
                </label>
              );
            }
            return (
              <div
                key={index}
                className="relative aspect-[577/374] bg-white flex justify-center items-center flex-col"
              >
                <button
                  onClick={() =>
                    onRemoveImage(imageURLs[index + 1], fileImages[index + 1])
                  }
                  className="absolute z-[5] top-2 right-3 bg-gray-100 px-3 py-1.5 rounded-full shadow-lg"
                >
                  <i className="fa-solid fa-trash text-[0.9rem] text-black cursor-pointer"></i>
                </button>
                <img
                  className="aspect-[577/374]"
                  src={imageURLs[index + 1]}
                  alt={index + 1}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function PhotosContainer() {
  let navigate = useNavigate();

  const [update, setUpdate] = useState(false);
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [fileImages, setFileImages] = useState([]);
  const [hostId, setHostId] = useState(getHostCreateId());
  const [photoLoading, setPhotoLoading] = useState();

  useEffect(() => {
    const handleImage = () => {
      if (images.length < 1) return;

      if (!update) return;

      const newImageUrls = [...imageURLs];
      const newFileImages = [...fileImages];
      images.forEach((image) => {
        newImageUrls.push(URL.createObjectURL(image));
        newFileImages.push(image);
      });
      setFileImages(newFileImages);
      setImageURLs(newImageUrls);
      setUpdate(false);
    };

    handleImage();
  }, [images]);

  const onImageChange = (e) => {
    setUpdate(true);
    setImages([...e.target.files]);
  };

  const onRemoveImage = (itemUrl, itemFile) => {
    const filterImageUrl = imageURLs.filter((i) => i !== itemUrl);
    setImageURLs(filterImageUrl);
    const filterImageFile = fileImages.filter((i) => i !== itemFile);
    setFileImages(filterImageFile);
  };

  const onNext = async (imageURLs) => {
    try {
      setPhotoLoading(true);

      let formData = new FormData();
      formData.append('propertyId', hostId);
      for (let i = 0; i < fileImages.length; i++) {
        formData.append('photos', fileImages[i]);
      }
      const res = await updateHostPhoto(formData);
      if (res.status === 201) {
        setPhotoLoading(false);
        navigate(`/create-host/title/${hostId}`);
      }
    } catch (err) {
      console.log(err);
      setPhotoLoading(false);
    }
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
            src="https://a0.muscache.com/v/d6/12/d6120feb-75fc-52dd-b5bb-5755913fb756/d6120feb75fc52ddb5bb5755913fb756_4000k_1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="basis-2/4 bg-white flex flex-col justify-between">
        <TopMenu />
        <ImageBox
          imageURLs={imageURLs}
          fileImages={fileImages}
          onImageChange={onImageChange}
          onRemoveImage={onRemoveImage}
        />
        <BottomMenu
          back={`/create-host/amenities/${hostId}`}
          isLoading={photoLoading}
          disableNext={imageURLs && imageURLs.length >= 5 ? false : true}
          onNext={() => onNext(imageURLs)}
        />
      </div>
    </div>
  );
}
export default PhotosContainer;
