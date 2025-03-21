import { useState } from "react";
import { Moon, Sun, LogOut, Settings, User, MessageSquare } from "lucide-react";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import Tooltip from "@mui/material/Tooltip";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [activeItem, setActiveItem] = useState("Chat");

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  // const toggleSidebar = () => {
  //   setCollapsed(!collapsed);
  // };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <aside
      className={`relative ${
        collapsed ? "w-16" : "w-64"
      } p-4 flex flex-col bg-sidebar-color text-color transition-width duration-300`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <ViewSidebarIcon
            className="cursor-pointer ml-2"
            style={{ fontSize: "20px" }}
          />
        </div>
        {/* <h2
          className={`text-sm font-semibold title ${
            collapsed ? "hidden" : "block"
          }`}
        >
          Collapse
          <ArrowForwardIcon
            className="animate-moveArrow"
            style={{ fontSize: "20px" }}
          />
        </h2> */}
      </div>
      <hr className="border-t border-gray-200 mb-4" />
      <div className="flex-1">
        <nav>
          <ul className="space-y-2">
            <li
              className={`flex items-center p-2 cursor-pointer hover:bg-white/20 rounded-md transition duration-300 ${
                activeItem === "Profile" ? "bg-white/20" : ""
              }`}
              onClick={() => handleItemClick("Profile")}
            >
              <Tooltip title="Profile" placement="right">
                <User className="w-5 h-5" />
              </Tooltip>
              <span className={`ml-2 ${collapsed ? "hidden" : "block"}`}>
                Profile
              </span>
            </li>
            <li
              className={`flex items-center p-2 cursor-pointer hover:bg-white/20 rounded-md transition duration-300 ${
                activeItem === "Chat" ? "bg-white/20" : ""
              }`}
              onClick={() => handleItemClick("Chat")}
            >
              <Tooltip title="Chat" placement="right">
                <MessageSquare className="w-5 h-5" />
              </Tooltip>
              <span className={`ml-2 ${collapsed ? "hidden" : "block"}`}>
                Chat
              </span>
            </li>
            <li
              className={`flex items-center p-2 cursor-pointer hover:bg-white/20 rounded-md transition duration-300 ${
                activeItem === "Settings" ? "bg-white/20" : ""
              }`}
              onClick={() => handleItemClick("Settings")}
            >
              <Tooltip title="Settings" placement="right">
                <Settings className="w-5 h-5" />
              </Tooltip>
              <span className={`ml-2 ${collapsed ? "hidden" : "block"}`}>
                Settings
              </span>
            </li>
            <li
              className={`flex items-center p-2 cursor-pointyer hover:bg-white/20 rounded-md transition duration-300 ${
                activeItem === "Logout" ? "bg-white/20" : ""
              }`}
            >
              <Tooltip title="Logout" placement="right">
                <LogOut className="w-5 h-5" />
              </Tooltip>
              <span className={`ml-2 ${collapsed ? "hidden" : "block"} `}>
                Logout
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Tooltip title="Theme" placement="right">
          <button
            onClick={toggleTheme}
            className="flex items-center p-2 w-full text-left hover:bg-white/20 rounded-md transition duration-300"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
            <span className={`ml-2 ${collapsed ? "hidden" : "block"}`}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </Tooltip>
      </div>
    </aside>
  );
};

export default Sidebar;
