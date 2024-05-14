import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ChatBox from './ChatBox';
import React from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Chat = ({ messages,  open, handleChatBoxModal }) => {
    console.log("MESSAGES", messages);
    const [tabs, setTabs] = useState(tabsPanel);



    function setCurrentTab(tabName) {
        console.log('TAB NAME', tabName);
        const tabsState = tabs.map((tab) => {
            tab.current = false;
            if (tab.name === tabName) {
                tab.current = true;
                setCurrent(tabName);
                console.log('TabNAMe', tabName);
            }
            return tab;
        });
        console.log('updatedTasks', tabsState);
        setTabs(tabsState);
    }

    return (
        <div className="relative" onClick={()=>handleChatBoxModal()}>
            <div class="h-full w-96 bg-slate-50 border-r flex flex-col">
              
                {/* {messages.map((message, index) => ( */}
                    <div key={"index"} className="px-5 py-4 flex items-center cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                        <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500"
                            className="h-12 w-12 border-2 border-white rounded-full" alt="" />
                        <div className="ml-4">
                            <p className="text-md font-semibold text-slate-600 m-0 p-0">{messages[0].name} </p>
                            <p className="text-xs text-slate-400 -mt-0.5 font-semibold" >{messages[0].email}</p>
                        </div>
                    </div>
                {/* ))} */}
            </div>
           {/* <ChatBox /> */}
        </div>
    );
};

export default Chat;

const tabsPanel = [
    { name: 'All', href: '#', data: 308, current: false },
    { name: 'Archived', href: '#', data: '2.4k', current: true },
];