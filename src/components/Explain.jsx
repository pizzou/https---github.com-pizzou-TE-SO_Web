import React from 'react'
import tablet from '../assets/tablet.jpg'
import industry from '../assets/industry.jpg'
import reliable from '../assets/reliable.jpg'
const Explain = () => {
  return (
    <section class="flex min-h-screen items-center justify-center bg-slate-200 py-5 px-5">
        <div>
            <h3 className="text-center mt-1 text-gray-300">HIRE US, WHY NOT?</h3>
            <h1 className='text-center text-grey-500 mb-6'>How we claim <span className="text-cyan-600">to excel?</span></h1>
            
    
        
  <div class="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
    
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:text-blue-500">
        
      <div class="h-96 w-98">
        
        <img class="h-98 w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={tablet} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">TE-SO Management System</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Our technical experts have a flair for developing clean-coded websites based on customers’ needs, global guidelines and trends.</p>
        <button class="rounded-full bg-blue-500  py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
     
    </div>
    
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-98">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={industry} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Efficient Dabase Security</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Our technical experts have a flair for developing clean-coded websites based on customers’ needs, global guidelines and trends.</p>
        <button class="rounded-full bg-blue-500  py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
      
    </div>
    
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-98">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={reliable} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white te">Reliable Muli-functional Technology</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Our technical experts have a flair for developing clean-coded websites based on customers’ needs, global guidelines and trends.</p>
        <button class="rounded-full bg-blue-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
   
  </div>
  <div class="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer">
    <p class="font-com text-2xl font-semibold text-blue-500 animate-bounce">TE-SO <a href="https://unsplash.com" class="text-blue-500">Ltd</a></p>
  </div>
</div>


</section>

  )
}

export default Explain