export const regExp = {
  min3: /.{3,}/,
  min4: /.{4,}/,
  firstname: /^[A-Z]{1}[a-z]{2,15}$/,
  lastname: /^[A-Z]{1}[a-z]{2,15}$/,
  displayname: /^[a-zA-Z][a-zA-Z0-9_-]{3,15}$/,
  password: {
    min5: /.{5,}/,
    oneNumber: /(?=.*?[0-9])/,
    engUpperCase: /(?=.*?[A-Z])/,
    engLowerCase: /(?=.*?[a-z])/,
    oneSpecCh: /(?=.*?[#?!@$ %^&*-])/,
    onlyEnglish: /[а-яА-Я]+/,
  },
  onlyLetters: /((?=.*)[#?!@$ %^&*-]+)|((?=.*)[0-9]+)|\W+/,
};
