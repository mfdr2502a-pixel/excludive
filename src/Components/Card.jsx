import React from 'react'
import { FaStar } from "react-icons/fa";
import Flex from './Flex';
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";




const Card = ({imgSrc,title,discountPrice,price,review,discountPercentage}) => {
  return (
    <div className='w-67.5'>
        <div className='relative'>
            <img src={imgSrc} alt="" />
            <h5 className='absolute top-3 left-3 py-1 px-3 bg-primary text-xs text-white rounded-sm'>-{discountPercentage}%</h5>
            <div className='absolute top-3 right-3 flex flex-col gap-y-4'>
                <div className='h-8.5 w-8.5 bg-white rounded-full flex justify-center items-center'><CiHeart className='text-2xl' /></div>
                <div className='h-8.5 w-8.5 bg-white rounded-full flex justify-center items-center'><IoEyeOutline className='text-2xl' /></div>
            </div>
        </div>
        <h2>{title}</h2>
        <Flex className="gap-3">
            <h3>${price}</h3>
            <h3>${discountPrice}</h3>
        </Flex>
        <Flex>
            <Flex className="text-amber-300">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </Flex>
            <h5>({review})</h5>
        </Flex>
    </div>
  )
}

export default Card