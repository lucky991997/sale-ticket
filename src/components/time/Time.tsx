import { DatePicker, Radio, Space } from "antd";
import moment from "moment";
import { CSSProperties, useEffect, useLayoutEffect, useState } from "react";
import { formatDate } from "../table/tableTicket/ListTicket";

import "./time.scss";
type DateProp = {
  variant?: "modal" | "layout";
  timeDate?: any;
  styles?: CSSProperties;
  show?: any;
  picker?: "date" | "week";
};

// const WeekPicker = ({ show }: DateProp) => {
//   const day = new Date();
//   const [open, setOpen] = useState(true);
//   const onChange = (date: any, dateString: string) => {
//     console.log(dateString);
//   };
//   const onOpenChange = (open: boolean) => {
//     setTimeout(() => {
//       setOpen(open);
//     }, 1000);
//   };
//   useEffect(() => {
//     setTimeout(() => {
//       if (open === false) {
//         show(open);
//       }
//     }, 300);
//   }, [open, show]);

//   return (
//     <div className="calendar">
//       <DatePicker
//         open={open}
//         onOpenChange={(open) => onOpenChange(open)}
//         placeholder={formatDate(day, "dd/mm/yy")}
//         onChange={onChange}
//         picker="week"
//       ></DatePicker>
//     </div>
//   );
// };
const DayPicker = ({ show, picker }: DateProp) => {
  const day = new Date();
  const [open, setOpen] = useState(true);

  const onChange = (date: any, dateString: string) => {
    console.log(dateString);
  };
  const onOpenChange = (open: boolean) => {
    setTimeout(() => {
      setOpen(open);
    }, 2000);
  };
  useEffect(() => {
    setTimeout(() => {
      if (open === false) {
        show(open);
      }
    }, 300);
  }, [open, show]);
  return (
    <div className="calendar">
      <DatePicker
        onOpenChange={(open) => onOpenChange(open)}
        open={open}
        placeholder={formatDate(day, "dd/mm/yy")}
        onChange={(date, dateString) => onChange(date, dateString)}
        picker={picker}
      ></DatePicker>
    </div>
  );
};

const Time = ({ variant, timeDate }: DateProp) => {
  const data = [
    {
      title: "Theo ngày",
      value: 1,
    },
    {
      title: "Theo tuần ",
      value: 2,
    },
  ];
  const [value, setValue] = useState(1);

  const [datePicker, setDatePicker] = useState(false);
  useEffect(() => {
    setDatePicker(true);
  }, [value]);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className={`${variant}`}>
      <div className="time">
        {data &&
          data.map((item, index) => (
            <div key={index}>
              <Radio.Group onChange={(e) => onChange(e)} value={value}>
                <Space direction="horizontal">
                  <Radio value={item.value}>{item.title}</Radio>
                </Space>
              </Radio.Group>
            </div>
          ))}
      </div>
      {datePicker === true && (
        <DayPicker picker={value === 1 ? "date" : "week"} show={timeDate} />
      )}
    </div>
  );
};

export { DayPicker };

export default Time;
