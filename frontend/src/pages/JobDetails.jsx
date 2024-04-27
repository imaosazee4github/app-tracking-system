import { MdLocationCity } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const JobDetails = () => {
    return (
      <>
      <div className="w-[1440]  bg-[#D9D9D9] h-[2024px] ">
  
         <h4 className=" font-inter text-3xl font-bold  text-center py-20">Job Application</h4>
        <div className="bg-white w-[1070px] h-[1300px] m-auto rounded-[20px]">
         <span className="flex justify-end mx-20 py-10 "> 
         <Link to='/jobs'>
         <FaArrowLeft className="text-3xl bg-red-400 rounded-full w-10"/>
         </Link></span>
        <div className='w-[1009px] h-[188px] border-1 bg-white rounded-3xl m-auto py-20'>
                        <div className=" ml-10 rounded-3xl py-8   border-[2px] border-[#D32242] w-[900px] h-[188px]">
                           <h4 className='font-inter text-24 font-bold leading-1  cursor-pointer mx-4 '>Frontend</h4>
                            <div className='flex gap-4 justify-between mx-4'>
                                <div className='inline-flex gap-1 align-middle'>
                            <span className='text-red-500 text-2xl mt-1'>
                              <MdLocationCity/>
                            </span>
                            <p className=''>xyz Engineering</p>  
                            </div>
                            </div>
                            <div className='inline-flex ml-6'>
                            <span className='mt-1'>
                              <IoLocationOutline />
                            </span>
                                <p>Lagos</p>
                                
                            </div>
                            <div className='flex ml-6 gap-4'>
                                <p className='border-1 rounded-full px-2 bg-[#d9d9d9]'>#200,000</p>
                                <p className='border-1 rounded-full px-2 bg-[#d9d9d9]'>Onsite</p>
                            </div>
                            <div className='flex gap-4 font-inter text-sm'>
                                <div className='flex mt-3 ml-6 gap-2'>
                                    <span className='mt-1'>
                                      <FaPeopleGroup />
                                    </span>
                                    <p>applications</p>
                                </div>
                                <div className='flex mt-3 gap-4'>
                                    <span>Posted on 4th, March 2024</span>
                                    <p>Closed on 4th, March 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="m-20">
                        <div className="flex justify-between mb-10">
                          <form action="" className="w-[380px] h-[105px] border-0 py-2 font-bold"> First Name
                          <input type="text" value='' placeholder="Enter Your Full Name" className="w-[380px] h-[76px] p-4 border-2 border-[#D32242] outline-0"/>
                          </form>
                          <form action="" className="w-[380px] h-[105px] border-0 py-2 font-bold"> Last Name
                          <input type="text" value='' placeholder="Enter Your Last Name" className="w-[380px] h-[76px] p-4 border-2 border-[#D32242] outline-0"/>
                          </form>
                        </div>
                        <div className="flex justify-between mb-10">
                          <form action="" className="w-[380px] h-[105px] border-0 py-2 font-bold"> Phone Number
                          <input type="number" value='number' placeholder="Enter Your Phone Number" className="w-[380px] h-[76px] p-4 border-2 border-[#D32242] outline-0"/>
                          </form>
                          <form action="" className="w-[380px] h-[105px] border-0 py-2 font-bold"> Email
                          <input type="email" value='' placeholder="Enter Your Email" className="w-[380px] h-[76px] p-4 border-2 border-[#D32242] outline-0"/>
                          </form>
                        </div>
                        <div className="flex justify-between mb-20">
                          <form action="" className="w-[380px] h-[105px] border-0 py-2 font-bold"> Date of Birth
                          <input type="date" value='' placeholder="Enter Your Full Name" className="w-[380px] h-[76px] p-4 border-2 border-[#D32242] outline-0"/>
                          </form>
                          <form action="" className="w-[380px] h-[105px] border-0 py-2 font-bold"> Year of Graduation
                          <input type="text" value='' placeholder="" className="w-[380px] h-[76px] p-4 border-2 border-[#D32242] outline-0"/>
                          </form>
                        </div>
                        <h2 className="font-bold">Select skills</h2>
                        <div  className="w-[380px] h-[76px] outline-0 border-2 border-[#D32242] flex justify-around">
                          <select className="outline-0 border-0"><option value="">Javascript</option></select>
                          <select className="outline-0"><option value="">React</option></select>
                          <select className="outline-0"><option value="">Typescript</option></select>
                          </div>
                          </div>
                          <button className='border-1 bg-[#D32242] w-[325px] h-[60px]  rounded-full text-white font-bold mx-80 my-10'>Submit</button>
                    </div>

        </div>
      </div>
      </>
    )
  }
  
  export default JobDetails