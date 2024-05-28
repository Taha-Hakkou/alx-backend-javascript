import {uploadPhoto, createUser} from './utils.js';

export default function handleProfileSignup() {
  let log = '';
  uploadPhoto()
    .then((response) => {
      log += response.body;
    })
  createUser()
    .then((response) => {
      log += ' ' + response.firstName;
      log += ' ' + response.lastName;
      console.log(log);
    })

  //console.log(log);
}
