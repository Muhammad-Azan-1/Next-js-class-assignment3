import Image from 'next/image'

const header = () => {
  return (
    <>
    <div className="h-24 bg-white-900 shadow-lg size-full flex justify-evenly items-center fixed top-0 z-50">

      <div>
    <Image
    src="/Images/Logo.png"
    alt="Logo"
    width={60}
    height={60}
    />
    </div>

    <div className='flex justify-evenly w-2/4'>
        <a href=''>Home</a>
        <a href=''>About us</a>
        <a href=''>Contact us</a>
        <a href=''>Services</a>
    </div>

    <div className='flex justify-around w-1/6'>
      <button>Login</button>
      <button>Book Scooter</button>
    </div>

      </div>
         
    </>
  )
}

export default header



