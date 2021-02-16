import { CssBaseline } from "@material-ui/core";
import Navbar from "./navbar";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <h1>Hey there!</h1>
      <h2>This is a responsive navbar using material-ui</h2>
    </div>
  );
}
