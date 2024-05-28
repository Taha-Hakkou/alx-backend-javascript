export default function handleResponseFromAPI(promise) {
  promise
    .then((resolve) => ({
      status: 200,
      body: success,
    }))
    .catch((error) => Error())
    .finally(() => {
      console.log('Got a response from the API');
    })
}
