import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import CreateableSelect from 'react-select/creatable'


const CreateJobs = () => {
    const[selectOption, setSelectOptions] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        data.skils = selectOption
        fetch("http://localhost:3000/admin/postjobs", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result))
    }
    const options = [
        {value:"Javascrpts", label: "Javascript"},
        {value:"C++", label: "C++"},
        {value:"Ruby", label: "Ruby"},
        {value:"Tyscripts", label: "Typescript"},
        {value:"Mongodb", label: "Mongodb"},
        {value:"Java", label: "Java"}

    ];


  return (
    <div className=" p-20 bg-[#d9d9d9]">
    
    <form onSubmit={handleSubmit(onSubmit)} className='bg-white border-2 rounded-md border-gray-300 '> 
    {/* <div className=" justify-between mb-6  "> */}
    <div className='m-20 py-2'>
    <div className=" border-0  font-bold mx-20 mb-8">
        <label htmlFor='' className='mx-8 font-bold text-2xl'>Job Title</label>
    <input type="text"  defaultValue={"Frontend"} {...register("role")} className="w-[1000px] h-10 border-2 border-[#d9d9d9] outline-0 px-2"/>
    </div>
    <div className="border-0  font-bold mx-20 mb-8">
        <label htmlFor='' className='mx-8 font-bold text-2xl'>Company Name</label>
    <input type="text"  placeholder="Microsoft" {...register("company")} className="w-[1000px] h-10 border-2 border-[#d9d9d9] outline-0 px-2"/>
    </div>     
    
    <div className="border-0  font-bold mx-20 mb-8">
        <label htmlFor='' className='mx-8 font-bold text-2xl'>Location</label>
    <input type="text"  placeholder='Lagos' {...register("location")} className="w-[1000px] h-10 border-2 border-[#d9d9d9] outline-0 px-2"/>
    </div>
    <div className="border-0  font-bold mx-20 mb-10">
        <label htmlFor='' className='mx-8 font-bold text-2xl'>Maximun Salary</label>
    <input type="text"  placeholder="#250,000" {...register("salary")} className="w-[1000px] h-10 border-2 border-[#d9d9d9] outline-0 px-2"/>
    </div>  

      <div className='mb-8 flex justify-around w-[1000px] h-[100px] mx-20 border-2 border-[#d9d9d9]'>
      <div className="block border-0 border-[#d9d9d9] ju w-[251px] h-[76px] bg-white">
        <label htmlFor='' className='font-bold border-[#d9d9d9] text-xl mx-6 '>Job Type</label>
        <select {...register("type")} className='w-[240px] h-[70px] border-b-2 outline-0 text-red-700 font-extrabold'>
        <option value="">Choose job type</option>
        <option value="remote">Remote</option>
        <option value="onsite">Onsite</option>
        <option value="hybrid">Hybrid</option>
      </select>    
    </div> 

        <div className='py-5'>
    <label htmlFor='' className='mx-4  text-xl'>Posted Date</label>
    <input type="date" placeholder="date" {...register("openDate", { max: -3})} 
    className="w-[140px] h-[36px] border-0 border-[#D32242] outline-0  rounded-full"/>
    </div>

    <div className='py-5'>
    <label htmlFor='' className='mx-4 text-xl '>Closed Date</label>
    <input type="date" placeholder="date" {...register("closeDate", { max: -3})} 
    className="w-[140px] h-[36px] border-0 border-[#D32242] outline-0  rounded-full"/>
    </div>
    </div>

    <div className='mx-20 mb-10'>
        <label htmlFor='' className='font-bold text-2xl mx-4'>Required skill set</label>
        <CreateableSelect 
        defaultValue={selectOption}
        onChange={setSelectOptions}
        options={options}
        isMulti
        className=' border-2  h-[24px] w-[1000px]'/>
    </div>
  
    <div className='block mx-10 w-[1100px] bg-gray-200 mb-10 '>
    <label htmlFor='' className='font-bold text-xl mx-12'>Job description</label>
    <textarea defaultValue={ "A DevOps engineer is responsible for the smooth operation of a company's IT infrastructure. They work with developers to deploy and manage code changes, and with operations staff to ensure that systems are up and running smoothly. To be successful in this role, a DevOps engineer must have a deep understanding of both development and operations processes, as well as a strong technical background."}
    placeholder='Job Description' className='bg-gray-200 w-[1100px] pl-3 py-1.5 focus: outline-none rows={10}' 
    {...register("job_descriptions")} />

    </div>
   
     <div className='flex justify-center'>
      <input type="submit" className='border-1 bg-[#D32242] w-[325px] h-[60px]  rounded-full text-white font-bold'/>
      </div>
      </div> 
    </form>
    </div>
    
  )
}

export default CreateJobs
