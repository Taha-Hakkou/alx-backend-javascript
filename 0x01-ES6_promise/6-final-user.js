import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = await signUpUser(firstName, lastName);
  const photo = await uploadPhoto(fileName);
  return Promise.resolve([
    {
      status: user,
      value: user,
    },
    {
      status: photo,
      value: photo,
    },
  ]);
}
