import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='px-[10%] py-5 pt-10 bg-blackish'>
      <div className='flex text-accent items-center justify-between'>
        <div>
          <h1 className='font-black leading-5 text-[2rem]'>TaxEase</h1>
          <p className='text-lg'>Your personal tax coach 💸🏛️</p>
        </div>

        <div className='space-x-4'>
          <Link href="/signin">
            <button className='border border-accent text-accent font-semibold px-6 py-2 rounded-xl hover:bg-accent hover:text-black transition-all'>
               Login
            </button>
          </Link>

          <Link href="/signup">
            <button className='border border-accent text-accent font-semibold px-6 py-2 rounded-xl hover:bg-accent hover:text-black transition-all'>
              Signup
            </button>
          </Link>
          {/* Payment Button */}
          <Link href="/payment">
            <button className='border border-accent text-accent font-semibold px-6 py-2 rounded-xl hover:bg-accent hover:text-black transition-all'>
              Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
