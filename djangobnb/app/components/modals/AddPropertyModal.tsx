'use client';

import Image from 'next/image';
import CustomButton from '@/app/components/forms/CustomButton';
import Modal from '@/app/components/modals/Modal';
import useAddPropertyModal from '@/app/hooks/useAddPropertyModal';
import { useState } from 'react';
import Categories from '@/app/components/addproperty/Categories';

const AddPropertyModal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState('');
  const [dataTitle, setDataTitle] = useState('');
  const [dataDescription, setDataDescription] = useState('');

  const addPropertyModal = useAddPropertyModal();

  // Set data
  const setCategory = (category: string) => {
    setDataCategory(category);
  };

  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className='mb-6 text-2xl'>Choose category</h2>
          <Categories
            dataCategory={dataCategory}
            setCategory={(category) => setCategory(category)}
          />
          <CustomButton label='Next' onClick={() => setCurrentStep(2)} />
        </>
      ) : currentStep == 2 ? (
        <>
          <h2 className='mb-6 text-2xl'>Describe your place</h2>

          <div className='pt-3 pb-6 space-y-4'>
            <div className='flex flex-col space-y-2'>
              <label>Title</label>
              <input
                type='text'
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
                className='w-full p-4 border border-gray-600 rounded-xl'
              />
            </div>

            <div className='flex flex-col space-y-2'>
              <label>Description</label>
              <textarea
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
                className='w-full h-[200px] p-4 border border-gray-600 rounded-xl'
              ></textarea>
            </div>
          </div>

          <CustomButton
            label='Previous'
            onClick={() => setCurrentStep(1)}
            className='mb-2 bg-black hover:bg-gray-800'
          />

          <CustomButton label='Next' onClick={() => setCurrentStep(3)} />
        </>
      ) : (
        <>
          <p>Step3</p>
        </>
      )}
    </>
  );

  return (
    <>
      <Modal
        isOpen={addPropertyModal.isOpen}
        close={addPropertyModal.close}
        label='Add Property'
        content={content}
      />
    </>
  );
};

export default AddPropertyModal;
