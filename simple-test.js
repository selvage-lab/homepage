const { chromium } = require('playwright');

async function simpleTest() {
  console.log('🔍 간단한 interpolation 테스트 시작...');

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    // 페이지 전체 텍스트 가져오기
    const pageText = await page.locator('body').textContent();

    // interpolation 텍스트 확인
    const interpolations = pageText.match(/\{[^}]+\}/g) || [];

    if (interpolations.length > 0) {
      console.log('❌ 발견된 interpolation 텍스트들:');
      interpolations.forEach(text => console.log(`  - ${text}`));
    } else {
      console.log('✅ interpolation 텍스트가 모두 제거되었습니다!');
    }

    // 몇 가지 주요 텍스트 확인
    console.log('\n📋 주요 텍스트 확인:');
    const heroTitle = await page.locator('h1').first().textContent();
    console.log('Hero 타이틀:', heroTitle);

    // Quick Start 찾기
    const quickStartElements = await page.locator('h2, span').filter({ hasText: /Quick Start|빠른 시작/ }).allTextContents();
    console.log('Quick Start 관련 텍스트:', quickStartElements);

    // 언어 버튼 찾기 시도
    const buttons = await page.locator('button').allTextContents();
    console.log('버튼 텍스트들:', buttons.filter(btn => btn.includes('🇰🇷') || btn.includes('🇺🇸') || btn.includes('언어') || btn.includes('Language')));

  } catch (error) {
    console.error('❌ 테스트 실패:', error.message);
  } finally {
    await browser.close();
  }
}

simpleTest();
