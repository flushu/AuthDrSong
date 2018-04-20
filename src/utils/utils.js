export const changeTTtoHour = (time) => {
  if(time.includes("PM")){
    const hour = time.substr(0,2);
    switch(hour){
      case "01":
        return "13" + time.substr(2,3);
      case "02":
        return "14" + time.substr(2,3);
      case "03":
        return "15" + time.substr(2,3);
      case "04":
        return "16" + time.substr(2,3);
      case "05":
        return "17" + time.substr(2,3);
      case "06":
        return "18" + time.substr(2,3);
      case "07":
        return "19" + time.substr(2,3);
      case "08":
        return "20" + time.substr(2,3);
      case "09":
        return "21" + time.substr(2,3);
      case "10":
        return "22" + time.substr(2,3);
      case "11":
        return "23" + time.substr(2,3);
      default:
        return "12" + time.substr(2,3);
    }
  }
  else{
    const hour = time.substr(0,2);
    switch(hour){
      case "12":
        return "00" + time.substr(2,4);
      default:
        return time.substr(0,5);
    }
  }
};

export const changePracticeFusionTime = (time) => time.charAt(1) === ':' ? '0' + time : time;


export const changeHourToTT = (time) => {
  const num = Number(time.substr(0,2));
  if(num >= 12){
    const hour = num - 12;
    const tt = hour.toString() + time.substr(2,4) + " PM";
    return changePracticeFusionTime(tt);
  }
  else{
    const tt = num.toString() + time.substr(2, 4) + " AM";
    return changePracticeFusionTime(tt);
  }
};