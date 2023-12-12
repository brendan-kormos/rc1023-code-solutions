function waitFor(seconds: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (seconds <= 0) {
      reject(new Error('Seconds must be greater than 0'));
      return;
    }

    setTimeout(() => {
      resolve(`Waited for ${seconds} seconds`);
    }, seconds * 1000);
  });
}

// Using .then and .catch
function runThenCatch(): void {
  waitFor(3)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
}

runThenCatch();

async function runAsyncAwait(): Promise<any> {
  try {
    const message = await waitFor(0.5);
    console.log(message);
    return await message;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

const promise = runAsyncAwait();
console.log(promise);
promise.then((value) => {
  console.log('2value', value);
});
