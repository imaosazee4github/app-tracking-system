import React, { useState } from 'react';
import data from '../utils/data';
import { MdLocationCity } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";

const Jobs = () => {
    const [searchItems, setSearchItems] = useState('');
    const [currentPage, setCurrentPages] = useState(1);
    const [itemsPage] = useState(3);

    const filterItems = data.filter((item) =>
        item.role.toLowerCase().includes(searchItems.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPage;
    const indexOfFirstItem = indexOfLastItem - itemsPage;
    const currentItems = filterItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPages(pageNumber);

    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearchItems(value);
        setCurrentPages(1);
    };

    const renderIcon = (iconName) => {
        switch (iconName) {
            case 'MdLocationCity':
                return <MdLocationCity />;
            case 'IoLocationOutline':
                return <IoLocationOutline />;
            case 'FaPeopleGroup':
                return <FaPeopleGroup />;
            default:
                return null;
        }
    };

    return (
        <div className='w-[1440px] h-screen bg-[#9b9a9a] p-20'>
            <div className='flex ml-10 gap-40'>
                <div className='flex ml-20'>
                    <h2 className='text-2xl border-1 rounded-full bg-[#d33343] p-2 font-bold text-white w-[54px] '>26</h2>
                    <select className='h-14 px-20 ml-10'>
                        <option value='' className='outline-0 border-0 '>Engineer</option>
                    </select>
                </div>
                <form action='' className='px-10'>
                    <input
                        type='text'
                        placeholder='Enter Your Dream Job'
                        value={searchItems}
                        onChange={handleInputChange}
                        className='h-14 w-[400px] border-0 outline-none rounded-full px-12 py-4'
                    />
                </form>
            </div>
            <div className='py-10'>
                {currentItems.map((item) => (
                    <div key={item.id} className='w-[1067px] h-[288px] border-1 bg-white rounded-md mx-12 my-8'>
                        <div>
                            <h4 className='font-inter text-24 font-bold leading-29.05  cursor-pointer'>{item.role}</h4>
                            <div className='flex gap-10'>
                            <span className='text-red-500'>{renderIcon(item.iconcomp)}</span>
                            <p className=''>{item.company}</p>     
                                <button className=''>{item.button}</button>                              
                            </div>
                            <div>
                                <p>{item.location}</p>
                                <span>{renderIcon(item.iconLoction)}</span>
                            </div>
                            <div>
                                <p>{item.salary}</p>
                                <p>{item.type}</p>
                            </div>
                            <div>
                                <div>
                                    <span>{renderIcon(item.iconPeople)}</span>
                                    <p>{item.numberofApplicants}</p>
                                </div>
                                <div>
                                    <span>{item.openDate}</span>
                                    <p>{item.closeDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <div className='flex justify-center ml-4 '>
                    {[...Array(Math.ceil(filterItems.length / itemsPage)).keys()].map((number) => (
                        <button key={number + 1} onClick={() => paginate(number + 1)} className={`mx-2 ${currentPage === number + 1 ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'} py-2 px-4 rounded-full`}>{number + 1}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Jobs;











                    

