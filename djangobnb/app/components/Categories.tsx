import Image from 'next/image';

const Categories = () => {
  return (
    <div className='pt-3 cursor-pointer pb-6 flex items-center space-x-12'>
      <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
        <Image
          src='/icn_category_beach.jpeg'
          width={20}
          height={20}
          alt='Beach'
        />
        <span className='text-sx'>Beach</span>
      </div>

      <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
        <Image
          src='/icn_category_beach.jpeg'
          width={20}
          height={20}
          alt='Villas'
        />
        <span className='text-sx'>Villas</span>
      </div>

      <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
        <Image
          src='/icn_category_beach.jpeg'
          width={20}
          height={20}
          alt='Cabins'
        />
        <span className='text-sx'>Cabins</span>
      </div>

      <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
        <Image
          src='/icn_category_beach.jpeg'
          width={20}
          height={20}
          alt='Tiny Homes'
        />
        <span className='text-sx'>Tiny Homes</span>
      </div>
    </div>
  );
};

export default Categories;
