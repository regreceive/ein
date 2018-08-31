export function changeLanguage(ethereum, lang, locale) {
  return {
    type: 'GLOBAL.CHANGE_LANGUAGE',
    payload: { ethereum, lang, locale },
  };
}
