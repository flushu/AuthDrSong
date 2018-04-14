
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