import { useState } from "react";

import {
  BackpackIcon,
  GitHubLogoIcon,
  HomeIcon,
  MoonIcon,
  PersonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Flex, IconButton, Link, Separator, Tooltip } from "@radix-ui/themes";

import Cards from "../../component/Cards";
import Dropdown from "../../component/Dropdown";
import "./index.scss";

export function Dashboard() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

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
              <Link>
                <HomeIcon />
              </Link>
            </Tooltip>
            <Separator orientation="vertical" mt="-1" />
            <Tooltip content="Login">
              <Link mt="-1">
                <PersonIcon />
              </Link>
            </Tooltip>
            <Separator orientation="vertical" mt="-1" />
            <Tooltip content="Cart">
              <Link mt="-1">
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
      <Cards />
    </>
  );
}
