import { useState } from "react";
import { Menu, Search, PlusCircle } from "lucide-react";
import Tooltip from '@mui/material/Tooltip';
import { LogOut } from "lucide-react";

const ChatHistory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const conversations = ["Conversation 1", "Conversation 2", "Conversation 3"];

  const filteredConversations = conversations.filter(conversation =>
    conversation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative h-full w-60 bg-history-color text-color flex flex-col justify-between">
      <div className="p-3">
        <h2 className="text-3xl font-semibold title pb-3">ChatBot UI</h2>
        <hr className="border-t border-gray-200 mb-3" />
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-1 rounded-md bg-white/20 text-color placeholder-text-color focus:outline-none"
            style={{ height: '30px' }}
          />
          <Search className="absolute right-2 top-2 w-3 h-3 text-color" />
        </div>
        <h2 className="text-lg text-color font-semibold title mb-1">Chat History</h2>
        <hr className="border-t border-gray-200 mb-3" />
        <ul className="space-y-1">
          {filteredConversations.map((conversation, index) => (
            <li key={index} className="p-1 rounded-md cursor-pointer hover:bg-white/20 transition duration-300 flex items-center">
              <Menu className="w-4 h-4 mr-2" />
              {conversation}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-3 mb-7">
        <Tooltip title="New Chat" placement="right">
          <button className="flex items-center justify-center w-full p-2 bg-white/20 text-color rounded-md hover:bg-white/30 transition duration-300 transform hover:scale-105">
            <PlusCircle className="w-4 h-4 mr-2" />
            <span>New Chat</span>
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default ChatHistory;