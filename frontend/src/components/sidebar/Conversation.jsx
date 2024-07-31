import { useEffect, useState } from "react";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [backgroundClass, setBackgroundClass] = useState('');

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  useEffect(() => {
    const savedBackground = localStorage.getItem('background') || '';
    setBackgroundClass(savedBackground);
  }, []);

  return (
    <>
      <div
        onClick={() => setSelectedConversation(conversation)}
        className={`${
          isSelected
            ? 'bg-zinc-200 text-black font-bold'
            : backgroundClass === 'Bg2' || backgroundClass === 'Bg3' || backgroundClass === 'Bg4' || backgroundClass === 'Bg7' || backgroundClass === 'Bg8'
            ? 'text-white'
            : 'text-black'
        } flex gap-2 hover:text-black items-center hover:bg-zinc-200 rounded p-2 cursor-pointer`}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className='w-12 rounded-full'>
            <img src={conversation.profilePic} alt='user avatar' />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className={`${
          isSelected
            ? 'bg-zinc-200 text-black font-bold'
            : backgroundClass === 'Bg2' || backgroundClass === 'Bg3' || backgroundClass === 'Bg4' || backgroundClass === 'Bg7' || backgroundClass === 'Bg8'
            ? 'text-white'
            : 'text-black'
        } 
		flex gap-2 hover:text-black items-center hover:bg-zinc-200 rounded p-2 cursor-pointer`}
      >{conversation.fullName}</p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  );
};

export default Conversation;
