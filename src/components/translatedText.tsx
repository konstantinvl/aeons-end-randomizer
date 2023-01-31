import React from 'react';
import { useTranslation } from 'react-i18next';

function TranslatedText(props: { text: string }) {
  const { text } = props;
  const [t] = useTranslation();
  return <>{t(text)}</>;
}

export default TranslatedText;
