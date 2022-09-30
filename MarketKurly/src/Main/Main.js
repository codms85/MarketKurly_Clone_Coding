import logo from './logo.svg';
import './Main.css';
import Banner from '../Banner.js'
import Footer from '../Footer.js'
import Product from './Product';

import { Link } from 'react-router-dom'
import React, { useState, useRef, useEffect } from 'react';

function Main() {
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


  return (
    <div class="benner">
        <Banner> </Banner>
      <div class="main_contents">
        <div class="MAIN_BENNERS">
          <div class="benner_out">
            <div class="benner_in">
              <div class="slides" ref={banner_slideRef}>
                <div class="swiper-slide" data-swiper-slide-index="0">
                  <img class="main-banner-image" src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/3960691f-c0de-45f1-a73c-b33255cb9678.jpg" alt="main-banner-606" />
                </div>
                <div class="swiper-slide" data-swiper-slide-index="1">
                  <img class="main-banner-image" src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/815618f4-cb4b-4c64-a44e-9cd8cef05647.jpg" alt="main-banner-627" />
                </div>
                <div class="swiper-slide" data-swiper-slide-index="2">
                  <img class="main-banner-image" src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/440b8f36-e2f1-416d-89b3-5ee93de75de7.jpg" alt="main-banner-630" />
                </div>
                <div class="swiper-slide" data-swiper-slide-index="3">
                  <img class="main-banner-image" src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/8d170579-3b20-46e0-8fab-f5cb3c1d86fe.jpg" alt="main-banner-608" />
                </div>
                <div class="swiper-slide" data-swiper-slide-index="4">
                  <img class="main-banner-image" src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/28125769-9291-4b7f-83cd-e42b762b0765.jpg" alt="main-banner-617" />
                </div>
                <div class="swiper-slide" data-swiper-slide-index="5">
                  <img class="main-banner-image" src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/ce7164b0-c0e3-41f7-a890-abb010dd6737.jpg" alt="main-banner-619" />
                </div>
                <div class="swiper-slide" data-swiper-slide-index="6">
                  <img class="main-banner-image" src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/e142fc4f-0229-49ac-97be-63e3bbe209f2.jpg" alt="main-banner-618" />
                </div>
                <div class="swiper-slide" data-swiper-slide-index="7">
                  <img class="main-banner-image" src="https://img-cf.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/39c28de9-2a7f-43bc-9e41-648befae3c95" alt="main-banner-358" />
                </div>
              </div>
            </div>
            <button class="benner_btn_left" direction="left" onClick={banner_PrevSlide}></button>
            <button class="benner_btn_right" direction="right" onClick={banner_NextSlide}></button>
          </div>
        </div>

        <div class="TODAY_RECOMMEND_PRODUCT">
          <div class="recommend">
            <div class="recommend_title">
              <div class="recommend_title_size" >
                <span>이 상품 어때요?</span>
              </div>
            </div>
            <Product></Product>
          </div>
        </div>

        

        <div class="LINE_BENNERS">
          <div class="line_benners_size">
            <img class="line_benners_img" src="https://product-image.kurly.com/banner/random-band/pc/img/e7b19a08-def2-4e5a-bcb5-dd48a20864fd.jpg" alt="" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Main