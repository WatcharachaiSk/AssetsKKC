import { colors } from "./colors";

export const chackStatusItemColor = (status: any) => {
  let statusItemColor = "";
  if (status == false || status == 0) {
    statusItemColor = colors.statusColor0;
  } else if (status == true || status == 1) {
    statusItemColor = colors.statusColor1;
  } else if (status == 2) {
    statusItemColor = colors.statusColor2;
  } else if (status == 3) {
    statusItemColor = colors.statusColor3;
  }else if (status == 4) {
    statusItemColor = colors.statusColor4;
  } else {
    statusItemColor = "#000000";
  }
  return statusItemColor;
};
export const chackStatusItem = (status: any) => {
  let statusItemString = "";
  if (status == 0 || status == false) {
    statusItemString = "ชำรุด";
  } else if (status == 1 || status == true) {
    statusItemString = "ปกติ";
  } else if (status == 2) {
    statusItemString = "รอจำหน่าย";
  } else if (status == 3) {
    statusItemString = "จำหน่ายแล้ว";
  }else if (status == 4) {
    statusItemString = "รอหมายเลขครุภัณฑ์";
  }
  return statusItemString;
};
export const chackCodeStatus = (code: any) => {
  let codeStatus = "";
  // console.log("code = " + code.length);
  if (code == "-" || code == "ไม่มี") {
    codeStatus = "รอหมายเลขครุภัณฑ์";
  } else if (code.length <= 9) {
    codeStatus = "รอหมายเลขครุภัณฑ์";
  } else {
    codeStatus = code;
  }
  return codeStatus;
};
export const chackCodeStatusColor = (code: any) => {
  let codeStatusColor = "";
  // console.log("code = " + code.length);
  if (code == "-" || code == "ไม่มี") {
    codeStatusColor = colors.statusColor4;
  } else if (code.length <= 9) {
    codeStatusColor = colors.statusColor4;
  } else {
    codeStatusColor = colors.black;
  }
  return codeStatusColor;
};



