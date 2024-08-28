import Image from "next/image"

export default function Footer() {
  return (
    <div className="lg:hidden flex w-full">
        <div className='flex gap-8 px-[2rem] pt-[1rem] w-full justify-evenly'>
            <div className='flex gap-2 font-bold bg-white rounded-full px-4 py-2 text-center' style={{ border: '1px solid #E8E8E8' }}>
                <div>
                    <Image
                        src="/home2.png"
                        alt='home'
                        width={20}
                        height={20}
                    />
                </div>
            </div>
            <div className='flex gap-2 font-bold px-4 py-2'>
                <div>
                    <Image
                        src="/briefcase.png"
                        alt='team'
                        width={20}
                        height={20}
                    />
                </div>
            </div>
            <div className='flex gap-2 font-bold px-4 py-2'>
                <div>
                    <Image
                        src="/usersquare.png"
                        alt='account'
                        width={20}
                        height={20}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
