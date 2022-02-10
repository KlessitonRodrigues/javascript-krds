import { NativeBaseProvider } from "native-base";

import Hello from "./components/hello";
import { theme } from "./theme";

export default function Body() {
  return (
    <NativeBaseProvider>
      <Hello />
    </NativeBaseProvider>
  );
}
