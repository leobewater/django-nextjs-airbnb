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

  const addPropertyModal = useAddPropertyModal();

  // Set data
  const setCategory = (category: string) => {
    setDataCategory(category);
  }

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
      ) : (
        <p>Step2</p>
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
