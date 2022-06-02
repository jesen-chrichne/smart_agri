import React, { useState } from 'react'
//import {BsCurrencyDollar} from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';
import {FaTemperatureLow,FaTemperatureHigh} from 'react-icons/fa';
import {BsFillCloudRainHeavyFill} from 'react-icons/bs';
import {MdWaterDrop} from 'react-icons/md';
import {AiOutlinePoweroff} from 'react-icons/ai';
import {Stacked,Pie,Button,SparkLine} from '../components';

import {earningData,SparklineAreaData,ecomPieChartDat} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import Connection from '../scripts/connexion';



const Ecommerce = () => {
  const {temperature,setTemperature,humidite,setHumidite,raindrop, setRaindrop,
    dht_power, setDht_power,rain_power, setRain_power,motor_power, 
    setMotor_power, createData,currentColor,serv} = useStateContext();

  
  const data = 
  [
    temperature,
    humidite,
    raindrop,
    dht_power,
    rain_power,
    motor_power
  ]

  const temp = ()=>{
    setTemperature(async(prev)=>{
      return {...prev,['values']:[await serv.getData("temperature")]}
    })
  }
  useState(async ()=>{
    setTemperature(createData(<FaTemperatureLow />,[ await serv.getData("temperature")],"Température",'#03C9D7','#E5FAFB','red-600'))
    setHumidite(createData(<MdWaterDrop />,[await serv.getData("humidite")],"Humidité",'#03C9D7','#E5FAFB','red-600'))
    setRaindrop(createData(<BsFillCloudRainHeavyFill />,[await serv.getData("raindrop")],"Rain drop",'#03C9D7','#E5FAFB','red-600'))
    setDht_power(createData(<AiOutlinePoweroff />,[await serv.getData("dht_power")],"DHT power",'#03C9D7','#E5FAFB','red-600'))
    setRain_power(createData(<AiOutlinePoweroff />,[await serv.getData("rain_power")],"Rain drop power",'#03C9D7','#E5FAFB','red-600'))
    setMotor_power(createData(<AiOutlinePoweroff />,[await serv.getData("motor_power")],"Motor power",'#03C9D7','#E5FAFB','red-600'))
  },[]);

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <p className='font-bold text-gray-400'>Afficher les données</p>
          <p className='text-2xl'>Depuis</p>
          <div className='mt-6'>
            
              <Button color="white" bgColor="green" text="Arduino" borderRadius="10px" size="md"/>
              
              <Button color="white" bgColor="green" text="BD" borderRadius="10px" size="md"/>
            
            
          </div>
        </div>
        
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {data.map((item)=>(
            <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
              <button type="button" style={{color:currentColor || item.iconColor,backgroundColor:item.iconBg}} className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
                {item.icon}
              </button>
              <p className='mt-3'>
                
                <span className='text-lg font-semibold'>
                  {item.values[0]}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  depuis bd
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>
                {item.title}
              </p>
            </div>
            ))}
        </div>
      </div>

      <div className='flex gap-10 flex-wrap justify-center'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
            <div className='flex justify-between '>
              <p className='font-semibold text-xl'>
                Test
              </p>
              <div className='flex item-center gap-4'>
                <p className='flex item-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>
                    Test
                  </span>
                </p>
                <p className='flex item-center gap-2 text-green-400 hover:drop-shadow-xl'>
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>
                    Test
                  </span>
                </p>
              </div>
            </div>
            <div className='mt-10 flex gap-10 flex-wrap justify-center'>
              <div className='border-r-1 border-color m-4 pr-10'>
                <div>
                  <p>
                    <span className='text-3xl font-semibold'>
                      21321
                    </span>
                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>
                      23%
                    </span>
                  </p>
                  <p className='text-gray-500 mt-1'>Test</p>
                </div>
                <div>
                  <p>
                    <span className='text-3xl font-semibold'>
                      21321
                    </span>
                    
                  </p>
                  <p className='text-gray-500 mt-1'>Test</p>
                </div>

                <div className='mt-5'>
                  <SparkLine currentColor="blue" id="line-spakline" type='Line' height="80px" width="250px" data={SparklineAreaData} color="blue"/>
                </div>
                <div className='mt-10'>
                  <Button color="white" bgColor="blue" text="Download Report" borderRadius="10px" />
                </div>
              </div>
              <div>
                <Stacked width="320px" height="360px" />
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Ecommerce