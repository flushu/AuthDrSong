export const changeTTtoHour = (time) => {
  if(time.includes("PM")){
    if(time.charAt(1)===':'){
      const num = Number(time.substr(0,1)) + 12;
      const hour = num.toString() + time.substr(1,3);
      return hour;
    }
    else{
      const num = Number(time.substr(0,2)) + 12;
      const hour = num.toString() + time.substr(2,4);
      return hour;
    }
  }
  else{
    if(time.charAt(1)===':'){
      const hour = "0" + time.substr(1,3);
      return hour;
    }
    else{
      return time.substr(0,4);
    }
  }
};

export const changeHourToTT = (time) => {
  const num = Number(time.substr(0,2));
  if(num >= 12){
    const hour = num - 12;
    const tt = hour.toString() + time.substr(2,4) + " PM";
    return tt;
  }
  else{
    const tt = num.toString() + time.substr(2, 4) + " AM";
    return tt;
  }
};