import { BrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
function App() {
  return (
    <div style={{ backgroundColor: "#f9f6f4", width: "1920px" }}>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </div>
  );
}

export default App;
