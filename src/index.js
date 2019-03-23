module.exports = function check(str, bracketsConfig) {
  let length = str.length;
  let arr = str.split('');
  while (length > 0) {
      for (let i = 0; i < length; i++) {
          for (let j = 0; j < bracketsConfig.length; j++) {
              if ((arr[i] == bracketsConfig[j][0]) && (arr[i + 1] == bracketsConfig[j][1])) {
                  arr.splice(i, 2);
              };
          };
      };
      length -= 2;
      if (arr.length == 0)
          return true;
  };
  return false;
};