function waitTwoSeconds(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Done Waiting!');
    }, 500);
  });
}

async function awaitTwoSeconds(): Promise<any> {
  try {
    const response = await waitTwoSeconds();
    console.log('inside', response);
  } catch (error) {
    console.log('fail', error);
  }
}

awaitTwoSeconds();
console.log('synch?');
