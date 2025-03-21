import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import ChatHistory from "./components/ChatHistory";

const App = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-50 dark:bg-gray-900">
      {/* Left Side section */}
      <ChatHistory />

      {/* MId section */}
      <div className="flex-1 flex flex-col">
        <ChatWindow />
      </div>

      {/* Right Side Section */}
      <Sidebar />
    </div>
  );
};

export default App;
