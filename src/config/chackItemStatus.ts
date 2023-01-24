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
    }
    return statusItemString;
  };
  
  
  