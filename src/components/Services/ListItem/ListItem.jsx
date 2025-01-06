import { LanguageContext } from 'components/HookLang/LanguageContext';
import {
  LiItem,
  Number,
  Text,
  HiddenText,
  CardIcon,
  NumberIconWrap,
} from './ListItem.styled';
import { useContext } from 'react';

export const ListItem = ({
  item: {
    id,
    text,
    textUa,
    hiddenText,
    hiddenTextUa,
    photoMob,
    photoMob2x,
    photoTablet,
    photoTablet2x,
    photoMax,
    photoMax2x,
    icon,
  },
  handleHover,
  handleHoverOut,
}) => {
  const isRetina = window.devicePixelRatio > 1.1;
  const mobilePhoto = isRetina ? photoMob2x : photoMob;
  const tabletPhoto = isRetina ? photoTablet2x : photoTablet;
  const desktopPhoto = isRetina ? photoMax2x : photoMax;
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <LiItem
      className="liwka"
      tabIndex={0}
      $mobilephoto={mobilePhoto}
      $tabletphoto={tabletPhoto}
      $desktopphoto={desktopPhoto}
      onMouseEnter={() => handleHover(id)}
      onMouseLeave={handleHoverOut}
    >
      <NumberIconWrap>
        <Number>{id}</Number>
        <CardIcon src={icon} />
      </NumberIconWrap>

      <Text className="cardTitle" $lang={currentLanguage}>
        {currentLanguage === 'en' ? text : textUa}
      </Text>
      <HiddenText>
        {currentLanguage === 'en' ? hiddenText : hiddenTextUa}
      </HiddenText>
    </LiItem>
  );
};
