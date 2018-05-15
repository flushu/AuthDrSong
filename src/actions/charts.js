import database from "../firebase/firebase";

export const addPt = ({
  id="",
  name="Anonymous",
  dob="",
  phone="",
  time="",
  note="",
  provider="",
  type="",
  finished = false
}={}) => ({
  type: 'ADD_PT',
  chart: {
    id,
    name,
    dob,
    phone,
    time,
    note,
    provider,
    type,
    finished
  }
});

export const addAppointment = (chart) => ({
  type: 'ADD_APPOINTMENT',
  chart
});

export const firebaseAddAppointment = (chart = {}) => {
  return (dispatch) => {
    const {
      name = 'Anonymous',
      dob = '',
      phone = '',
      time = '',
      note = '',
      provider = '',
      type = '',
      date = '20180320',
      prepped = false
    } = chart;
    const appointment = { name, dob, phone, time, note, provider, type, prepped };
    database.ref(`appointments/${date}`).push(appointment).then((ref)=>{
      dispatch(addAppointment({
        id: ref.key,
        ...appointment
      }))
    });
  };
};

export const removePt = ({id}) => {
  return {
  type: 'REMOVE_PT',
  id }
};

export const editPt = ({id, updates}) => ({
  type: 'EDIT_PT',
  id,
  updates
});