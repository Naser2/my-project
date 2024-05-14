"use client" 

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import Navbar from '@/components/dashboardComponents/DashboardNavbar';
import Sidebar from '@/components/dashboardComponents/DashBoardSidebar';
import Message from '@/components/dashboardComponents/Message';
import MessageInput from '@/components/dashboardComponents/MessageInput';
import Chat from '../../components/dashboardComponents/Chat';
import ChatBox from '@/components/dashboardComponents/ChatBox';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const YourComponent = () => {
    const [tabs, setTabs] = useState(tabsPanel)
    const [currentTab, setCurrent] = useState('All')
    // const [inboxes, curentInbox] = useState(tabsPanel);
    const [selctedInbox, setSelectedInbox] = useState(tabsPanel);
   const [open, setOpen] = useState(false)

   function handleChatBoxModal(){
      setOpen(!open)
   }
 
 
   function setCurrentTab(tabName) {
     console.log('TAB NAME', tabName)
     const tabsState = [...tabs].map((tab) => {
       tab.current = false
       if (tab.name == tabName) {
         tab.current = true
         setCurrent(tabName)
         console.log('TabNAMe', tabName)
         // let completedtask = tasks[task.id].taskCompleted === true
         // setCompletedTasks([...completedTasks], completedtask)
       }
 
       return tab
     })
 
     console.log('updatedTasks', tabsState)
     setTabs(tabsState)
   }
    return (
        <div className="p-5 h-screen w-full bg-gray-100 mt-[10vh]">
            <Navbar />
            <div className="relative h-full flex  ">
                <Sidebar />
                <div className="h-full w-96 bg-slate-50 border-1  border-r  border-slate-200 flex flex-col">
                  {/* <div className="h-16 border-b  border-slate-200 px-4 flex items-center justify-center space-x-4"> */}
                  {/* <div class="h-full w-96 bg-slate-50 border-r flex flex-col"> */}
                    {/* <div className="mx-auto max-w-5xl md:px-4 sm:px-6 lg:px-8"> */}
                    <nav className="h-16 border-b  h-16 border-b  border-slate-200 px-4 flex items-center justify-center space-x-4" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <button
                            onClick={() => setCurrentTab(tab.name)}
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                                tab.current
                                    ? 'border-b-4 border-b-blue-500'
                                    : 'border-gray-100 dark:border-gray-600 text-gray-500 hover:text-gray-700',
                                'px-4 py-4'
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                        >
                            <div>
                                <div class="text-slate-900 pt-1 font-bold text-md dark:text-white">
                                    {tab.name}
                                </div>
                                <div class="mt-0.5 font-bold text-gray-400 leading-6">
                                    {tab.data}
                                </div>
                            </div>
                        </button>
                    ))}
                </nav>
                    {/* </div> */}
                  
                  {/* </div> */}
                  <>{ users.map((user, idx )=> {
                    return   <Chat key={idx} messages={user.messages}  open={open} handleChatBoxModal={handleChatBoxModal}/>
                  })
                }</>
                   <ChatBox  open={open} handleChatBoxModal={handleChatBoxModal} currentInbox={selctedInbox}/>
                    {/* <div className="h-full">
                    <>{ users.map((user, idx )=> {
                return  currentTab === "All" ? <>  <Message key={idx} sender={user} content={user.messages[0].body}
                 timestamp={user.messages[0].date} isMe={user.email ==="nassersanou23@gmail.com"}/>
                 </> : <>
                 <Message key={idx} sender={user} content={user.messages[0].body}
                 timestamp={user.messages[0].date} isMe={user.email ==="nassersanou23@gmail.com"}/>
                 </>
                })}</>
                    </div> */}
                </div>
                {/* <Chat messages={users[0].messages} /> */}
             
                {/* <Message /> */}
            </div>
            <MessageInput />
        </div>
    );
}

export default YourComponent;

const users = [
    {
        id: 1,
        name: 'Marcel Jones',
        email: 'atuny0@sohu.com',
        phone: '+63 791 675 8914',
        show: false,
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500',
        messages: [
            {
                id: 1,
                name: 'Marcel Jones',
                email: 'atuny0@sohu.com',
                avatar: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/51666762b86a449d8c6c78245dd45fe6-1673180406620/9abfc4de-ef83-45fe-bd66-7a4389941ee1.jpg',
                date: 'Apr 05, 2024',
                time: '7:36 AM',
                body: 'I hope you are doing well. This time I am in the hospital; my team partner has operated today. Maybe today I can\'t share with you the work. Please extend the delivery time by one day, and I will share the work with you after some hours.'
            },
            {
                id: 2,
                name: 'Marcel Jones',
                email: 'atuny0@sohu.com',
                avatar: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/51666762b86a449d8c6c78245dd45fe6-1673180406620/9abfc4de-ef83-45fe-bd66-7a4389941ee1.jpg',
                date: 'Apr 05, 2024',
                time: '7:36 AM',
                body: 'I hope you are doing well. This time I am in the hospital; my team partner has operated today. Maybe today I can\'t share with you the work. Please extend the delivery time by one day, and I will share the work with you after some hours.'
            },
            {
                id: 3,
                name: 'Marcel Jones',
                email: 'atuny0@sohu.com',
                avatar: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/51666762b86a449d8c6c78245dd45fe6-1673180406620/9abfc4de-ef83-45fe-bd66-7a4389941ee1.jpg',
                date: 'Feb 05, 2024',
                time: '3:21 PM',
                body: 'Hey all, <br/> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomised words which don\'t look even slightly believable.'
            },
            // Add more messages for Marcel Jones here
        ]
    },
    {
        id: 2,
        name: 'Sheldon Quigley',
        email: 'hbingley1@plala.or.jp',
        phone: '+7 813 117 7139',
        show: false,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500',
        messages: [
            {
                id: 1,
                name: 'Marcel Jones',
                email: 'atuny0@sohu.com',
                avatar: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/51666762b86a449d8c6c78245dd45fe6-1673180406620/9abfc4de-ef83-45fe-bd66-7a4389941ee1.jpg',
                date: 'Apr 05, 2024',
                time: '7:36 AM',
                body: 'I hope you are doing well. This time I am in the hospital; my team partner has operated today. Maybe today I can\'t share with you the work. Please extend the delivery time by one day, and I will share the work with you after some hours.'
            },
            // Add messages for Sheldon Quigley here
        ]
    },
    {
        id: 3,
        name: 'Leonard Leach',
        email: 'rshawe2@51.la',
        phone: '+63 739 292 7942',
        show: true,
        avatar: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500',
        messages: [
            {
                id: 1,
                name: 'Marcel Jones',
                email: 'atuny0@sohu.com',
                avatar: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/51666762b86a449d8c6c78245dd45fe6-1673180406620/9abfc4de-ef83-45fe-bd66-7a4389941ee1.jpg',
                date: 'Apr 05, 2024',
                time: '7:36 AM',
                body: 'I hope you are doing well. This time I am in the hospital; my team partner has operated today. Maybe today I can\'t share with you the work. Please extend the delivery time by one day, and I will share the work with you after some hours.'
            },
            // Add messages for Leonard Leach here
        ]
    }
];


const tabsPanel = [
    { name: 'All', href: '#', data:808, current: false },
    { name: 'Archived', href: '#', data:'2.4k', current: true },

  ]