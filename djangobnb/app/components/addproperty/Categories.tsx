import Image from 'next/image';

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories = ({ dataCategory, setCategory }: CategoriesProps) => {
  return (
    <>
      <div className='pt-3 cursor-pointer pb-6 flex item-center space-x-12'>
        <div
          onClick={() => setCategory('Beach')}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == 'Beach' ? 'border-gray-800' : 'border-white'
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src='/icn_category_beach.jpeg'
            width={20}
            height={20}
            alt='Beach'
          />
          <span className='text-sx'>Beach</span>
        </div>

        <div
          onClick={() => setCategory('Villas')}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == 'Villas' ? 'border-gray-800' : 'border-white'
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src='/icn_category_beach.jpeg'
            width={20}
            height={20}
            alt='Villas'
          />
          <span className='text-sx'>Villas</span>
        </div>

        <div
          onClick={() => setCategory('Cabins')}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == 'Cabins' ? 'border-gray-800' : 'border-white'
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src='/icn_category_beach.jpeg'
            width={20}
            height={20}
            alt='Cabins'
          />
          <span className='text-sx'>Cabins</span>
        </div>

        <div
          onClick={() => setCategory('Tiny homes')}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == 'Tiny homes' ? 'border-gray-800' : 'border-white'
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src='/icn_category_beach.jpeg'
            width={20}
            height={20}
            alt='Tiny Homes'
          />
          <span className='text-sx'>Tiny homes</span>
        </div>
      </div>
    </>
  );
};

export default Categories;
