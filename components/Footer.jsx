
import React from 'react'
import Link from 'next/link'
import { BsLinkedin, BsInstagram, BsTwitter, BsFacebook, BsYoutube } from 'react-icons/bs'

function Footer() {
  return (
    <div className='bg-[#0b2546] text-white'>
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#0b2546] py-7'>
          <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
          Curious?? <span className='text-teal-400'>Please let's connect</span>
          <br />
            <p className='lg:text-3xl text-2xl'>
              For any information at all, our customer service team <br /> is 
              available to take your queries. We also love feedbacks <br /> and 
              suggestions.
            </p>
          </h1>
          <div>
            <h1 className='lg:text-2xl text-2xl mb-7'>Send us your feedback</h1>
            <form>
              <input type='text' placeholder='Your Email' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-3 rounded px-2 focus:outline-none'/>
              <br /> <br />
              <textarea type='text' placeholder='Send us Your Message' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-3 rounded px-2 focus:outline-none'></textarea>
              <br /> <br />
              <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-3 rounded-md text-white sm:w-72 md:w-auto w-full'>Send</button>
            </form>
          </div>
      </div>
      <div className='bg-[#2f6bb9]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:px-40 px-5 py-16'>
          <ul className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 justify-items-start'>
                <li>
                  <Link href='/HomePage'>
                      Home
                  </Link>
                </li>
              
              <li>
                <Link href='/AboutUs'>
                    About Us
                </Link>
              </li>
              <li>
                <Link href='/Services'>
                  Services
                </Link>
              </li>
              <li>
                <Link href='/OurWork'>
                  Our Work
                </Link>
              </li>
              <li>
                <Link href='/ContactUs'>
                 Contact Us
                </Link>
              </li>
              <li>
                <Link href='/Blog'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href='/Careers'>
                  Careers
                </Link>
              </li>
              <li>
                <Link href='/TrainingProg'>
                  Our Trainings
                </Link>
              </li>
              <li>
                <Link href='/Portfolio'>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href='/FAQ'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href='/Testimonials'>
                  Testimonials
                </Link>
              </li>
            </ul>
            <div class=' grid justify-items-start'>
            <p className=''>team@elanafrica.com</p>
            <p className=''>Tel: +2347031150441</p>
            <p class='ml-8'>+2348023033175</p>
            <p className=''>Lagos, Nigeria.</p>
          </div>
        </div>
        <hr />
        <div className='bg-[#161515] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-2 text-sm pb-5'>
          <p className='mt-6 ml-12 text-3px text-lg'>
            <Link href='/PrivacyTermsCondition'>
              Terms and Conditions
            </Link>
          </p>
          <p className='mt-6 ml-12 text-3px text-lg'>&copy; 2022 by Elan Africa</p> 
          <div class='flex mt-5 mb-5 ml-2'>
            <Link href='/'>
              <button class='mr-5 text-4xl text-teal-400'>
                <BsLinkedin />
              </button>
            </Link>
                
            <Link href='/'>
              <button class='mr-5 text-4xl text-teal-400'>
                <BsInstagram />
              </button>
            </Link>
            
            <Link href='/'>
              <button class='mr-5 text-4xl text-teal-400'>
                <BsTwitter />
              </button>
            </Link>

            <Link href='/'>
              <button class='mr-5 text-4xl text-teal-400'>
                <BsFacebook />
              </button>
            </Link>
          
            <Link href='/'>
              <button class='mr-5 text-4xl text-teal-400'>
                <BsYoutube />
              </button>
            </Link>     
          </div>
        </div>
      </div>
        {/* <div class='flex justify-around pt-10 pb-10'>
          <div>
            <p class='font-bold text-3xl'>
              Curious?? <br />
              Please let's connect
            </p>
            <div class='flex  mt-5 mb-5 text-gray-500'>
              <Link href='/'>
              <button class='mr-5 text-4xl'>
                <BsLinkedin />
              </button>
              </Link>
              
              <Link href='/'>
                <button class='mr-5 text-4xl'>
                  <BsInstagram />
                </button>
              </Link>
              
              <Link href='/'>
                <button class='mr-5 text-4xl'>
                  <BsTwitter />
                </button>
              </Link>

              <Link href='/'>
                <button class='mr-5 text-4xl'>
                  <BsFacebook />
                </button>
              </Link>
              
              <Link href='/'>
                <button class='mr-5 text-4xl'>
                  <BsYoutube />
                </button>
              </Link>
              
            </div>
            <p class='text-gray-400'>
              For any information at all, our customer service team <br /> is 
              available to take your queries. We also love feedback <br /> and 
              suggestions.
            </p>
          </div>
          <div class=''>
            <ul>
                <li>
                  <Link href='/HomePage'>
                      Home
                  </Link>
                </li>
              
              <li>
                <Link href='/AboutUs'>
                    About Us
                </Link>
              </li>
              <li>
                <Link href='/Services'>
                  Services
                </Link>
              </li>
              <li>
                <Link href='/OurWork'>
                  Our Work
                </Link>
              </li>
              <li>
                <Link href='/ContactUs'>
                 Contact Us
                </Link>
              </li>
              <li>
                <Link href='/Blog'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href='/Careers'>
                  Careers
                </Link>
              </li>
              <li>
                <Link href='/TrainingProg'>
                  Our Training programmes
                </Link>
              </li>
              <li>
                <Link href='/Portfolio'>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href='/FAQ'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href='/Testimonials'>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href='/PrivacyTermsCondition'>
                  Terms and Conditions
                </Link>
              </li>
              
            </ul>
          </div>
          <div class=''>
            <p className=''>team@elanafrica</p>
            <p className=''>Tel: +2347031150441</p>
            <p class='ml-8'>+2348023033175</p>
            <p className=''>Lagos, Nigeria.</p>
          </div>
        </div>
        <hr />
        <p class='flex justify-center text-md mt-10'>&copy; 2022 by Elan Africa</p> */}
    </div>
  )
}

export 
