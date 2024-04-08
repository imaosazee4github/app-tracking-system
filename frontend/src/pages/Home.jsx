import imagejob from '../images/image1.png'
import imagejob1 from '../images/imagejob2.png'


export const Home = () => {
 

    return (
        
        <div className='w-[1440px] h-sreen  '>
            <div className='flex justify-center pt-20 bg-[#D9D9D9]'>
                <div className='h-[355px]   w-[483px] leading-3 py-12 m-20'>
                    <h4 className='font-inter font-bold text-6xl text-[#D32242]'>Recruit the <br /> best talent in <br />fews clicks</h4>
                    <button className='border-1 bg-[#D32242] w-[125px] h-[40px] m-10 rounded-full text-white font-bold'>Post jobs</button>
                </div>
               
                <div><img src={imagejob} alt="" className='border-0 rounded-full' /></div>
                
            </div>

            <div className='flex justify-center pt-20 bg-[#D32242]'>
                <div className='h-[355px]   w-[483px] leading-3 py-12 m-20'>
                    <h4 className='font-inter font-bold text-4xl text-white'>Look for <br /> job to Apply? </h4>
                    <button className='border-1 bg-black w-[155px] h-[45px] m-10 rounded-full text-white font-bold'>Apply for jobs</button>
                </div>
               
                <div><img src={imagejob1} alt="" className='border-0 rounded-full'/></div>
                
            </div>
            
        </div>
            
    );
};

export default Home;














