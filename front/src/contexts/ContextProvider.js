import React, {createContext,useContext,useState} from 'react';
import  {AiOutlineQuestionCircle} from 'react-icons/ai';
import {FaTemperatureLow,FaTemperatureHigh} from 'react-icons/fa';
import {BsFillCloudRainHeavyFill} from 'react-icons/bs';
import {MdWaterDrop} from 'react-icons/md';
import {AiOutlinePoweroff} from 'react-icons/ai';
import Connection from '../scripts/connexion';

const StateContext = createContext();
const initialState = {
    chat:false,
    cart:false,
    useProfile:false,
    notification:false,
    chatbot:false
}





export const ContextProvider = ({children})=>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked,setIsClicked] = useState(initialState);
    const handleClick = (clicked) =>{
        setIsClicked({...initialState,[clicked]: !isClicked[clicked]});
    }
    const [screenSize,setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');

    const createData = (icon,values,title,iconColor,iconBg,pcColor,callback) => {
     return  {
    
            icon,
            values,
            title,
            iconColor,
            iconBg,
            pcColor,
            callback
            
        }
    }

  
    const serv = new Connection('http://localhost:5000');
    const [temperature,setTemperature] = useState(createData(<FaTemperatureLow />,["12"],"Temperature",'#03C9D7','#E5FAFB','red-600',()=>{}));
    const [humidite, setHumidite] = useState(createData(<MdWaterDrop />,["23"],"Humidité",'#03C9D7','#E5FAFB','red-600',()=>{}));
    const [raindrop, setRaindrop] = useState(createData(<BsFillCloudRainHeavyFill />,["Yes"],"Rain Drop",'#03C9D7','#E5FAFB','red-600',()=>{}));
    const [dht_power, setDht_power] = useState(createData(<AiOutlinePoweroff />,["on"],"DHT power",'#03C9D7','#E5FAFB','red-600',()=>{}));
    const [rain_power, setRain_power] = useState(createData(<AiOutlinePoweroff />,["on"],"Rain drop power",'#03C9D7','#E5FAFB','red-600',()=>{}));
    const [motor_power, setMotor_power] = useState(createData(<AiOutlinePoweroff />,["on"],"Motor power",'#03C9D7','#E5FAFB','red-600',()=>{}));


    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode',e.target.value);
        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode',color);
        setThemeSettings(false);
    }
    const [themeSettings, setThemeSettings] = useState(false);

    return (
        <StateContext.Provider value={{activeMenu,setActiveMenu,
        isClicked,setIsClicked,handleClick,screenSize,setScreenSize,currentColor,currentMode,
        setCurrentColor,setCurrentMode,themeSettings,setThemeSettings,setMode,setColor,
        temperature,setTemperature,humidite, setHumidite,raindrop, setRaindrop,
        dht_power, setDht_power,rain_power, setRain_power,motor_power, setMotor_power, createData,serv}}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);