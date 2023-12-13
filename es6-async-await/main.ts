function waitTwoSeconds(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Done Waiting!');
    }, 2000);
  });
}

async function awaitTwoSeconds(): Promise<any> {
  try {
    const response = await waitTwoSeconds();
    console.log('succeed', response);
  } catch (error) {
    console.log('fail', error);
  }
}

awaitTwoSeconds();
