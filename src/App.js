import "./App.css";
import { useState } from "react";
import { DefaultContext } from "./Context";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Content } from "./components/content";

export default function App() {
  const [fan, setFan] = useState("");
  const [theme, setTheme] = useState("dark");
  const handleCreateFan = ({ name }) => {
    setFan(name);
  };
  const handleSetTheme = (name) => {
    setTheme(name);
  };
  return (
    <DefaultContext.Provider value={{ handleCreateFan, fan, theme, handleSetTheme }}>
      <Header />
      <Content />
      <Footer />
    </DefaultContext.Provider>
  );
}
