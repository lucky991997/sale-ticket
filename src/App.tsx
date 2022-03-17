import { BrowserRouter } from "react-router-dom";
import moment from "moment";
import Index from "./pages/Index";

function App() {
  moment.updateLocale("en", {
    week: {
      dow: 1,
    },
    weekdaysMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
    monthsShort: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],
    weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  });

  return (
    <>
      <div style={{ backgroundColor: "#f9f6f4", width: "1920px" }}>
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
