import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // SEO 메타 태그 추가를 위한 Helmet 임포트

import styles from "./Main.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FixIcon from "../../components/FixIcon/FixIcon";
import UnitplanBox from "../../components/UnitplanBox/UnitplanBox";
import MobilePopup from "../../components/MobilePopup/MobilePopup";
import Popup from "../../components/Popup/Popup";
import MobileSectionBox from "../../components/MobileSectionBox/MobileSectionBox";
import InterestPopup from "../../components/InterestPopup/InterestPopup"; // 새 팝업 컴포넌트 import

import mainImage from "../../assets/Main/Main1.jpg";
import section1_Image1 from "../../assets/Main/section1-img1.jpg";
import section2_Image1 from "../../assets/Main/section2-img1.jpg";
import section3_Image1 from "../../assets/Main/section3-img1.png";
import section3_Image2 from "../../assets/Main/section3-img2.png";
import section3_Image3 from "../../assets/Main/section3-img3.png";
import section3_Image4 from "../../assets/Main/section3-img4.png";
import section4_Image1 from "../../assets/Main/section4-img1.jpg";
import section4_Image2 from "../../assets/Main/section4-img2.jpg";
import section4_Image3 from "../../assets/Main/section4-img3.jpg";
import section8Img3 from "../../assets/Main/section8Img3.jpg";
import mobileImageMain from "../../assets/Main/mobileMain1.jpg";
import popupPage1 from "../../assets/Popup/page1.jpg";
import popupPage2 from "../../assets/Popup/page2.jpg";
import popupPage3 from "../../assets/Popup/page3.jpg";
import popupPage4 from "../../assets/Popup/page3.jpg";

import mobilePopupPage1 from "../../assets/Popup/mobilepage1.jpg";
import mobilePopupPage2 from "../../assets/Popup/mobilepage2.jpg";
import mobilePopupPage3 from "../../assets/Popup/mobilepage3.jpg";
import mobilePopupPage4 from "../../assets/Popup/mobilepage3.jpg";
import map1 from "../../assets/Main/map1.jpg";
import mobilemap1 from "../../assets/Main/mobilemap1.jpg";

import subpinkimg from "../../assets/Main/subpinkimg.jpg";
import UrlContainer from "../../components/UrlContainer/UrlContainer";

const section3Contents = [
  {
    imgSrc: section3_Image1,
    title: "PREMIUM 01",
    text1: `힐스테이트 브랜드 프리미엄`,
    text2: `베스트 아파트 2년연속 1위<br />
            브랜드 평판 71개월 1등`,
    link: "/BusinessGuide/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image2,
    title: "PREMIUM 02",
    text1: `첨단 시스템 반도체 국가산업단지로<br /> 높은 미래가치`,
    text2: `용인 반도체클러스터, 일반산업단지 등<br />
            더 가깝게 만나는 비전과 프리미엄`,
    link: "/LocationEnvironment/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image3,
    title: "PREMIUM 03",
    text1: `남다른 혁신설계`,
    text2: `선호도 높은 중·대형 평면 설계로<br />
            다양하고 넉넉한 수납공간 조성`,
    link: "/LocationEnvironment/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image4,
    title: "PREMIUM 04",
    text1: `우수한 교육환경`,
    text2: `단지 바로 앞 처인초·중교,고교 등<br />
            원스톱 안심교육환경`,
    link: "/LocationEnvironment/primium",
    linkText: "더 알아보기 >",
  },
];

const Main = () => {
  // 기존 상태 변수들
  const [isScroll, setIsScroll] = useState(false);
  const [page, setPage] = useState(1); // 페이지 세션 번호
  const [isScrolling, setIsScrolling] = useState(false); // 스크롤 중 여부
  const [isOpenPopup1, setIsOpenPopup1] = useState(true);
  const [isOpenPopup2, setIsOpenPopup2] = useState(true);
  const [isOpenPopup3, setIsOpenPopup3] = useState(true);
  const [isOpenPopup4, setIsOpenPopup4] = useState(true);
  const [isInterestPopupOpen, setIsInterestPopupOpen] = useState(false); // 방문예약 팝업 상태
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  // 관심고객 등록 폼 상태 관리 (방문일자 필드 포함)
  const [registration, setRegistration] = useState({
    name: "",
    phone: "",
    email: "",
    visitDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistration((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 스크롤 시 헤더 변경 처리
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PC에서만 페이지 전환 스크롤 이벤트 처리
  useEffect(() => {
    if (isMobile) return; // 모바일은 해당 없음

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;
      setIsScrolling(true);
      if (e.deltaY > 0) {
        if (page < 8.5) {
          setPage((prevPage) => prevPage + 1);
        }
      } else {
        if (page > 1) {
          setPage((prevPage) => prevPage - 1);
        }
      }
      setTimeout(() => setIsScrolling(false), 500);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [page, isScrolling, isMobile]);

  // PC에서 페이지 번호에 따라 스크롤 이동
  useEffect(() => {
    if (isMobile) return;
    const posTop = (page - 1) * window.innerHeight;
    window.scrollTo({
      top: posTop,
      behavior: "smooth",
    });
  }, [page, isMobile]);

  return (
    <>
  
      {!isMobile ? (
        // PC 버전
        <>
          <Header isChanged={isScroll} />
          {isOpenPopup1 && (
            <Popup
              onClosed={() => setIsOpenPopup1(false)}
              popupImage={popupPage1}
              numbering={1}
            />
          )}
          {!isOpenPopup1 && isOpenPopup2 && (
            <Popup
              onClosed={() => setIsOpenPopup2(false)}
              popupImage={popupPage2}
              numbering={2}
            />
          )}
          {!isOpenPopup2 && isOpenPopup3 && (
            <Popup
              onClosed={() => setIsOpenPopup3(false)}
              popupImage={popupPage3}
              numbering={3}
            />
          )}

          <div className={styles.imageContainer}>
            <img
              src={mainImage}
              className={styles.mainImage}
              alt="힐스테이트 용인마크밸리 메인이미지1"
            />
            <div className={styles.overlay}></div>
            <div className={styles.mainImageTextBox}>
              <div className={styles.mainImageTextSub}>
                1군 브랜드 프리미엄{" "}
                <span className={styles.greyText}>브랜드 평판1위 프리미엄</span> |
                부담을 덜어주는{" "}
                <span className={styles.greyText}>저렴한 분양가</span> | 계약금
                5%로 내집마련기회{" "}
                <span className={styles.greyText}>착한조건</span>
              </div>
              <div className={styles.mainImageTitleBox}>
                <div className={styles.mainImageText}>용인이 기다린</div>
                <div className={styles.mainImageLine}></div>
                <div className={styles.mainImageText}>
                  힐스테이트 용인마크밸리
                </div>
              </div>
              {/* 기존 관심고객 등록 링크 대신 방문예약 버튼 클릭 시 팝업 오픈 */}
              <div>
                <button
                  onClick={() => setIsInterestPopupOpen(true)}
                  className={styles.subPinkBtn}
                >
                  <img
                    src={subpinkimg}
                    className={styles.subPinkImg}
                    alt="힐스테이트 용인마크밸리 모델하우스 관심고객등록"
                  />
                </button>
              </div>
            </div>
            <FixIcon type="absolute" />
          </div>

          <div className={styles.section}>
            <div className={styles.section1}>
              <div className={styles.textBox}>
                <div className={styles.text1}>Location</div>
                <div className={styles.text2}>
                  " 방문 예약 고객 전원 신세계상품권 100% 증정 "
                </div>
                <div className={styles.text3}>
                  - 세종~포천고속도로, 반도체고속도로(계획),경강선 연장(계획), <br />주요간선도로 확장 등 더 빠르게 연결하는 광역교통망 <br />
                  - 첨단 아주대학교 종합병원 도보 5분 <br />
                  - 세종~포천고속도로, 반도체고속도로(계획), <br />
                  - 모두를 누리는 힐스테이트 용인마크밸리
                </div>
                <div className={styles.text4}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsInterestPopupOpen(true);
                    }}
                  >
                    관심고객 등록하기 {">"}
                  </a>
                </div>
              </div>
              <div className={styles.menuBox}>
                <img
                  src={section1_Image1}
                  alt="힐스테이트 용인마크밸리 모델하우스 브랜드소개-image2"
                />
                <Link to="/Brand/video" className={styles.btn}>
                  브랜드 소개 {">"}
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section8}>
              <div className={styles.textBox}>
                <div className={styles.title}>
                  소수만 누릴 수 있는
                  <br />
                  <span>최고의 브랜드 아파트 용인 힐스테이트</span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    찬란한 비전에 완벽한 주거가치까지 더해
                    <br />
                    힐스테이트 용인마크밸리가 함께합니다
                  </div>
                </div>
              </div>
              <img
                src={section8Img3}
                alt="힐스테이트 용인마크밸리 모델하우스 -image2"
              />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section2}>
              <div className={styles.textBox}>
                <div className={`${styles.text1} fadeUpRepeat`}>
                  완벽한 생활에서 준비된 미래까지
                </div>
                <div className={`${styles.text2} fadeUpRepeat`}>
                  기대한 모든 프리미엄이
                  <br />
                  힐스테이트 용인마크밸리에서 펼쳐집니다
                </div>
                <div className={`${styles.text3} fadeUpRepeat`}>
                  SPECIAL PLAN
                </div>
                <div className={`${styles.text4} fadeUpRepeat`}>
                  살수록 자부심이 차원이 다른
                  <br />
                  프리미엄 주거라이프를 실현합니다
                </div>
                <div className={`${styles.text5} fadeUpRepeat`}>
                  주거의 품격과 가치를 높이는 <span>특화설계</span>
                  <br />
                  안전한 이동을 위한 세심한 <span>단지설계</span>
                  <br />
                  편리한 생활을 위한 최적의 <span>공간설계</span>
                </div>
              </div>
              <img
                src={section2_Image1}
                alt="힐스테이트 용인마크밸리 모델하우스  아파트 조감도-image3"
              />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section3}>
              {section3Contents.map((section, index) => (
                <div key={index} className={styles.box}>
                  <img src={section.imgSrc} alt={section.title} />
                  <div className={styles.boxTitle}>{section.title}</div>
                  <div
                    className={styles.boxText1}
                    dangerouslySetInnerHTML={{ __html: section.text1 }}
                  />
                  <div
                    className={styles.boxText2}
                    dangerouslySetInnerHTML={{ __html: section.text2 }}
                  />
                  <Link to={section.link} className={styles.boxText3}>
                    {section.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section4}>
              <div className={styles.imageBox}>
                <img
                  src={section4_Image1}
                  alt="힐스테이트 용인마크밸리 모델하우스 브랜드소개-image4"
                />
                <div className={styles.text1}>힐스테이트 용인마크밸리</div>
                <div className={styles.text2}>THE NATURAL NOBILITY</div>
                <div className={styles.text3}>
                  당신의 삶, 그 고귀함이 계속되길
                </div>
              </div>
              <div className={styles.textBox}>
                <div className={styles.text1}>UNITPLAN</div>
                <UnitplanBox />
                <Link to="/FloorPlan/84A" className={styles.text2}>
                  더 알아보기 {">"}
                </Link>
              </div>
            </div>
          </div>
          <div id="interestForm" className={styles.section}></div>

          {/* 관심고객 등록 섹션 (PC 버전) */}
          <div className={styles.section}>
            <div className={styles.registrationContainer}>
              {/* 왼쪽 안내 문구 영역 */}
              <div className={styles.registrationInfo}>
                <div className={styles.text1}>
                  <p>
                    힐스테이트 용인마크밸리
                    <br />
                    주변이 궁금하시나요?
                  </p>
                </div>
                <div className={styles.text2}>
                  <p>
                    힐스테이트 용인마크밸리
                    <br />
                    현장 정보 및 견본주택 정보를 보실 수 있습니다.
                  </p>
                  <p>
                    상담신청을 남겨주시거나 전화로 문의주시면
                    <br />
                    친절하고 자세히 안내해 드리겠습니다.
                  </p>
                </div>
                <div className={styles.text3}>
                  <p>상담문의</p>
                </div>
                <div className={styles.text4}>
                  <p>1533-8848</p>
                </div>
              </div>
              {/* 오른쪽 관심고객 등록 폼 영역 */}
              <div className={styles.registrationSection}>
                <div className={styles.registrationHeader}>
                  힐스테이트 용인마크밸리
                </div>
                <div className={styles.registrationDescription}>방문예약</div>
                <form
                  className={styles.registrationForm}
                  action="https://formspree.io/f/xvgzvlvr"
                  method="POST"
                >
                  <label htmlFor="name">
                    이름<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder=""
                    value={registration.name}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="phonenumber">
                    연락처<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder=""
                    value={registration.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <div className={styles.registrationForm}>
                    <label htmlFor="visitdata">
                      방문일자 <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      id="visitDate"
                      type="date"
                      name="visitDate"
                      value={registration.visitDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit">등록하기</button>
                </form>
              </div>
            </div>
          </div>

          {/* <div className={styles.section}>
            <div className={styles.section9}>
              <div className={styles.textBox}>
                <div className={styles.title}>
                  힐스테이트 용인마크밸리
                  <br />
                  <span>견본주택 오시는길</span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    찬란한 비전에 완벽한 주거가치까지 더해
                    <br />
                    힐스테이트 용인마크밸리가 함께합니다
                  </div>
                </div>
              </div>
              <img src={map1} alt="힐스테이트 용인마크밸리 모델하우스 오시는길안내-image1" />
            </div>
          </div> */}

          <div className={styles.section5}>
            <UrlContainer />
            <Footer />
          </div>

          {/* 방문예약 팝업 (PC) */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </>
      ) : (
        // 모바일 버전
        <div className={styles.mobileMain}>
          {isOpenPopup1 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup1(!isOpenPopup1)}
              popupImage={mobilePopupPage1}
              numbering={1}
            />
          )}
          {isOpenPopup2 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup2(!isOpenPopup2)}
              popupImage={mobilePopupPage2}
              numbering={2}
            />
          )}
          {isOpenPopup3 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup3(!isOpenPopup3)}
              popupImage={mobilePopupPage3}
              numbering={3}
            />
          )}
          {isOpenPopup4 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup4(!isOpenPopup4)}
              popupImage={mobilePopupPage3}
              numbering={4}
            />
          )}

          <Header isChanged={isScroll} />

          <div className={styles.imageContainer}>
            <img
              src={mobileImageMain}
              className={styles.mainImage}
              alt="힐스테이트 용인마크밸리 모델하우스 모바일메인이미지1"
            />
            <div className={styles.overlay}></div>
            <div className={styles.mainImageTextBox1}>
              <div className={styles.mainImageTextSub1}>
                1군 브랜드 건설사
                <br />
                <span className={styles.greyText}>브랜드 프리미엄</span>
                <br />
                부담을 덜어주는
                <br />
                <span className={styles.greyText}>착한가격</span>
                <br />
                계약금 5%로 내집마련기회
                <br />
                <span className={styles.greyText}>착한조건</span>
              </div>
              <div className={styles.mainImageTitleBox1}>
                <div className={styles.mainImageText1}>용인 힐스테이트</div>
              </div>
            </div>
          </div>

          <div className={styles.container1}>
            <div className={styles.text1}>Location</div>
            <div className={styles.text2}>
              "방문예약을 하시면 신세계 상품권 100% 증정 "
            </div>
            <div className={styles.text3}>
                  - 세종~포천고속도로, 반도체고속도로(계획),경강선 연장(계획), <br />주요간선도로 확장 등 더 빠르게 연결하는 광역교통망 <br />
                  - 첨단 아주대학교 종합병원 도보 5분 <br />
                  - 세종~포천고속도로, 반도체고속도로(계획), <br />
                  - 모두를 누리는 힐스테이트 용인마크밸리
                </div>
            <div className={styles.text4}>
              {/* 외부 링크 대신 방문예약 클릭 시 팝업 호출 */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsInterestPopupOpen(true);
                }}
                className={styles.popupBtn}
              >
                관심고객 등록하기 {">"}
              </a>
            </div>
          </div>

          <div className={styles.container7}>
            <div className={styles.textBox}>
              <div className={styles.title}>
                용인 반도체클러스터의 중심으로 사는
                <br />
                <span>최고의 브랜드 아파트</span>
              </div>
              <div className={styles.subTitle}>
                <div className={styles.textLine}></div>
                <div className={styles.subText}>
                  완벽한 비전중심에서 완벽한 주거가치까지 더해
                  <br />
                  용인 힐스테이트가 함께합니다
                </div>
              </div>
            </div>
            <img
              src={section8Img3}
              alt="힐스테이트 용인마크밸리 모델하우스 모바일 입지환경이미지2"
            />
          </div>

          <div className={styles.container3}>
            <div className={styles.textbox}>
              <div className={`${styles.text1} fadeUpRepeat`}>
                완벽한 생활에서 준비된 미래까지
              </div>
              <div className={`${styles.text2} fadeUpRepeat`}>
                기대한 모든 프리미엄이
                <br />
                힐스테이트 용인마크밸리에서 펼쳐집니다
              </div>
              <div className={`${styles.text3} fadeUpRepeat`}>SPECIAL PLAN</div>
              <div className={`${styles.text4} fadeUpRepeat`}>
                살수록 자부심이 차원이 다른
                <br />
                프리미엄 주거라이프를 용인 힐스테이트 모델하우스에서
                확인하세요
              </div>
            </div>
            <img
              src={section2_Image1}
              alt="힐스테이트 용인마크밸리 모델하우스 mobile조감도-image1"
            />
          </div>

          <div className={styles.container4}>
            <div className={styles.text1}>UNITPLAN</div>
            <UnitplanBox />
            <Link to="/FloorPlan/84A" className={styles.text2}>
              <div>더 알아보기 &gt;</div>
            </Link>
          </div>

          <div className={styles.container6}>
            {section3Contents.map((section, idx) => (
              <MobileSectionBox
                key={idx}
                type={idx % 2 === 0 ? "left" : "right"}
                titleImag={section.imgSrc}
                title={section.title}
                subText1={section.text1}
                subText2={section.text2}
              />
            ))}
          </div>

          {/* 관심고객 등록 섹션 (모바일 버전) */}
          <div className={styles.containerRegistration}>
            <div className={styles.registrationHeader}>용인 힐스테이트 마크밸리</div>
            <div className={styles.registrationDescription}>방문예약</div>
            <form
              className={styles.registrationForm}
              action="https://formspree.io/f/xvgzvlvr"
              method="POST"
            >
              <label htmlFor="name">
                이름<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder=""
                value={registration.name}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="phonenumber">
                연락처<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder=""
                value={registration.phone}
                onChange={handleInputChange}
                required
              />

              <button type="submit">등록하기</button>
            </form>
          </div>

          <div className={styles.container2}>
            <div>
              <img
                src={section1_Image1}
                alt="힐스테이트 용인마크밸리 모델하우스 브랜드소개 mobile-image5"
              />
              <Link to="/Brand/intro" className={styles.btn}>
                브랜드 소개 {">"}
              </Link>
            </div>
          </div>

          {/* <div className={styles.section}>
            <div className={styles.section9}>
              <img
                src={mobilemap1}
                alt="힐스테이트 용인마크밸리 모델하우스 오시는길안내-mobileimage2"
              />
            </div>
          </div> */}

          <div className={styles.section5}>
            <UrlContainer />
            <Footer />
            <FixIcon />
          </div>

          {/* 방문예약 팝업 (모바일) */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Main;
