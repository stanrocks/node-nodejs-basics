const argsArr = process.argv.slice(2);

const getUsername = () => {
  const usernameIndex = argsArr.findIndex((item) =>
    item.startsWith('--username=')
  );

  if (usernameIndex !== -1) {
    return argsArr[usernameIndex].substring('--username='.length);
  }

  return 'Guest';
};

console.log(`Welcome to the File Manager, ${getUsername()}!`);
