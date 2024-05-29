import ReactDOM from 'react-dom/client';
import App from "./app/App";
import {BrowserRouter as Router} from "react-router-dom";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
import '@gravity-ui/uikit/styles/fonts.scss';
import '@gravity-ui/uikit/styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Router>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Router>
);
