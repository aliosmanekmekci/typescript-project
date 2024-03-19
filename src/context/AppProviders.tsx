import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Router from "./Router";

export default function AppProviders() {
  return (
    <Theme>
      <Router />
    </Theme>
  );
}
