'use client';

import Image from 'next/image';
import CustomButton from '@/app/components/forms/CustomButton';
import Modal from '@/app/components/modals/Modal';
import useAddPropertyModal from '@/app/hooks/useAddPropertyModal';
import { useState } from 'react';

const AddPropertyModal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const addPropertyModal = useAddPropertyModal();

  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className='mb-6 text-2xl'>Choose category</h2>
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
