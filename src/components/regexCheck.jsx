
const regexCheck = (regex, data) => {
    if (regex.test(data)) {
      return true;
    } else {
      return false;
    }
  }
  export default regexCheck