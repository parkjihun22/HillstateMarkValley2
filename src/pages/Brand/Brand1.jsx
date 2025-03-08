import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { throttle } from "lodash";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = useMemo(() => [
        { title: "브랜드 소개", url: "/brand/intro" },
        { title: "홍보 영상", url: "/brand/video" }
    ], []);

    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const handleScroll = useCallback(
        throttle(() => {
            setIsScroll(window.scrollY > 0);
            if (window.scrollY > 200) {
                setIsImageVisible(true);
            }
        }, 200),
        []
    );

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const timer = setTimeout(() => setIsTextVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
  <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>힐스테이트용인마크밸리 - 브랜드소개</title>
        <meta
          name="description"
          content="현대건설은 미래지향적인 주거 문화를 선도하며, 힐스테이트용인마크밸리에서 혁신적인 설계와 지속 가능한 개발 철학을 바탕으로 한 브랜드 가치를 경험해보세요. 고객 중심의 차별화된 주거 공간을 제공합니다."
        />
        <meta
          name="keywords"
          content="힐스테이트용인마크밸리"
        />
        <link rel="canonical" href="https://www.cialisknfrx.com/Brand/intro" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="힐스테이트용인마크밸리 - 브랜드소개"
        />
        <meta
          property="og:description"
          content="현대건설은 미래지향적인 주거 문화를 선도하며, 힐스테이트용인마크밸리에서 혁신적인 설계와 지속 가능한 개발 철학을 바탕으로 한 브랜드 가치를 경험해보세요. 고객 중심의 차별화된 주거 공간을 제공합니다."
        />
        <meta
          property="og:image"
          content="https://www.cialisknfrx.com/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.cialisknfrx.com/Brand/intro"
        />
        <meta property="og:site_name" content="힐스테이트용인마크밸리" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="힐스테이트용인마크밸리 - 브랜드소개"
        />
        <meta
          name="twitter:description"
          content="푸르지오는 미래지향적인 주거 문화를 선도하며, 힐스테이트용인마크밸리에서 혁신적인 설계와 지속 가능한 개발 철학을 바탕으로 한 브랜드 가치를 경험해보세요. 고객 중심의 차별화된 주거 공간을 제공합니다."
        />
        <meta
          name="twitter:image"
          content="https://www.cialisknfrx.com/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.cialisknfrx.com/Brand/intro"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
            {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "힐스테이트용인마크밸리 - 브랜드소개",
                "description": "푸르지오는 미래지향적인 주거 문화를 선도하며, 힐스테이트용인마크밸리에서 혁신적인 설계와 지속 가능한 개발 철학을 바탕으로 한 브랜드 가치를 경험해보세요. 고객 중심의 차별화된 주거 공간을 제공합니다.
                    ",
                "url": "https://www.cialisknfrx.com/Brand/intro"
            }
            `}
        </script>
      </Helmet>

            <header>
                <Header isChanged={isScroll} />
            </header>
            <FixIcon />
            <Bener title="용인 마크밸리" />
            <MenuBar contents={menuContents} />

            <nav className={styles.screenReaderOnly}>
                <h2>힐스테이트용인마크밸리 브랜드소개</h2>
                <ul>
                    {menuContents.map((menu, index) => (
                        <li key={index}><Link to={menu.url}>{menu.title}</Link></li>
                    ))}
                </ul>
            </nav>

            <section className={styles.screenReaderOnly}>
                <h1>힐스테이트용인마크밸리브랜드소개</h1>
                <p>현대건설의 힐스테이트는 신뢰와 품질을 최우선으로 여기는 브랜드입니다.</p>
            </section>

            <section className={`${styles.textBox} ${isTextVisible ? styles.active : ''} `}>
                <div>생활의 모든 것을 한걸음에</div>
                <div>힐스테이트, 반도체클러스터의 중심에 서다</div>
            </section>

            <img
                className={`${styles.image} ${isImageVisible ? styles.visible : ''}`}
                src={page1}
                srcSet={`${page1} 1x, ${page1.replace('.jpg', '@2x.jpg')} 2x, ${page1.replace('.jpg', '@3x.jpg')} 3x`}
                alt="힐스테이트용인마크밸리 브랜드 이미지"
                loading="lazy"
                width="800"
                height="600"
            />


            <Footer />
        </div>
    );
};

export default Brand1;
