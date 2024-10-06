import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const page = async () => {
  const data = await fetch('https://api.imgflip.com/get_memes');
  const response = await data.json();
  console.log(response.data.memes);

  interface Meme {
    id: number;
    url: string;
    box_count: number;
  }

  return (
    <>
      <h1 className="text-center mb-10 font-bold text-5xl text-white bg-black">Memes Generator</h1>
      <marquee className='text-xl text-white bg-black'>
        Do you want to Generate Memes Plaease Click on it 
      </marquee>
      <div className="flex justify-center gap-20 flex-wrap bg-black">
        {
          response ? (
            response.data.memes.map((item: Meme) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center p-6 text-center border-4 border-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-black"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src={item.url}
                      width={300}
                      height={300}
                      alt="error"
                      className="mb-4 rounded-lg shadow-sm border-white"
                    />
                  </div>
                  <button className="btn btn-primary bg-red-600 text-black">
                    <Link
                      className="w-full"
                      href={{
                        pathname: "generatememes/",
                        query: {
                          url: item.url,
                          boxCount: item.box_count,
                          id: item.id,
                        },
                      }}
                    >
                      Create Meme
                    </Link>
                  </button>
                </div>
              );
            })
          ) : <h1 className="text-white">Loading Please Wait</h1>
        }
      </div>
    </>
  );
};

export default page;