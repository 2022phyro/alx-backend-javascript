import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((results) => {
      const [res, res2] = results;
      console.log(`${res.body} ${res2.firstName} ${res2.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
