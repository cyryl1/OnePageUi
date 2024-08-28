// import React from 'react';
import Image from "next/image";
import ProgressCircle from "./ProgressCircle";

export default function Card() {
  return (
    <div className="mt-20 container flex flex-col bg-white box-border h-4/5 w-3/5 m-auto pt-[2rem] pb-[1rem] px-[3rem] rounded-lg">
        <div className="flex justify-between">
            <h1 className="text-2xl font-bold w-1/2 md:text-xl" style={{ color: '#1C1D21' }}>Tick the tasks you completed yesterday</h1>
            <div className="flex">
                <ProgressCircle
                    size={60}
                    progress={25}
                />
            </div>
        </div>

        <div className="flex border border-inherit w-full my-[1.5rem] rounded p-[0.5rem]">
            <div>
                <Image
                    src="/infocircle.png"
                    alt="infocircle"
                    width={20}
                    height={20}
                    className="w-9"
                />
            </div>
          <p className="text-sm pl-4" style={{ color: '#7D849D' }}>You can optionally add images to prove completion of the tasks you worked on.
            Images also help you earn more points
          </p>
        </div>

        <div>
            <div className="flex w-full justify-center items-center">
                <div className="relative flex border rounded-lg px-[0.8rem] py-[0.5rem] w-full" style={{ background: '#F3F5F6' }}>
                    <div className="h-32 w-2 flex flex-col">
                        <div className="bg-yellow-500 h-full rounded-t-full rounded-b-full"></div>
                    </div>
                    <div className="px-[1rem]">
                        <p>Worked with <span className="text-blue-600">@Solomon C.</span> drafting townhall invitation letter</p>
                        <div className="flex gap-4">
                            <Image
                                src="/Frame1.png"
                                alt="frame1"
                                width={50}
                                height={50}
                            />
                            <Image
                                src="/Frame2.png"
                                alt="frame2"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="absolute bottom-3 right-3 mt-6 flex gap-2 rounded-xl w-fit px-[0.5rem] py-[0.4rem]" style={{ background: '#FFFFFF', border: '1px solid #E8E8E8' }}>
                            Add Image
                            <Image
                                src="/image.png"
                                alt="image"
                                width={20}
                                height={20}
                            />
                        </div>
                    </div>
                </div>
                <div className="ml-4 p-[0.5rem] rounded-lg outline-current border-transparent" style={{ background: '#0FA060' }}>
                    <Image
                        src="/Vector.png"
                        alt="vector"
                        width={20}
                        height={20}
                    />
                </div>
                
            </div>
            <div className="flex my-[1.5rem] justify-center items-center">
                <div className="relative flex border rounded-lg px-[0.8rem] py-[0.5rem] h-fit" style={{ background: '#F3F5F6' }}>
                    <div className="h-32 w-2 flex flex-col">
                        <div className="bg-blue-500 h-full rounded-t-full rounded-b-full"></div>
                    </div>
                    <div className="px-[1rem]">
                        <p>
                        <span className="text-blue-600">@Elijah B.</span> has blockers related to withdrawals and local transfers, so i started
                        working on a fix to get the app ip and running ASAP
                        </p>
                        <div className="absolute bottom-3 right-3 mt-6 flex gap-2 rounded-xl w-fit px-[0.5rem] py-[0.4rem]" style={{ background: '#FFFFFF', border: '1px solid #E8E8E8' }}>
                            Add Image
                            <Image
                                src="/image.png"
                                alt="image"
                                width={20}
                                height={20}
                            />
                        </div>
                    </div>
                </div>
                <div className="ml-4 p-[0.5rem] rounded-lg" style={{ background: '#F3F3F3', color: '#F3F3F3', border: '1px solid #E8E8E8' }}>
                    <Image
                        src="/Vector.png"
                        alt="vector"
                        width={25}
                        height={25}
                    />
                </div>
            </div>
        </div>
        <div className="w-full container flex justify-end">
            <div className="w-fit  px-[2rem] py-[1rem] rounded-lg font-bold border-none outline-none" style={{ background: '#0FA060' }}>Proceed</div>
        </div>
      </div>
  )
}
