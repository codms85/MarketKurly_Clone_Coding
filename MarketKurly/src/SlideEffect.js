import React, { useState, useRef, useEffect } from 'react';

function SlideEffect() {
  const banner_TOTAL_SLIDES = 7;
  const [banner_currentSlide, banner_setCurrentSlide] = useState(0);
  const banner_slideRef = useRef(null);

  const banner_NextSlide = () => {
    if (banner_currentSlide >= banner_TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      banner_setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      banner_setCurrentSlide(banner_currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const banner_PrevSlide = () => {
    if (banner_currentSlide === 0) {
      banner_setCurrentSlide(banner_TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      banner_setCurrentSlide(banner_currentSlide - 1);
    }
  };

  useEffect(() => {
    banner_slideRef.current.style.transition = 'all 0.5s ease-in-out';
    banner_slideRef.current.style.transform = `translateX(-${banner_currentSlide}00%)`;// 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [banner_currentSlide]);

  return 0;
}
export default SlideEffect