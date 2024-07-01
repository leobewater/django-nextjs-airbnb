'use client';

import useAddPropertyModal from '@/app/hooks/useAddPropertyModal';

interface AddPropertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton = ({ userId }: AddPropertyButtonProps) => {
  const addPropertyModal = useAddPropertyModal();

  const airbnbYourHome = () => {
    addPropertyModal.open();
  };

  return (
    <div
      onClick={airbnbYourHome}
      className='p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200'
    >
      DjangoBnB your home
    </div>
  );
};

export default AddPropertyButton;
