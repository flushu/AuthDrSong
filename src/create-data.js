import uuid from 'uuid';
import { changePracticeFusionTime } from './utils/utils';
const date = document.getElementsByClassName("readable-date-container")[0].innerText;
let data = {
  date,
  appointments: []
};
const contents = document.getElementsByClassName("row-content");
for(let i = 0; i < contents.length; i++){
  // list of columns
  // console.log(contents[i].children);
  if(contents[i].children[1].children.length > 1)
    continue;
  let type = contents[i].children[5].innerText.toLowerCase();
  if(type.includes("adsc") || type.includes("reagan") || type.includes("losal"))
    continue;
  if(type.includes("p/o")){
    type = type.includes("hmo") ? "P/O HMO" : "P/O";
  }
  else if(type.includes("f/u")){
    type = type.includes("hmo") ? "F/U HMO" : "F/U";
  }
  else if(type.includes("np")){
    type = type.includes("hmo") ? "NP HMO" : "NP";
  }
  else if(type.includes("sx")){
    type = type.includes("hmo") ? "In-SX HMO" : "In-SX";
  }
  const pt_column = contents[i].children[2];
  const name = pt_column.getElementsByClassName("lead")[0].innerText;
  const dob = pt_column.getElementsByClassName("birthday")[0].innerText;
  const phone = pt_column.getElementsByClassName("phone")[0].innerText.substr(3);
  const time = contents[i].children[3].innerText;
  const provider = contents[i].children[4].innerText;
  const note = contents[i].children[6].innerText;
  data.appointments.push({
    date,
    id: uuid(),
    name,
    dob,
    phone,
    time: changePracticeFusionTime(time),
    provider,
    type,
    note,
    finished: false
  });
  // console.log(time);
}
console.log(data.appointments);

document.getElementById("agenda").hidden = true;

export default () => {
  return data;
};