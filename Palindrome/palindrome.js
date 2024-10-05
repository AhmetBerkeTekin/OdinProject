const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  
    const cleanedString = string
      .toLowerCase()
      .split('')
      .filter((char) => alphanumerical.includes(char))
      .join('');

    const reverse = cleanedString.split('').reverse().join('');
  
    return reverse === reversedString;
  };
  
  console.log(palindromes("ATAn"))