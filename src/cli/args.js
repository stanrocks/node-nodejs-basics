const parseArgs = () => {
  const argsArr = process.argv.slice(2);

  for (let i = 0; i < argsArr.length; i += 2) {
    let propName = argsArr[i];
    const value = argsArr[i + 1];

    if (propName.startsWith('--')) {
      propName = propName.substring(2);
    }

    console.log(`${propName} is ${value}`);
  }
};

parseArgs();
