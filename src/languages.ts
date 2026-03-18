import messages_bg from './translations/bg.json';
import messages_cs from './translations/cs.json';
import messages_de from './translations/de.json';
import messages_fr from './translations/fr.json';
import messages_it from './translations/it.json';
import messages_pl from './translations/pl.json';
import messages_ru from './translations/ru.json';

export const LANGUAGE_DATA: {[key: string]: {displayName: string, messages?: {[id: string]: string}}} = {
  en: {displayName: 'English'},
  bg: {displayName: 'Български', messages: messages_bg},
  cs: {displayName: 'Čeština', messages: messages_cs},
  de: {displayName: 'Deutsch', messages: messages_de},
  fr: {displayName: 'Français', messages: messages_fr},
  it: {displayName: 'Italiano', messages: messages_it},
  pl: {displayName: 'Polski', messages: messages_pl},
  ru: {displayName: 'Русский', messages: messages_ru},
};

export const LANGUAGE_NAMES = Object.fromEntries(
  Object.entries(LANGUAGE_DATA).map(([code, data]) => [code, data.displayName])
);
