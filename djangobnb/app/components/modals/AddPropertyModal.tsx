'use client';

import Modal from '@/app/components/modals/Modal';
import useAddPropertyModal from '@/app/hooks/useAddPropertyModal';
import Image from 'next/image';

const AddPropertyModal = () => {
  const addPropertyModal = useAddPropertyModal();

  return (
    <>
      <Modal
        isOpen={addPropertyModal.isOpen}
        close={addPropertyModal.close}
        label='Add Property'
        content={(<p>Hello</p>)}
      />
    </>
  );
};

export default AddPropertyModal;
