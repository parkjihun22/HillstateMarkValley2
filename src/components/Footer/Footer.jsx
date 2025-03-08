import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { IoCall } from "react-icons/io5";

import styles from "./Footer.module.scss";
import footerlogo from "../../assets/logo/footerlogo.png";

// 관심고객 팝업 컴포넌트 import
import InterestPopup from "../../components/InterestPopup/InterestPopup";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  // PC 버전에서 사용할 관심고객 팝업 상태 및 등록폼 상태
  const [isInterestPopupOpen, setIsInterestPopupOpen] = useState(false);
  const [registration, setRegistration] = useState({
    name: "",
    phone: "",
    email: "",
    visitDate: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistration((prev) => ({ ...prev, [name]: value }));
  };

  if (isMobile) {
    return (
      <div className={styles.container}>
        <img src={footerlogo} alt="Footer Logo" />

        <div className={styles.innerContainer}>
          <div className={styles.textContainer}>
            <div className={styles.text1}>
              시행: ㈜힐스테이트 용인마크밸리 ㅣ 시공: ㈜현대엔지니어링
            </div>
            <div className={styles.text1}>
              ※본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.
            </div>
            <div className={styles.text1}>
              대표자명: 박지훈 / eyeful31@naver.com
            </div>
            <div className={styles.text2}>
              COPYRIGHTⓒ 힐스테이트 용인마크밸리 모델하우스 ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* PC 버전 푸터 */}
      <div className={styles.container}>
        <img src={footerlogo} alt="Footer Logo" />

        <div className={styles.innerContainer}>
          <div className={styles.textContainer}>
            <div className={styles.text1}>
              시행: ㈜힐스테이트 용인마크밸리 ㅣ 시공: ㈜현대엔지니어링
            </div>
            <div className={styles.text1}>
              ※본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.
            </div>
            <div className={styles.text1}>
              대표자명: 박지훈 / eyeful31@naver.com
            </div>
            <div className={styles.text2}>
              COPYRIGHTⓒ 평택힐스테이트 용인마크밸리 모델하우스 ALL RIGHTS RESERVED.
            </div>
          </div>

          {/* 원래의 a 태그 스타일을 복구하기 위해 className만 그대로 적용 */}
          <button
            onClick={() => setIsInterestPopupOpen(true)}
            className={styles.phoneNumber}
            type="button"
          >
            <IoCall size={25} /> 1533-8848
          </button>
        </div>
      </div>

      {/* 팝업창은 푸터 내부가 아닌 최상위에서 렌더링 */}
      {isInterestPopupOpen && (
        <InterestPopup
          onClose={() => setIsInterestPopupOpen(false)}
          registration={registration}
          handleInputChange={handleInputChange}
        />
      )}
    </>
  );
};

export default Footer;
