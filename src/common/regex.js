export const regExp = {
  firstname: /^[A-Z]{1}[a-z]{2,15}$/,
  lastname: /^[A-Z]{1}[a-z]{2,15}$/,
  displayname: /^[a-zA-Z][a-zA-Z0-9_-]{3,15}$/,
  password: {
    min5: /.{5,}/,
    oneNumber: /(?=.*?[0-9])/,
    engUpperCase: /(?=.*?[A-Z])/,
    engLowerCase: /(?=.*?[a-z])/,
    oneSpecCh: /(?=.*?[#?!@$ %^&*-])/,
    onlyRussian: /[а-яА-Я]+/
  },
};
