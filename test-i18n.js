const { chromium } = require('playwright');

async function testI18n() {
  console.log('🌐 다국어 기능 테스트 시작...');

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // 페이지 로드
    console.log('📄 페이지 로딩 중...');
    await page.goto('http://localhost:3000');

    // 페이지 로드 대기
    await page.waitForLoadState('networkidle');

    console.log('✅ 한국어 페이지 확인');

    // Hero 섹션의 타이틀 확인 (한국어)
    const heroTitleKo = await page.locator('h1').first().textContent();
    console.log('🇰🇷 Hero 타이틀 (한국어):', heroTitleKo);

    // 언어 전환 버튼 찾기 (글로브 아이콘으로 찾기)
    const languageButton = page.locator('button[aria-label*="언어"], button[aria-label*="Language"]').first();
    await languageButton.click();

    // 영어 옵션 클릭
    const englishOption = page.locator('text=🇺🇸 English').first();
    await englishOption.click();

    // 페이지 로드 대기
    await page.waitForTimeout(1000);

    console.log('✅ 영어 페이지 확인');

    // Hero 섹션의 타이틀 확인 (영어)
    const heroTitleEn = await page.locator('h1').first().textContent();
    console.log('🇺🇸 Hero 타이틀 (영어):', heroTitleEn);

    // Quick Start 섹션 확인
    const quickStartTitle = await page.locator('h2:has-text("Quick Start")').first().textContent();
    console.log('📋 Quick Start 타이틀:', quickStartTitle);

    // 다시 한국어로 전환
    const languageButton2 = page.locator('button[aria-label*="언어"], button[aria-label*="Language"]').first();
    await languageButton2.click();
    const koreanOption = page.locator('text=🇰🇷 한국어').first();
    await koreanOption.click();

    await page.waitForTimeout(1000);

    const heroTitleKoAgain = await page.locator('h1').first().textContent();
    console.log('🇰🇷 다시 한국어로 전환된 Hero 타이틀:', heroTitleKoAgain);

    // interpolation 텍스트가 노출되지 않는지 확인
    const pageContent = await page.locator('body').textContent();

    if (pageContent.includes('{highlight}') || pageContent.includes('{bold}')) {
      console.log('❌ 오류: interpolation 텍스트가 아직 노출되고 있습니다!');
      console.log('발견된 interpolation 텍스트:', pageContent.match(/\{[^}]+\}/g));
    } else {
      console.log('✅ 성공: interpolation 텍스트가 모두 제거되었습니다!');
    }

    console.log('🎉 다국어 테스트 완료!');

  } catch (error) {
    console.error('❌ 테스트 실패:', error.message);
  } finally {
    await browser.close();
  }
}

testI18n();
