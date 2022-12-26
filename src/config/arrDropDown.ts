const removeDuplicates = async (label: any, value: any) => {
    let dataJoin = [],
        nameTH = label,
        numberID = value;
    nameTH = Array.from(new Set(nameTH));
    numberID = Array.from(new Set(numberID));
    // ! เก็บข้อมูลที่ถูก ลบตัวซ้ำแล้ว
    for (let i = 0; i < nameTH.length; i++) {
        const tableJoin = {
            label: nameTH[i],
            value: numberID[i],
        };
        dataJoin[i] = tableJoin;
    }
    //console.log(dataJoin);

    return dataJoin;
};

export const ArrDropDownFaculty = async (resData: any) => {
    let nameTH = [],
        numberFaculty_Id = [];
    // ! เก็บข้อมูล Faculty ทั้งหมด
    for (let i = 0; i < resData.length; i++) {
        nameTH[i] = resData[i].faculty.nameTH;
        numberFaculty_Id[i] = resData[i].faculty_id;
    }
    // ! ส่งข้อมูลไปลบข้อมูลซ้ำ //ได้ข้อมูลที่เป็น label , value กลับมา
    const dataJoin = await removeDuplicates(nameTH, numberFaculty_Id);
    dataJoin.splice(0, 0, {
        label: "ทั้งหมด",
        value: "-1",
    });
    return dataJoin;
};

export const ArrDropDownDepartment = async (resData: any) => {
    let nameTH = [],
        number_Id = [];
    // ! เก็บข้อมูล Department ทั้งหมด
    for (let i = 0; i < resData.length; i++) {
        nameTH[i] = resData[i].department.nameTH;
        number_Id[i] = resData[i].department_id;
    }
    //   console.log(nameTH);
    // ! ส่งข้อมูลไปลบข้อมูลซ้ำ //ได้ข้อมูลที่เป็น label , value กลับมา
    const dataJoin = await removeDuplicates(nameTH, number_Id);
    return dataJoin;
};

export const ArrDropDownBuilding = async (resData: any) => {
    let nameTH = [],
        number_Id = [];
    // ! เก็บข้อมูล Department ทั้งหมด
    for (let i = 0; i < resData.length; i++) {
        nameTH[i] = resData[i].building.nameTH;
        number_Id[i] = resData[i].building_id;
    }

    //   console.log(nameTH);
    //   console.log(number_Id);
    // ! ส่งข้อมูลไปลบข้อมูลซ้ำ //ได้ข้อมูลที่เป็น label , value กลับมา
    const dataJoin = await removeDuplicates(nameTH, number_Id);
    return dataJoin;
};

export const ArrDropDownFloor = async (resData: any) => {
    let nameTH = [];
    // ! เก็บข้อมูล Department ทั้งหมด
    for (let i = 0; i < resData.length; i++) {
        nameTH[i] = resData[i].floor;
    }
    // console.log(nameTH);
    //   console.log(number_Id);
    nameTH = Array.from(new Set(nameTH));
    const dataJoin = [];
    for (let i = 0; i < nameTH.length; i++) {
        const tableJoin = {
            label: nameTH[i],
            value: nameTH[i],
        };
        dataJoin[i] = tableJoin;
    }
    // console.log(dataJoin);

    return dataJoin;
};

export const ArrDropDownLocations = async (resData: any) => {
    //console.log(resData);
    
    let nameTH = [],
        number_Id = [];
    // ! เก็บข้อมูล  ทั้งหมด
    for (let i = 0; i < resData.length; i++) {
        nameTH[i] =
            resData[i].nameTH +
            " อาคาร" +
            resData[i].building.nameTH +
            " ชั้น" +
            resData[i].floor;
        number_Id[i] = resData[i].l_id;
    }
    // ! ส่งข้อมูลไปลบข้อมูลซ้ำ //ได้ข้อมูลที่เป็น label , value กลับมา
    const dataJoin = await removeDuplicates(nameTH, number_Id);
    return dataJoin;
};
