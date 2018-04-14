const filterCharts = (charts, { sortBy, date, text, startTime, endTime, hideFinish }) => {
  return charts.filter((chart)=>{
    const textMatch = chart.name.toLowerCase().includes(text);
    let hour = 0;
    if(chart.time.includes("PM")){
      const noon = 12;
      const currentHour = Number(chart.time.substr(0,1));
      hour = 12 + currentHour;
    }
    else{
      hour = chart.time.charAt(1) === ':' 
        ? Number(chart.time.substr(0,1)) : Number(chart.time.substr(0,2));
    }
    const afterStartTime = hour >= startTime;
    const beforeEndTime = hour <= endTime;
    const hideFinished = hideFinish ? !chart.finished : true;
    return textMatch && afterStartTime && beforeEndTime && hideFinished;
  }).sort((a,b)=>{
    if(sortBy === 'name'){
      return a.name > b.name ? 1 : -1;
    }
    if(sortBy === 'time'){
      return a.time > b.time ? 1 : -1;
    }
  });
};

export default filterCharts;