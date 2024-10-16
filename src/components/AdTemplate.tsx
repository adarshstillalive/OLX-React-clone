import React, { useState } from 'react';
import { CiCamera } from 'react-icons/ci';
import { ref as dbRef, set, push } from 'firebase/database'; 
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../utils/firebase';
import { useUser } from '../utils/userContext';
import { useNavigate } from 'react-router-dom';
import fetchUserAds from '../utils/fetchUserAds';
import { useAds } from '../utils/adContext';

const AdTemplate = () => {
  const {ads, setAds} = useAds()
  const navigate = useNavigate()
  const {user} = useUser()
  const [formData, setFormData] = useState({
    uid: user?.uid,
    brand: '',
    title: '',
    description: '',
    price: '',
    photos: [],
  });
  const [photoFiles, setPhotoFiles] = useState([]);

  const buttons = Array.from({ length: 12 });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e:any, index:any) => {
    const newFiles:any = [...photoFiles];
    newFiles[index] = e.target.files[0];
    setPhotoFiles(newFiles);
  };

  const uploadPhotos = async () => {
    const uploadPromises = photoFiles.map(async (file:any) => {
      if (!file) return null;

      const fileRef = storageRef(storage, `ads/${file.index}-${Date.now()}`);
      await uploadBytes(fileRef, file);
      return getDownloadURL(fileRef);
    });

    return Promise.all(uploadPromises);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const photoUrls = await uploadPhotos();

      const adData = { ...formData, photos: photoUrls.filter(Boolean) };

      const adRef = push(dbRef(db, 'ads'));
      await set(adRef, adData);
      const fetchAds = await fetchUserAds(user?.uid)
      
      if(fetchAds)setAds(fetchAds)
      navigate('/myads')
      
    } catch (error) {
      console.error('Error posting ad: ', error);
      alert('Failed to post the ad.');
    }
  };

  return (
    <div className="mx-auto max-w-4xl pb-24 flex flex-col gap-6">
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl">POST YOUR AD</h1>
      </div>
      <form onSubmit={handleSubmit} className="border-2 rounded-lg overflow-hidden">
        <div className="py-8 flex flex-col gap-4">
          <div className="px-8 flex border-b-2 pb-6 flex-col gap-6">
            <h2 className="font-bold text-xl">INCLUDE SOME DETAILS</h2>
            <div className="flex flex-col">
              <label htmlFor="brand" className="font-light text-sm">Brand *</label>
              <input 
                type="text" 
                id="brand"
                value={formData.brand} 
                onChange={handleChange} 
                name="brand" 
                className="w-full md:w-1/2 border-2 h-12 rounded-sm border-gray-400 px-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="title" className="font-light text-sm">Ad title *</label>
              <input 
                type="text" 
                id="title"
                value={formData.title} 
                onChange={handleChange} 
                name="title" 
                className="w-full md:w-1/2 border-2 h-12 rounded-sm border-gray-400 px-2"
              />
              <p className='text-xs mt-1'>Mention the key features of your item (e.g. brand, model, age, type)</p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="description" className="font-light text-sm">Description *</label>
              <textarea 
                id="description"
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                className="w-full md:w-1/2 border-2 h-24 rounded-sm border-gray-400 p-2"
              />
              <p className='text-xs mt-1'>Include condition, features and reason for selling</p>
            </div>
          </div>

          <div className="px-8 flex border-b-2 pb-6 flex-col gap-6">
            <h2 className="font-bold text-xl">SET A PRICE</h2>
            <div className="flex flex-col">
              <label htmlFor="price" className="font-light text-sm">Price *</label>
              <div className="flex items-center w-full md:w-1/2 border-2 h-12 rounded-sm border-gray-400 overflow-hidden">
                <div className="px-3 flex items-center justify-center border-r-2 border-gray-400">
                  ₹
                </div>
                <input
                  type="number"
                  id="price"
                  className="w-full h-full px-2 outline-none"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="px-8 flex pb-6 flex-col gap-6">
            <h2 className="font-bold text-xl">UPLOAD UP TO 12 PHOTOS</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mr-96">
              {buttons.map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, index)}
                    id={`file-upload-${index}`}
                    className="hidden"
                  />
                  <label
                    htmlFor={`file-upload-${index}`}
                    className="w-24 h-24 mb-4 border-2 border-gray-400 flex flex-col items-center justify-center gap-2 text-gray-700 hover:border-black hover:bg-gray-100 transition cursor-pointer"
                  >
                    <CiCamera className="text-2xl" />
                    <span className="text-sm font-medium">Add Photo</span>
                  </label>
                </div>
              ))}
            </div>
            <p className="text-xs text-red-500">This field is mandatory</p>
          </div>
          <div className="px-8">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Post Ad
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdTemplate;