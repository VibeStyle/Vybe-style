import webMobile from './img/bgWebMobile.jpg';
import webMobile2x from './img/bgWebMobile2x.jpg';
import webTablet from './img/bgWebTablet.jpg';
import webTablet2x from './img/bgWebTablet2x.jpg';
import webMax from './img/bgWebMax.jpg';
import webMax2x from './img/bgWebMax2x.jpg';
import crmMobile from './img/bgCrmMobile.jpg';
import crmMobile2x from './img/bgCrmMobile2x.jpg';
import crmTablet from './img/bgCrmTablet.jpg';
import crmTablet2x from './img/bgCrmTablet2x.jpg';
import crmMax from './img/bgCrmMax.jpg';
import crmMax2x from './img/bgCrmMax2x.jpg';
import appMobile from './img/bgAppMobile.jpg';
import appMobile2x from './img/bgAppMobile2x.jpg';
import appTablet from './img/bgAppTablet.jpg';
import appTablet2x from './img/bgAppTablet2x.jpg';
import appMax from './img/bgAppMax.jpg';
import appMax2x from './img/bgAppMax2x.jpg';
import logoMobile from './img/bgLogoMobile.jpg';
import logoMobile2x from './img/bgLogoMobile2x.jpg';
import logoTablet from './img/bgLogoTablet.jpg';
import logoTablet2x from './img/bgLogoTablet2x.jpg';
import logoMax from './img/bgLogoMax.jpg';
import logoMax2x from './img/bgLogoMax2x.jpg';
import designIcon from './img/design_icon.png';
import devIcon from './img/dev_icon.png';

export const data = [
  {
    id: '01',
    text: (
      <>
        <span>WEBSITE</span>
        <span style={{ marginRight: '8px' }}> + LOGO </span>
      </>
    ),
    textUa: (
      <>
        <span>ВЕБСАЙТ</span>
        <span> + ЛОГО </span>
      </>
    ),
    hiddenText:
      "We create user-friendly websites and unique logos that highlight your brand's identity and attract customers.",
    hiddenTextUa:
      'Ми створюємо зручні веб-сайти та унікальні логотипи, які підкреслюють ідентичність вашого бренду та залучають клієнтів.atq1at.',
    photoMob: webMobile,
    photoMob2x: webMobile2x,
    photoTablet: webTablet,
    photoTablet2x: webTablet2x,
    photoMax: webMax,
    photoMax2x: webMax2x,
    icon: designIcon,
  },
  {
    id: '02',
    text: 'MOBILE APP',
    textUa: 'МОБІЛЬНИЙ ДОДАТОК',
    hiddenText:
      'We design mobile app layouts keeping in mind the latest trends and technologies to provide the best user experience.',
    hiddenTextUa:
      'Розробляємо мобільні додатки, враховуючи останні тренди та технології, для забезпечення найкращого користувацького досвіду.',
    photoMob: appMobile,
    photoMob2x: appMobile2x,
    photoTablet: appTablet,
    photoTablet2x: appTablet2x,
    photoMax: appMax,
    photoMax2x: appMax2x,
    icon: designIcon,
  },
  {
    id: '03',
    text: 'CRM',
    textUa: 'CRM',
    hiddenText:
      'We design customer relationship management (CRM) systems that help you manage your customers and sales effectively.',
    hiddenTextUa:
      'Проектуємо системи управління взаємовідносинами з клієнтами (CRM), які допоможуть вам ефективно керувати вашими клієнтами та продажами.',
    photoMob: crmMobile,
    photoMob2x: crmMobile2x,
    photoTablet: crmTablet,
    photoTablet2x: crmTablet2x,
    photoMax: crmMax,
    photoMax2x: crmMax2x,
    icon: designIcon,
  },
  {
    id: '04',
    text: (
      <>
        <span>DEVELOP</span>
        <span style={{ marginRight: '40px' }}>MENT</span>
      </>
    ),
    textUa: 'РОЗРОБКА',

    hiddenText:
      'Website development on WordPress, Webflow, Tilda, Square Space,  We can also write clean code for a website: HTML, CSS, JS.',
    hiddenTextUa:
      'Розробка сайтів на WordPress, Webflow, Tilda, Square Space, також можемо написати чистий код для сайту: HTML, CSS, JS.',
    photoMob: logoMobile,
    photoMob2x: logoMobile2x,
    photoTablet: logoTablet,
    photoTablet2x: logoTablet2x,
    photoMax: logoMax,
    photoMax2x: logoMax2x,
    icon: devIcon,
  },
];
