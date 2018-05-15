import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyADLC9eqBrdcS26aCgHdhmQHK1CkwyaKyI",
  authDomain: "authdrsongvision.firebaseapp.com",
  databaseURL: "https://authdrsongvision.firebaseio.com",
  projectId: "authdrsongvision",
  storageBucket: "authdrsongvision.appspot.com",
  messagingSenderId: "945923009002"
};

firebase.initializeApp(config);

// const changeTime = firebase.database().ref('appointments/20180412').on('value', (snapshot)=>{
//   snapshot.val().map(({name, time})=>{
//     console.log(`${name} has an appointment at ${time}`);
//   });
// });

const database = firebase.database();

export { firebase, database as default };

// setTimeout(()=>{
//   firebase.database().ref('appointments/20180412/0').update({
//     time: '3:00 pm'
//   });
// }, 3000);

// setTimeout(()=>{
//   firebase.database().ref('appointments/20180412/0').update({
//     time: '5:00 pm'
//   });
// }, 6000);

// setTimeout(()=>{
//   firebase.database().ref('appointments/20180412').off('value', changeTime);
// }, 9000);

// setTimeout(()=>{
//   firebase.database().ref('appointments/20180412/0').update({
//     time: '7:00pm'
//   });
// }, 12000);

// firebase.database().ref().set({
//   name: 'Ben Morrison'
// }).then(()=>{
//   console.log('Data is saved!');
// }).catch((e)=>{
//   console.log("This is failed. ", e);
// });

// firebase.database().ref("appointments").set({
//   '20180412': [{
//     name: "Ben Morrison",
//     time: '13:30'
//   },{
//     name: "Mike Song",
//     time: '15:45'
//   }]
// }).then(()=>{
//   console.log('appointment added');
// }).catch((e)=>{
//   console.log("error: ", e);
// });

// firebase.database().ref('name').set(null)
//   .then(()=>{
//     console.log('successfully removed!');
//   })
//   .catch((e)=>{
//     console.log('error: ',e);
//   });