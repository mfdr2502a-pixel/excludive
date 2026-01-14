import React from 'react'
import SecHeading from './SecHeading'
import Card from './Card'
import console from "../assets/console.png"
import Flex from './Flex'
import CountDown from './CountDown'

const FlashSales = () => {
  return (
    <>
    <div className='mt-41.25'>
        <div className='container'>
            <SecHeading title="Today’s" heading="Flash Sales"/>
            <CountDown/>
            <Flex className='mt-10 justify-between'>
                <Card
                    imgSrc={console}
                    title="HAVIT HV-G92 Gamepad"
                    discountPrice="160"
                    price="120"
                    review="88"
                    discountPercentage="40"

                />
                <Card
                    imgSrc={console}
                    title="HAVIT HV-G92 Gamepad"
                    discountPrice="160"
                    price="120"
                    review="88"
                    discountPercentage="40"

                />
                <Card
                    imgSrc={console}
                    title="HAVIT HV-G92 Gamepad"
                    discountPrice="160"
                    price="120"
                    review="88"
                    discountPercentage="40"

                />
                <Card
                    imgSrc={console}
                    title="HAVIT HV-G92 Gamepad"
                    discountPrice="160"
                    price="120"
                    review="88"
                    discountPercentage="40"

                />
            </Flex>
        </div>
    </div>
    </>
  )
}

export default FlashSales