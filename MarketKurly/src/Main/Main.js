import logo from './logo.svg';
import './Main.css';
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

  const product_TOTAL_SLIDES = 1;
  const [product_currentSlide, product_setCurrentSlide] = useState(0);
  const product_slideRef = useRef(null);

  const product_NextSlide = () => {
    if (product_currentSlide >= product_TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      product_setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      product_setCurrentSlide(product_currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const product_PrevSlide = () => {
    if (product_currentSlide === 0) {
      product_setCurrentSlide(product_TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      product_setCurrentSlide(product_currentSlide - 1);
    }
  };

  useEffect(() => {
    product_slideRef.current.style.transition = 'all 0.5s ease-in-out';
    product_slideRef.current.style.transform = `translateX(-${product_currentSlide}00%)`;// 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [product_currentSlide]);


  return (
    <div class="benner">
      <div class="up_benner">
        <div class="up_up">
          <a class="sign">회원가입</a>
          <div class="line"></div>
          <Link to="/Login" style={{ textDecoration: 'none' }}>
            <a class="login">로그인</a>
          </Link>
          <div class="line"></div>
          <a class="login">고객센터</a>
        </div>
        <div class="up_down">
          <div class="up_logo">
            <Link to="/">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA4MiA0MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGg4MnY0MkgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik02Mi41Ljk2NWMxLjAyNi0uNTU3IDIuNDY2LS43MTggMy4zNTYuMTA3Ljg5LjgyNS42NzYgMi4wNDggMCAzLjk3MyAwIDAtMS41MDUgNC4wNjYtMy4wNTUgOC4yNjJsLS4zOTggMS4wOGMtMS40MTQgMy44My0yLjc2MiA3LjQ4Ny0yLjkyNyA3Ljk2My0xLjQ5OCA0LjI0NSAxLjk2NyA0LjEyMiA0LjAyNC0uMTUyIDEuMTU5LTIuMzk0IDIuNjQ0LTYuMzU3IDIuNjQ0LTYuMzU3LjUyNC0xLjU2My42ODItMi41MDQuMzU5LTIuODI4LS4xMDctLjExMy4wNDUtLjI1Mi4xOC0uMzIzIDIuMjY5LTEuMTQ5IDQuNjMtLjA3MiAzLjMzNiAzLjMxbC0uMDU0LjEzOGMtLjM4Ny45NzgtMi42OCA2LjczMy0yLjY4IDYuNzMzLS42NzYgMS42Ni0uNTk1IDMuMjM2LjQxOCAzLjIzNi42ODYtLjAwNCAxLjQ2LS4zODUgMi4zMDQtMS4wODggMS44MTgtMS41MDQgMy4yMjItNC4zMTIgMy43MjctNS40NTQuMjMtLjUwOCAxLjA4Ny0yLjQyIDEuNzY2LTQuMzYxLjIzNi0uNjY1LjM2OS0xLjM2LjM5NS0yLjA2NWEuNDQzLjQ0MyAwIDAgMSAuMTk0LS40NTkgMy41NzggMy41NzggMCAwIDEgMS42Ny0uNDIgMS44MDUgMS44MDUgMCAwIDEgMS40NjUuNzA1Yy40NDMuNTk4LjU2NiAxLjU3OS4xMDMgMi44MDgtLjEyLjMyLTMuNzc1IDkuOTU4LTMuNzc1IDkuOTU4di4wMjZjMi4wNDEtMS4yMjMgMy44Ny0xLjMxMyA0Ljk1My0uODU0bC0uMDAzLS4wMTNjMS40OTUuNjQ3IDEuOTkgMi40NC45MzggMy41NTktLjEwMy4xMS0uMzYyLjA4NC0uMzYyLS4wOS0uMDk0LTEuMjUzLTIuNTE3LTMuNDk1LTYuMTA5LTEuMDc1bC0uMTQ1LjM4NS0xLjA2OCAyLjgwOGMtMi42MiA3LjAxOC01LjQwMyAxMi4xMzYtOS40MTUgMTEtMi42ODgtLjc2LTIuMzc3LTQuNjA3LjUxNS03Ljc5YTU0LjkgNTQuOSAwIDAgMSA2LjQ5LTUuODk4Yy4wNjgtLjE4OC4xMy0uMzUuMTg4LS41MTEuMjc4LS43OC40OTEtMS40MzQuNzkyLTIuMjY1bC4xNTktLjUxOGMtLjE3OC4yLS40OTguNTczLS43MTIuODEyLS43MTIuOC0yLjQ5NCAyLjc1Ny01LjMyOSAyLjIwN2wtLjIzNC0uMDUyYy0yLjA1LS41MDgtMi42MDgtMS45ODYtMi42NTUtMy4yNzctMi4xNDIgMi42NTYtNC4zNTEgMy40MjYtNS44MDcgMy4zOS0xLjk0OC0uMDQ4LTMuMzc4LTEuNTE0LTIuNDI3LTQuMjkgMS4wNTgtMy4xMDYgNS41LTE1LjMzMiA2Ljc5NS0xOSAuNDg1LTEuNTguNjY2LTIuNTguMTg0LTIuOTc0LS4xMjMtLjEwMy4wNTItLjI2NS4yLS4zNDZ6bTguMzY0IDI4Ljc3OGMtMS4xMDMuODgtNS41MjYgNC41My02Ljc1MiA3LjQ0MS0uNTA1IDEuMTk3LS4zNzYgMi4xNDkuNDg4IDIuMjMzIDEuOTYuMTk0IDQuMDEyLTMuODE4IDYuMjI4LTkuNTEyek0xNi4wMjggNS4zNTJjLS4wODcuMzMyLTEuMzE5IDMuODYtMi43MDEgNy43NDlsLS4yMDkuNTg2LS4yMS41ODktLjIxNS42MDRjNC42OTEtMS4xMjMgMTMuMDY0LTYuNTcgMTQuMDM1LTEwLjA4NS4xMi0uMTYxLjI5LS4yMi41NjYtLjAzNS40OTUuMzMuNjg2IDEuMTU1LjQ5NSAxLjkxOC0uNzY0IDMuMDM4LTYuNDE2IDcuMzQxLTExLjM3OSA5LjU1NC42MTIgMS42MzcgMi42ODIgNi4yNjcgNC4yMDYgOS4xMTEgMS42NjMgMy4xMTkgMy40MiA0LjU3NSA2LjE0NyA0LjczNyAxLjQ2LjA4NSAzLjAxNC0uNDQ3IDMuODkzLTEuMjJsLjE0OC0uMTQtLjAxMy4wM2MuMTk0LS4yMDQuNTExLjA3Ny4zNjYuMzIzYTYuNSA2LjUgMCAwIDEtNC45OTIgMi44NjdjLTYuMzQ1LjQyNy04Ljc3NC0zLjg3LTEzLjMwNC0xNC40OTQtLjM2Ni4xMjYtLjgwOS4yODgtMS4yNTUuNDUtLjA3NS4xODctMi4wNyA1LjY0Mi0yLjEzIDUuODIzLS45NDQgMi44Ny0xLjAwNSA0LjQ0Mi0uMzU4IDQuODk1LjE0NS4wOS4wNzQuMzMzLS4xNzguNDE0LTIuNTI3Ljc5Ni00Ljg1My0uNjk2LTMuNTU5LTQuNDQyIDEuMTYxLTMuMzE2IDUuNjktMTYuMTggNi45MTQtMTkuNjI2LjQyNy0xLjI5NC4xOTctMi4xMjUtLjQ5Mi0yLjMwNkM4LjUwNiAxLjc4Ljg3NyA4Ljc0OSAxLjk3MSAxNS4xODRjLjE5IDEuMTIuOTggMS43NDcgMS4zNzggMS42NjNhLjEzMy4xMzMgMCAwIDEgLjE1Ni4xNTkgMS41MDggMS41MDggMCAwIDEtMS44NDUgMS4wMzJDLjQ5IDE3Ljc4Mi4xMDcgMTYuNTI3LjA0MyAxNS44OC0uNjAxIDkuMjIgNi4xNDggMS4yMyAxMi4zODkuNThjMi4zNzgtLjI1IDQuNjEuOTYgMy42NCA0Ljc3MnptMjQuMDQgOS45MTMtLjA2LjIwNy0yLjgzIDguMTZjLS4zMDQuODUtLjEgMS43MzcuNTAxIDEuOTAyIDEuNzU3LjQ4MiA0LjAyOC0yLjE0NSA1LjEzMS00LjczM2E2Ny43OTQgNjcuNzk0IDAgMCAwIDEuNDc2LTMuODE1Yy41ODItMS42NDMgMS4xMDYtMy4xODMuNzgzLTMuOTA4LS4wNzUtLjE2OC4wNDUtLjI1Ni4yMjMtLjM1LjUwNS0uMjU1IDIuMjI2LS44MjUgMy4xNDEuMDY4LjY5NS42NzQuNjA5IDEuNzcxLS4wMyAzLjQzN2wtLjA5Ni4yNDIuMjItLjI3M2MyLjcwMy0zLjMgNC43OTItNC4yOTIgNi41NjMtMy41OTdsLjE0Ny4wNjJjMi4zODEgMS4wNzQgMS4xNDYgNS4yMTUtMi4xMTYgNS40OC0uMi4wMTctLjM1Ni0uMTI2LS4xNTgtLjQwNy4zOTUtLjYwNS4zNTYtMS45MDktLjc5Ni0yLjAyMi0xLjE1Mi0uMTEzLTIuODMgMS4yMDctNC4wMzggMi44NDQtMS4wODQgMS40NS0yLjIgMy45MTEtMy4zMjIgNy4yNzMtLjI3Mi44MTgtLjE0MyAxLjAxMi0uMTEgMS4wNjdhLjEuMSAwIDAgMSAwIC4wOTRjLS4xNDMuMjcyLS45NjUuNTk2LTEuNzYuNTk2LTEuNjI1LS4wMDctMi4yOTEtLjk0NS0xLjk2Ny0yLjQzNy0xLjg0OCAxLjc2NC0zLjcxMSAyLjYxNC01LjM1NSAyLjQ2NmEyLjUyNCAyLjUyNCAwIDAgMS0yLjIzNi0zLjEwM2MtMS40MjYgMS44MDktMy41NDIgMy4yNjgtNS42OTcgMy4wNjctMi4xNTUtLjItMy41LTEuNjY2LTIuODAyLTQuNzg4LjU5LTIuNTk4IDEuNTkyLTUuMjkgMi4yMDctNy4wMjcuNTE0LTEuNDU2LjYxOC0yLjQwNy4yOTQtMi43NS0uMTAzLS4xMTQuMDU1LS4yNS4xOTQtLjMyNCAxLjY5LS44ODYgNC4zOTQtLjMxNCAzLjYzIDIuMDktLjgwMiAyLjUyNy0yLjI1NSA2LjQ5LTIuNTUgNy40LS43MzcgMi4yODctLjI5IDMuNTIzLjc1NSAzLjU4IDEuMDQ1LjA2IDIuNDMtLjk2IDMuNDItMi41MDMgMS43Ni0yLjUyNCAyLjU4MS01LjY4NSAzLjM3Ny03Ljg4Mi4yMDQtLjU2LjUyNy0xLjg2Ni4xODUtMi4zNTItLjA5MS0uMTIzLjA2Ny0uMjU4LjI3NS0uMzcyIDEuNTM3LS44NDkgNC4yODUtLjY0IDMuNDAyIDIuNjA4eiIgZmlsbD0iIzVGMDA4MCIvPgogICAgPC9nPgo8L3N2Zz4K" alt="마켓컬리로고" />
            </Link>
            <button class="up_logo_btn1">마켓컬리</button>
            <button class="up_logo_btn2">뷰티컬리</button>
          </div>
          <div class="up_searchbar_position">
            <div class="up_searchbar">
              <input placeholder="검색어를 입력해주세요" class="up_searchbar_input" />
              <button class="up_searchbar_button"></button>
            </div>
          </div>
          <div class="up_icon">
            <div class="up_icon_box">
              <div class="icon1"></div>
              <button class="icon2"></button>
              <div class="icon3_box">
                <button class="icon3"></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="down_benner">
        <div class="category_box">
          <div class="category">
            <div class="category_img"></div>
            <span class="category_txt">카테고리</span>
          </div>
          <ul class="menu_box">
            <li class="menu_txt_box">
              <span class="menu_txt">신상품</span>
            </li>
            <li class="menu_txt_box">
              <span class="menu_txt">베스트</span>
            </li>
            <li class="menu_txt_box">
              <span class="menu_txt">알뜰쇼핑</span>
            </li>
            <li class="menu_txt_box">
              <span class="menu_txt">특가/혜택</span>
            </li>
          </ul>
          <div class="promotion_box">
            <a class="promotion_content">
              <span class="promotion_txt">샛별・낮</span>
              배송안내
            </a>
          </div>
        </div>
      </div>

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

            <div class="product_swipe">
              <div class="product_swipe_area">
                <div class="recommend_product" ref={product_slideRef}>
                  <div class="recommend_p">
                    <div class="recommend_top">
                      <img class="recommend_p_img" src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653039661258l0.jpeg" alt="상품 이미지" loading="lazy" />
                      <button type="button" class="recommend_p_btn">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" />
                      </button>
                    </div>
                    <div class="recommend_p_txt">
                      <h3>[진실된손맛] 더진한 소곱창전골</h3>
                      <span>8,000 원</span>
                    </div>
                  </div>
                  <div class="recommend_p">
                    <div class="recommend_top">
                      <img class="recommend_p_img" src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/161777174029l0.jpg" alt="상품 이미지" loading="lazy" />
                      <button type="button" class="recommend_p_btn">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" />
                      </button>
                    </div>

                    <div class="recommend_p_txt">
                      <h3>[최현석의 쵸이닷] 트러플 크림 뇨끼</h3>
                      <span>7,500 원</span>
                    </div>
                  </div>
                  <div class="recommend_p">
                    <div class="recommend_top">
                      <img class="recommend_p_img" src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1655793819247l0.jpg" alt="상품 이미지" loading="lazy" />
                      <button type="button" class="recommend_p_btn">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" />
                      </button>
                    </div>

                    <div class="recommend_p_txt">
                      <h3>[워커스] 솔티드 캬라멜 토피스 1.25kg</h3>
                      <span>16,980 원</span>
                    </div>
                  </div>
                  <div class="recommend_p">
                    <div class="recommend_top">
                      <img class="recommend_p_img" src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1657612696912l0.jpg" alt="상품 이미지" loading="lazy" />
                      <button type="button" class="recommend_p_btn">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" />
                      </button>
                    </div>

                    <div class="recommend_p_txt">
                      <h3>[전주 베테랑] 고기만두</h3>
                      <span>5,500 원</span>
                    </div>
                  </div>

                  <div class="recommend_p">
                    <div class="recommend_top">
                      <img class="recommend_p_img" src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1576486184565l0.jpg" alt="상품 이미지" loading="lazy" />
                      <button type="button" class="recommend_p_btn">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" />
                      </button>
                    </div>
                    <div class="recommend_p_txt">
                      <h3>[브레드가든] 진저브레드 쿠키 믹스</h3>
                      <span>4,392 원</span>
                    </div>
                  </div>
                  <div class="recommend_p">
                    <div class="recommend_top">
                      <img class="recommend_p_img" src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1610003828477l0.jpg" alt="상품 이미지" loading="lazy" />
                      <button type="button" class="recommend_p_btn">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" />
                      </button>
                    </div>

                    <div class="recommend_p_txt">
                      <h3>[닥터레이] 샐러드 칫솔 2개입 (색상랜덤)</h3>
                      <span>3,500 원</span>
                    </div>
                  </div>
                  <div class="recommend_p">
                    <div class="recommend_top">
                      <img class="recommend_p_img" src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653034446381l0.jpg" alt="상품 이미지" loading="lazy" />
                      <button type="button" class="recommend_p_btn">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" />
                      </button>
                    </div>

                    <div class="recommend_p_txt">
                      <h3>[아임얼라이브] 유기농 콤부차 315mL 4종</h3>
                      <span>3,800 원</span>
                    </div>
                  </div>
                  <div class="recommend_p">
                    <div class="recommend_top">
                      <img class="recommend_p_img" src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/16503910302l0.jpg" alt="상품 이미지" loading="lazy" />
                      <button type="button" class="recommend_p_btn">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘" />
                      </button>
                    </div>

                    <div class="recommend_p_txt">
                      <h3>[설치배송][LG전자] TROMM 건조기 RD20VS (모던 스테인리스/DD모터/20kg)</h3>
                      <span>1,905,500 원</span>
                    </div>
                  </div>
                </div>
              </div>
              <button class="product_left_btn" onClick={product_PrevSlide}></button>
              <button class="product_right_btn" onClick={product_NextSlide}></button>
            </div>


          </div>
        </div>

        <div class="LINE_BENNERS">
          <div class="line_benners_size">
            <img class="line_benners_img" src="https://product-image.kurly.com/banner/random-band/pc/img/e7b19a08-def2-4e5a-bcb5-dd48a20864fd.jpg" alt="" />
          </div>
        </div>
      </div>



      <div class="footer">
        <div class="up_footer">
          <div class="up_up_footer">
            <div class="left_div">
              <h2>
                고객행복센터
                <span>365일 오전 7시 - 오후 7시</span>
              </h2>
              <strong>1644-1107</strong>
              <div class="footer_btn">
                <button>카카오톡 문의</button>
                <button class="footer_btn2">1:1 문의</button>
                <button class="footer_btn2">대량주문 문의</button>
              </div>
              <div class="footer_email">
                비회원 문의:
                <a href="mailto:help@kurlycorp.com">help@kurlycorp.com</a>
                <br />
                비회원 대량주문 문의 :
                <a href="mailto:kurlygift@kurlycorp.com">kurlygift@kurlycorp.com</a>
              </div>
            </div>
            <div class="right_div">
              <ul class="right_div_ul">
                <li class="right_li">
                  <a href="https://www.kurly.com/shop/introduce/about_kurly.php" target="_self" class="right_a">컬리소개</a>
                </li>
                <li class="right_li2">
                  <a href="https://www.youtube.com/embed/WEep7BcboMQ?rel=0&amp;showinfo=0&amp;wmode=opaque&amp;enablejsapi=1" target="_self" class="right_a">컬리소개영상</a>
                </li>
                <li class="right_li2">
                  <a href="https://marketkurly.recruiter.co.kr/appsite/company/index" target="_blank" class="right_a">인재채용</a>
                </li>
                <li class="right_li2">
                  <a href="/user-terms/agreement" target="_self" class="right_a">이용약관</a>
                </li>
                <li class="right_li2">
                  <a href="/user-terms/privacy-policy" target="_self" class="right_a">개인정보처리방침</a>
                </li>
                <li class="right_li2">
                  <a href="/user-guide" target="_self" class="right_a">이용안내</a>
                </li>
              </ul>
              <div class="right_info">
                법인명 (상호) : 주식회사 컬리
                <span class="right_info_span"></span>
                사업자등록번호 : 261-81-23567
                <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&amp;apv_perm_no=" target="_blank" rel="noreferrer" class="css-1tby8gd ebj6vxr0">사업자정보 확인</a>
                <br />
                통신판매업 : 제 2018-서울강남-01646 호
                <span class="right_info_span"></span>
                개인정보보호책임자 : 이원준
                <br />
                주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)
                <span class="right_info_span"></span>
                대표이사 : 김슬아
                <br />
                입점문의 :
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScLB7YkGJwNRzpGpp0gbR1i4C1_uvTEFj43SFfJ_XEadTn3gQ/viewform?usp=sf_link" target="_blank" rel="noreferrer" class="css-1tby8gd ebj6vxr0">입점문의하기</a>
                <span class="right_info_span"></span>
                제휴문의 :
                <a href="mailto:business@kurlycorp.com" class="css-1tby8gd ebj6vxr0">business@kurlycorp.com</a>
                <br />
                채용문의 :
                <a href="mailto:recruit@kurlycorp.com" class="css-1tby8gd ebj6vxr0">recruit@kurlycorp.com</a>
                <br />
                팩스: 070 - 7500 - 6098
              </div>
              <ul class="right_sns">
                <a href="https://instagram.com/marketkurly" target="_blank" rel="noreferrer" class="css-9ipg3 ek68y4g0">
                  <img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="마켓컬리 인스타그램 바로가기" />
                </a>
                <a href="https://www.facebook.com/marketkurly" target="_blank" rel="noreferrer" class="css-9ipg3 ek68y4g0">
                  <img src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt="마켓컬리 페이스북 바로가기" />
                </a>
                <a href="https://blog.naver.com/marketkurly" target="_blank" rel="noreferrer" class="css-9ipg3 ek68y4g0">
                  <img src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt="마켓컬리 네이버블로그 바로가기" />
                </a>
                <a href="https://m.post.naver.com/marketkurly" target="_blank" rel="noreferrer" class="css-9ipg3 ek68y4g0">
                  <img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="마켓컬리 네이버포스트 바로가기" />
                </a>
                <a href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg" target="_blank" rel="noreferrer" class="css-9ipg3 ek68y4g0">
                  <img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="마켓컬리 유튜브 바로가기" />
                </a>
              </ul>
            </div>
          </div>
          <div class="up_down_footer">
            <button>
              <img src="https://res.kurly.com/pc/ico/2208/logo_isms.svg" alt="isms 로고" class="up_down_footer_img" />
              <p>
                [인증범위] 마켓컬리 쇼핑몰 서비스 개발·운영
                <br />
                (심사받지 않은 물리적 인프라 제외)
                <br />
                [유효기간] 2022.01.19 ~ 2025.01.18
              </p>
            </button>
            <button>
              <img src="https://res.kurly.com/pc/ico/2208/logo_privacy.svg" alt="eprivacy plus 로고" class="up_down_footer_img" />
              <p>
                개인정보보호 우수 웹사이트 ·
                <br />
                개인정보처리시스템 인증 (ePRIVACY PLUS)
              </p>
            </button>
            <button>
              <img src="https://res.kurly.com/pc/ico/2208/logo_tosspayments.svg" alt="payments 로고" class="toss_img" />
              <p>
                토스페이먼츠 구매안전(에스크로)
                <br />
                서비스를 이용하실 수 있습니다.
              </p>
            </button>
            <button>
              <img src="https://res.kurly.com/pc/ico/2208/logo_wooriBank.svg" alt="우리은행 로고" class="up_down_footer_img" />
              <p>
                고객님이 현금으로 결제한 금액에 대해 우리은행과
                <br />
                채무지급보증 계약을 체결하여 안전거래를 보장하고
                <br />
                있습니다.
              </p>
            </button>
          </div>
        </div>
        <div class="down_footer">
          마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
          <br />
          마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
          <em class="right">© KURLY CORP. ALL RIGHTS RESERVED</em>
        </div>
      </div>
    </div>
  );
}
export default Main