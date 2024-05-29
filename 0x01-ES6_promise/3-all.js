import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let log = '';
  uploadPhoto()
    .then((photo) => {
      log += photo.body;
    });
  createUser()
    .then((user) => {
      log += ` ${user.firstName} ${user.lastName}`;
      console.log(log);
    });
}
