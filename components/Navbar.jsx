import Image from 'next/image';

const Navbar = () => {
  return (
   <nav>
        <div className='flex px-[3rem] gap-11'>
            <div>
                <Image src={"/refro-logo-svg.png"} className='h-[4rem] w-[4rem] object-fit pt-2' width={200} height={200}/>
            </div>
            <div className='flex p-[1rem] w-full lg:justify-between sm:justify-end'>
                <div className='hidden lg:flex gap-8'>
                    <div className='flex w-fit h-fit gap-2 font-bold bg-white rounded-full px-4 py-2 ' style={{ border: '1px solid #E8E8E8' }}>
                        Home
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
                        My team
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
                        Account
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

                <div className='flex px-4 py-3 gap-3 '>
                    <div>
                        <Image
                            src="/Notifications.png"
                            alt='notification'
                            width={35}
                            height={35}
                        />
                    </div>

                    <div className='flex gap-2 font-bold px-3 py-1 rounded-full' style={{ background: 'linear-gradient(180deg, #FFAD33 0%, #FF9900 100%)' }}>
                        <div>
                            <Image
                                src="/coin.png"
                                alt='coin'
                                width={25}
                                height={25}
                            />
                        </div>
                        <span className='text-white'>12</span>
                    </div>
                </div>
            </div>
        </div>
   </nav>
  )
}

export default Navbar