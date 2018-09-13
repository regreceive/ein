export function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  // eslint-disable-next-line no-useless-escape
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export function getActiveLanguage(langs) {
  for (let i = 0; i < langs.length; i++) {
    if (langs[i].active) {
      return langs[i].code;
    }
  }
  return 'en';
}

export function isEmail(email) {
  return /^[\w\d_.-]+@[\w\d-]+(\.[\w\d-]+)*\.[\w\d]{2,6}$/.test(email);
}
