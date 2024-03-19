import { Flex, IconButton, Text } from "@radix-ui/themes";
import { useState } from "react";
import Icon from "../../assets/Icon";

export function Dashboard() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
    }
  };
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <IconButton variant="ghost" onClick={toggleDarkMode}>
        <Icon />
      </IconButton>
    </Flex>
  );
}
