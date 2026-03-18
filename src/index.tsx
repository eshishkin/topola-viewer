import 'canvas-toBlob';
import {detect} from 'detect-browser';
import queryString from 'query-string';
import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {IntlProvider} from 'react-intl';
import {HashRouter as Router} from 'react-router';
import 'semantic-ui-css/semantic.min.css';
import {App} from './app';
import './index.css';
import {LANGUAGE_DATA} from './languages';
import {MediaContextProvider, mediaStyles} from './util/media';

function getLanguageFromUrl(): string {
  const hash = window.location.hash;
  const queryIndex = hash.indexOf('?');
  if (queryIndex !== -1) {
    const search = queryString.parse(hash.slice(queryIndex));
    const lang = search['lang'];
    if (typeof lang === 'string' && lang) {
      return lang;
    }
  }
  return navigator.language && navigator.language.split(/[-_]/)[0];
}

function Root() {
  const [language, setLanguage] = useState<string>(getLanguageFromUrl);

  function onLanguageChange(lang: string) {
    setLanguage(lang);
  }

  return (
    <IntlProvider locale={language} messages={LANGUAGE_DATA[language].messages}>
      <MediaContextProvider>
        <style>{mediaStyles}</style>
        <Router>
          <App onLanguageChange={onLanguageChange} currentLanguage={language} />
        </Router>
      </MediaContextProvider>
    </IntlProvider>
  );
}

const browser = detect();

const container = document.getElementById('root');
const root = createRoot(container!);

if (browser && browser.name === 'ie') {
  root.render(
    <p>
      Topola Genealogy Viewer does not support Internet Explorer. Please try a
      different (modern) browser.
    </p>,
  );
} else {
  root.render(<Root />);
}
