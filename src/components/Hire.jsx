import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
import wireless from '../assets/business.jpg'
import tech from '../assets/artficial.jpg'
const ours = [
    {
       
        description:"5 Ways Technology Has Improved Business Today",
        link:"Learn more"
    },
    {
        
        description:"How Wireless Technology is Changing Business",
        link:"Learn more"
    },
    {
        
        description:"Blockchain Technology Effects on Logistics Sector?",
        link:"Learn more"
    },
    {
        
        description:"How Technology Made Businesses More Efficient",
        link:"Learn more"
    },
    {
        
        description:"Data Secure on Transitioning to a New Office",
        link:"Learn more"
    },
]

const images =[
    {
          image:tech,
          date:'April,23,2023',
          title:"5 Ways Technology Has Improved Business Today",
          description:'They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses.'  
    },
    {
        image:wireless,
        date:'April,23,2023',
        title:"How Wireless Technology is Changing Business",
        description:'It is far wiser to do your own installations and ensure that all data flowing through the organization has end-to-end encryption'  
  },
]

const Hire = () => {
  return (
    <section className='section' id='service'>
        
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-8'>

            <motion.div 
            variants={fadeIn('right', 0.3)}
            initial ='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            
     className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12'>
        
        <h3 className='h3 max-w-[455px] mb-16'>Blog & News</h3>
        <h2 className='h2 text-grey-500 mb-6'>Interesting articles  <span className="text-cyan-600">updated daily</span></h2>

        <div>
        {
            ours.map((ours, index)=>{
                const {description}= ours;
                return(
                    <div className=' h-[50px] mb[38px] flex ' key={index}>
                    <div className='max-w-[476px]'>
                        
                        <p className='font-secondary leading-tight cursor-pointer hover:text-blue-500'>
                        <BsArrowRight/>
                            
                            {description}</p>
                        </div>
                    
                </div>
                ); 
                
                
            })
        }

</div>


        <button className='btn btn-sm text-black mb-6'>Join Us</button>

        </motion.div>

    
    <motion.div 
    variants={fadeIn('left', 0.5)}
    initial ='hidden'
    whileInView={'show'}
    viewport={{once:false, amount:0.3}}
    className='flex-1'>
        <div className='flex flex-col lg:flex-row gap-8 mx-px grid grid-cols-2'>
        <div className=' py-16 h-full right-4'>
        <img src={tech} alt='image' className=' mb-[38px] '/>
        <h4 className=' text-slate-300'>April, 23,2023</h4>
        <h2 className='font-semibold text-lg my-3'>5 Ways Technology Has Improved Business Today</h2>
        <p className='font-secondary'>They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses.</p>
        
</div>
<div className=' py-16 h-16  '>
        <img src={wireless} alt='image' className=' rounded-md'/>
        <h4 className=' text-slate-300'>April, 23,2023</h4>
        <h2 className='font-semibold text-lg my-3'>How Wireless Technology is Changing Business</h2>
        <p className='font-secondary'>It is far wiser to do your own installations and ensure that all data flowing through the organization has end-to-end encryption.</p>
        
</div>


</div>
    </motion.div>
    </div>
        </div>
       

    </section>
  )
}

export default Hire