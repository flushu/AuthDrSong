export const sortByName = () => ({
  type: 'SORT_BY_NAME'
});

export const sortByTime = () => ({
  type: 'SORT_BY_TIME'
});

export const setText = ({text}) => ({
  type: 'SET_TEXT',
  text
});

export const setFinished = ({hideFinish}) => ({
  type: 'HIDE_FINISH',
  hideFinish
});

export const setDate = ({date}) => ({
  type: 'SET_DATE',
  date
});