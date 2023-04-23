import React from 'react'
import CountUp from 'react-countup'
import { fadeIn } from '../variants'
import { useInView } from 'react-intersection-observer' 
import { motion } from 'framer-motion'

const About = () => {

    const[ref, inView] = useInView({
        threshold:0.5,
    });
  return (
    <section className='section h-12  bg-white rounded-lg left-0 right-0' id='about' ref={ref}>
    <div className='container mx-auto'>
        <div>
            
            <div>
               
                <div className='flex gap-x-10 '>
                    <div className=' left-3 px-10' >
                        <h1 className=' text-slate-400'>Collaborate effectively</h1>
                        <div className='text-[40px] font-tertiary text-gradient mb-2 border-r border-black/20 h-[146px] mb[38px'>
                           {
                            inView ?
                            <CountUp start={0} end={200} duration={3}/>: null} 
                            <div className='font-Poppins text-sm tracking-[2px]'>
                        DELIGHTED <br/>
                        PATRONS
                        </div>
                        </div>
                        
                    </div>

                    <div>
                    <h1>Concluded triumphantly</h1>
                        <div className='text-[40px] font-tertiary text-gradient mb-2 border-r border-black/20 h-[146px] mb[38px'>
                           {
                            inView ?
                            <CountUp start={0} end={859} duration={3}/>: null} 
                            <div className='font-Poppins text-sm tracking-[2px]'>
                        FINISHED  <br/>
                        PROJECTS
                        </div>
                        </div>
                        
                    </div>

                    <div>
                    <h1>Bring on board a surplus of</h1>
                        <div className='text-[40px] font-tertiary text-gradient mb-2 border-r border-black/20 h-[146px] mb[38px'>
                           {
                            inView ?
                            <CountUp start={0} end={120} duration={3}/>: null} 
                            <div className='font-Poppins text-sm tracking-[2px]'>
                        PROFICIENT  <br/>
                        PROFESSIONALS
                        </div>
                        </div>
                        
                    </div>
                    <div>
                    <h1>Blog content update</h1>
                        <div className='text-[40px] font-tertiary text-gradient mb-2 border-r border-black/20 h-[146px] mb[38px'>
                           {
                            inView ?
                            <CountUp start={0} end={850} duration={3}/>: null} 
                            <div className='font-Poppins text-sm tracking-[2px]'>
                        DIGITAL MEDIA  <br/>
                        UPDATES
                        </div>
                        </div>
                        
                    </div>

                    <div>
                    <h1>Rising CEOs</h1>
                        <div className='text-[40px] font-tertiary text-gradient mb-2 border-r border-black/20 h-[146px] mb[38px'>
                           {
                            inView ?
                            <CountUp start={0} end={75} duration={3}/>: null} 
                            <div className='font-Poppins text-sm tracking-[2px]'>
                            CEO UNDERWENT  <br/>SUCCESSFUL TRAINING
                        
                        </div>
                        </div>
                        
                    </div>


                    
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default About