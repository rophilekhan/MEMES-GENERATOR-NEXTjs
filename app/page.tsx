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
      <h1 className='text-center text-xl mb-10'>Memes Generator</h1>
      <div className='flex justify-center gap-20 flex-wrap'>
        {
          response ? (
            response.data.memes.map((item: Meme) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center p-6 text-center border-4 border-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src={item.url}
                      width={200}
                      height={200}
                      alt="error"
                      className="mb-4 rounded-lg shadow-sm"
                    />
                  </div>
                  <button className="btn btn-accent">
                    <Link
                      className="w-full"
                      href={{
                        pathname: "generatememe/",
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
          ) : (
            <div>No memes available.</div>
          )
        }
      </div>
    </>
  );
};

export default page;
