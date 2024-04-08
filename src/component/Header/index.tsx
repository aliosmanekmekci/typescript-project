import {
  BackpackIcon,
  GitHubLogoIcon,
  HomeIcon,
  MoonIcon,
  PersonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Flex, IconButton, Link, Separator, Tooltip } from "@radix-ui/themes";
import { useState } from "react";
import { useLocation } from "wouter";
import Dropdown from "../Dropdown";

export default function Header() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [location, navigate] = useLocation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
    }
  };
  return (
    <>
      <div className="header">
        <div className="header__left">
          <Flex gap="5">
            <Link href="https://github.com/aliosmanekmekci/">
              <GitHubLogoIcon />
            </Link>
            <Link>
              <Dropdown />
            </Link>
          </Flex>
        </div>
        <div className="header__search"></div>
        <div className="header__actions">
          <Flex className="right-icon-content" gap="3" align="center">
            <Tooltip content="Home Page">
              <Link onClick={() => navigate("/")}>
                <HomeIcon />
              </Link>
            </Tooltip>
            <Separator orientation="vertical" mt="-1" />
            <Tooltip content="Login">
              <Link onClick={() => navigate("/login")}>
                <PersonIcon />
              </Link>
            </Tooltip>
            <Separator orientation="vertical" mt="-1" />
            <Tooltip content="Cart">
              <Link mt="-1" onClick={() => navigate("/cart")}>
                <BackpackIcon />
              </Link>
            </Tooltip>
            <Separator orientation="vertical" mt="-1" />
            <Tooltip content="Cart">
              <IconButton
                variant="ghost"
                onClick={toggleDarkMode}
                className="iconButton"
                mt="-1"
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </IconButton>
            </Tooltip>
          </Flex>
        </div>
      </div>
    </>
  );
}
