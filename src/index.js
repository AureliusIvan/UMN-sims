import {createRoot} from 'react-dom/client';
import App from './App';
import {StrictMode} from "react";
import {ColorModeScript} from "@chakra-ui/react";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
      <ColorModeScript/>
      <App/>
    </StrictMode>
);