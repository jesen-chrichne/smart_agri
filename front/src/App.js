import React, {useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {FiSettings,FiMessageSquare} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import { useAlert } from 'react-alert';
import socket from './chatbot/socket';
import 'react-chatbot-kit/build/main.css';
import "./App.css";


import { useStateContext } from './contexts/ContextProvider';

import {Navbar, Footer, Sidebar,ThemeSettings} from './components';
import {Ecommerce,Orders,Calendar,Employees,Stacked,Pyramid,Customers,Kanban,Area,Bar,Pie,Financial,ColorPicker,ColorMapping,Editor,Line} from './pages';


const App =  () =>
{
    const {activeMenu, themeSettings, setThemeSettings,currentMode} = useStateContext();
    const alert = useAlert();
   
    useEffect(()=>{
        
        
        
    },[])  

    return(
        <div className={currentMode ==='Dark' ? 'dark' : ''}>
            <BrowserRouter>
                
                <div className="flex relative dark:bg-main-dark-bg">
                    {/* Floating button */}
                    <div className="fixed right-4 bottom-4" style={{zIndex:'1000'}}>
                        <div className="flex flex-row-reverse">
                            <div>
                                <TooltipComponent content="Settings" position="Top">
                                    <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                                    style={{  borderRadius:'50%'}}
                                    onClick={()=>setThemeSettings(true)}
                                    >
                                        <FiSettings />
                                    </button>
                                    
                                </TooltipComponent>
                            </div>            
                        </div>
                    </div>
                        
                
                    

                    {/* Sidebar */}
                    {activeMenu ? (
                        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                            <Sidebar />
                                
                        </div>
                    ) : (
                        <div className='w-0 dark:bg-secondary-dark-bg'>
                            <Sidebar />
                        </div>
                    )
                    }

                    
                    <div className={
                        `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${ activeMenu ?'md:ml-72': 'flex-2'}`
                    }>
                        {/* Navbar */}
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar />
                            {/* <ChatContainer /> */}
                        </div>
                    

                        <div>
                            { themeSettings &&  <ThemeSettings />}

                            <Routes>
                                {/* Dashboard */}
                                <Route path="/" element={<Ecommerce/>} />
                                <Route path="/overview" element={<Ecommerce/>} />

                                

                                {/* Apps */}
                                <Route path="/kanban" element={<Kanban/>} />
                                <Route path="/editor" element={<Editor/>} />
                                <Route path="/calendar" element={<Calendar/>} />
                                <Route path="/color-picker" element={<ColorPicker/>} />

                                
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
    
    
}

export default App;