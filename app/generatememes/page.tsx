"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';

const Generate = ({ params }: { params: { id: number, url: string, boxCount: number } }) => {

    console.log(params);

    const [hello, setHello] = useState(params.boxCount)
    const [meme, setmeme] = useState<string | null>(null)

    let input1 = useRef<HTMLInputElement>(null);
    let input2 = useRef<HTMLInputElement>(null);
    let input3 = useRef<HTMLInputElement>(null);
    let input4 = useRef<HTMLInputElement>(null);

    const postMeme = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log(input1.current?.value);

        const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${params.id}&username=TalhaZahid&password=hello-world&text0=${input1.current?.value}&text1=${input2.current?.value}&text2=${input3.current?.value}&text3=${input4.current?.value}
            `, {
            method: 'POST',
        });
        const response = await data.json()
        console.log(response);
        setmeme(response.data.url)

    }

    useEffect(() => {
        setHello(params.boxCount)
    }, [params.boxCount])

    return (
        <>
            <div className='flex justify-center'>
                <Image
                    src={params.url}
                    width={200}
                    height={200}
                    alt="error"
                    className="mb-4 rounded-lg shadow-sm"
                />
            </div>
            {hello == 2 ? (
                <div>
                    <form onSubmit={postMeme}>
                        <input
                            type="text"
                            placeholder='Type Your Content'
                            className='input input-bordered input-accent w-full max-w-xs'
                            ref={input1} />
                        <br />
                        <br />
                        <input
                            type="text"
                            placeholder='Type Your Content'
                            className='input input-bordered input-accent w-full max-w-xs'
                            ref={input2} />
                        <br />
                        <br />
                        <button type="submit" className="btn btn-primary">Generate Meme</button>
                    </form>
                </div>
            ) : hello == 3 ? (
                <div>
                    <form onSubmit={postMeme}>
                        <input
                            type="text"
                            placeholder='Type Your Content'
                            className='input input-bordered input-accent w-full max-w-xs'
                            ref={input1} />
                        <br />
                        <br />
                        <input
                            type="text"
                            placeholder='Type Your Content'
                            className='input input-bordered input-accent w-full max-w-xs'
                            ref={input2} />
                        <br />
                        <br />
                        <input
                            type="text"
                            placeholder='Type Your Content'
                            className='input input-bordered input-accent w-full max-w-xs'
                            ref={input3} />
                        <br />
                        <br />
                        <button type="submit" className="btn btn-primary">Generate Meme</button>
                    </form>
                </div>
            ) : hello == 4 ? (
                <div>
                    <form onSubmit={postMeme}>
                        <input
                            type="text"
                            placeholder='Type Your Content'
                            className='input input-bordered input-accent w-full max-w-xs'
                            ref={input1} />
                        <br />
                        <br />
                        <input
                            type="text"
                            placeholder='Type Your Content'
                            className='input input-bordered input-accent w-full max-w-xs'
                            ref={input2} />
                        <br />
                        <br />
                        <input
                            type="text"
                            placeholder='Type Your Content'
                            className='input input-bordered input-accent w-full max-w-xs'
                            ref={input3} />
                        <br />
                        <br />
                        <input
                            type="text"
                            placeholder='Type Your Content'
                            className='input input-bordered input-accent w-full max-w-xs'
                            ref={input4} />
                        <br />
                        <br />
                        <button type="submit" className="btn btn-primary">Generate Meme</button>
                    </form>
                </div>
            ) : (
                <div> Loading Please Wait....</div>
            )}
            {meme ? <Image src={meme} width={200} height={200} alt='Loading Please Wait..' /> : null}
        </>
    )
}

export default Generate
