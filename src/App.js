import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/index";
import ProfilePage from "./pages/profilePage/index";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/system";
import { themeSettings } from "./theme";
import LoginPage from "./pages/loginPage/index";


function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
       <ThemeProvider theme={theme}>
         <CssBaseline/>
         <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/profile/:userId" element={<ProfilePage/>}/>
         </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
