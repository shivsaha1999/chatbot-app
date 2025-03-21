import { useState, useRef, useEffect } from "react";
import { Paperclip, Send } from "lucide-react";
import "../styles/customScrollbar.css";
import "../styles/animations.css"; // Import the new CSS file
import VoiceRecorder from "./VoiceRecorder"; // Import the new component

const USER_SENDER = "user" as const;
const BOT_SENDER = "bot" as const;

const ChatWindow = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    {
      text: string;
      sender: typeof USER_SENDER | typeof BOT_SENDER;
      timestamp: string;
    }[]
  >([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    const isYesterday =
      date.toDateString() ===
      new Date(now.setDate(now.getDate() - 1)).toDateString();

    if (isToday) return "Today";
    if (isYesterday) return "Yesterday";
    return date.toLocaleDateString("en-GB");
  };

  // Function to handle message sending
  const sendMessage = () => {
    if (message.trim() === "") return;

    const now = new Date();
    const timestamp = formatTimestamp(now);
    const newMessages = [
      ...messages,
      { text: message, sender: USER_SENDER, timestamp },
    ];
    setMessages(newMessages);
    setMessage("");

    // Simulated bot response
    setTimeout(() => {
      const botTimestamp = formatTimestamp(new Date());
      setMessages([
        ...newMessages,
        {
          text: "This is a bot response!",
          sender: BOT_SENDER,
          timestamp: botTimestamp,
        },
      ]);
    }, 1000);
  };

  // Function to handle file input click
  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Function to handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("File selected:", file.name);
      // Handle file upload logic here
    }
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col flex-1 h-full p-6 bg-chatwindow-color">
      {/* Chat Messages Container */}

      <div
        ref={chatContainerRef}
        className="relative flex-1 overflow-y-auto p-6 space-y-4
           chat-message-container backdrop-blur-lg border-2
           rounded-2xl border-[var(--border-color)] custom-shadow"
      >
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to ChatBOT
            </h1>
            <p className="text-lg text-color text-center">Ask me anything...</p>
          </div>
        ) : (
          <>
            <div className="flex justify-center mb-4">
              <span className="bg-gray-500 text-color text-xs py-1 px-3 rounded-full">
                {messages[0].timestamp}
              </span>
            </div>
            {messages.map((msg, index) => (
              <div key={index} className="flex flex-col">
                <div
                  className={`relative p-3 w-fit max-w-md rounded-xl shadow-md ${
                    msg.sender === USER_SENDER
                      ? "bg-message text-color self-end ml-auto"
                      : "text-color self-start"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Chat Input Area */}
      <div
        className={`relative flex items-center mt-4 p-3
              border-2 rounded-xl chat-input-area backdrop-blur-lg 
              transition-transform duration-300 ease-out border-[var(--border-color)]
              transform perspective-1000 hover:rotate-x-2 hover:-translate-y-2 hover:scale-[1.02] custom-shadow`}
      >
        <button
          className="p-2 cursor-pointer"
          onClick={handleFileInputClick}
          title="Add a file"
        >
          <Paperclip className="w-5 h-5 text-gray-600" />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask me anything..."
          className="flex-1 mx-3 p-2 bg-transparent outline-none text-color placeholder-gray-500"
        />
        {isRecording && (
          <div className="dancing-lines">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <VoiceRecorder
          onStart={() => setIsRecording(true)}
          onStop={() => setIsRecording(false)}
          onTranscribe={setMessage}
        />
        <button
          onClick={sendMessage}
          className="p-2 hover:bg-blue-600 bg-indigo-500 text-white rounded-full ml-2 shadow-lg"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;