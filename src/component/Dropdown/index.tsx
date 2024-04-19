import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu } from "@radix-ui/themes";
import { useLocation } from "wouter";

export default function Dropdown() {
  const [location, navigate] = useLocation();
  console.log(location);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" size="1">
          Catagories
          <ChevronDownIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item
          onClick={() => navigate("/category/jewelery")}
          shortcut="💍"
        >
          Jewelery
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item
          onClick={() => navigate("/category/electronics")}
          shortcut="💾"
        >
          Electronics
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item
          onClick={() => navigate("/category/men's clothing")}
          shortcut="👱‍♂️"
        >
          Men's Clothing
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item
          onClick={() => navigate("/category/women's clothing")}
          shortcut="👩"
        >
          Women's Clothing
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
