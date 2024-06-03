import React from 'react'

const DashCards = ({ icon, h1text, number, highNumber, highText }) => {
    return (
        <div className='w-[20em] h-40 border rounded-lg mt-4 bg-white shadow-md'>
            <div className='flex items-center justify-between p-4 '>
                <div className=''>
                    {icon}
                </div>

                <div className='flex-col'>
                    <p className='text-lg font-semibold text-gray-400'>
                        {h1text}
                    </p>
                    <span className='text-2xl flex items-end justify-end font-bold'>{number}</span>
                </div>
            </div>
            <div className='border-b-2 w-[17em] border-gray-400 mx-auto '></div>
            <div className='flex justify-between px-10 pt-2'>
                <p className='text-green-600 font-semibold text-xl'>
                    {highNumber}
                </p>
                <p className='text-lg font-medium'>
                    {highText}
                </p>
            </div>
        </div>
    )
}

export default DashCards