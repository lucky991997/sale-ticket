import React from "react";
import "./leftfooter.scss";

import { DatePicker } from "antd";
import moment from "moment";

const LeftFooter = () => {
  return (
    <div className="leftfooter">
      <p>Copyright</p>
      <span>C</span>
      <p>2020 Alta Software </p>
    </div>
  );
};

export default LeftFooter;
// console.log(DatePicker);
// const Test = () => {
//   const onChange = (value: any, current: any) => {

//   };
//   const disabledDate = (current: any) => {
//     let customDate = moment().format("YYYY-MM-DD");
//     return current && current < moment(customDate, "YYYY-MM-DD");
//   }

//     return (
//     <div className="calendar">
//       <DatePicker
     
//         onChange={onChange}
//         picker="week"
//       >
//       </DatePicker> 
//       <DatePicker

//         onChange={onChange}
//         picker="date"
//       >
//       </DatePicker> 
//     </div>
//   );
// };

// export { Test };
