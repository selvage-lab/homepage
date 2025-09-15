import React from 'react';
import { useTranslation } from 'react-i18next';

export function SEOHead() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const baseUrl = 'https://selvage-lab.github.io/selvage-landing-page';

  React.useEffect(() => {
    // HTML lang 속성 설정
    document.documentElement.lang = currentLang;

    // 기존 hreflang 링크 제거
    const existingLinks = document.querySelectorAll('link[hreflang]');
    existingLinks.forEach(link => link.remove());

    // 새로운 hreflang 링크 추가
    const languages = ['ko', 'en'];
    languages.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hrefLang = lang;
      link.href = lang === 'ko' ? baseUrl : `${baseUrl}?lng=${lang}`;
      document.head.appendChild(link);
    });

    // x-default 링크 추가
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hrefLang = 'x-default';
    defaultLink.href = baseUrl;
    document.head.appendChild(defaultLink);

    // canonical 링크 업데이트
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = currentLang === 'ko' ? baseUrl : `${baseUrl}?lng=${currentLang}`;

  }, [currentLang]);

  return null;
}
