import { useState } from "react";
import { motion } from "framer-motion";
import HeaderMenu from "./HeaderMenus";

import styles from "@/styles/Header/Header.module.scss";

import { useRef, useEffect } from "react";
import { Badge, Button, Container, Icon, Text } from "@jds/core";
import Image from "next/image";
import Link from "next/link";
import { IcClose, IcLogin, IcProfile, IcUser } from "@jds/core-icons";
import HeaderMenus from "./HeaderMenus";

export default function HeaderNew() {
  const [fromOtp, setFromOtp] = useState(false);

  const menuItems = [
    {
      name: "Products",
      link: "/",
    },
    {
      name: "Renew Insurance",
      link: "/",
    },

    {
      name: "Claims",
      link: "/",
    },
    {
      name: "Blog",
      link: "/blogs",
    },

    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "Contact",
      link: "/contact-us",
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);
  const [openIndexMobile, setOpenIndexMobile] = useState(-1);

  const handleButtonClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const handleButtonClickMobile = (index) => {
    setOpenIndexMobile(index === openIndexMobile ? -1 : index);
  };

  const handleLinkClick = () => {
    setOpenIndex(-1);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const menuClassName = `${styles.navMobile} ${menuOpen ? styles.open : ""}`;
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenIndex(-1);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.headerContainer}>
      <Container className={styles.fullContainer}>
        <Container className={styles.header}>
          <Container className={styles.mobileHeaderTop}>
            {!menuOpen ? (
              <Container
                className={styles.hamburger}
                onClick={() => setMenuOpen((prevState) => !prevState)}
              >
                <Image
                  style={{ width: "40px", height: "40px" }}
                  alt="prefix"
                  src="/images/Header/Prefix.svg"
                  width={40}
                  height={40}
                />
              </Container>
            ) : (
              <Icon
                onClick={() => setMenuOpen((prevState) => !prevState)}
                ic={<IcClose />}
                style={{ color: "#FFFFFF" }}
              />
            )}
            <Link href="/" className={styles.logo} onClick={handleLinkClick}>
              <Image
                alt="Jio logo"
                // style={{ objectFit: "contain" }}
                src="/images/Header/Logo.svg"
                width={64}
                height={32}
              />
            </Link>
          </Container>
          <nav className={styles.nav} ref={menuRef}>
            <ul className={styles.navItems}>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={item.subMenu ? styles.subMenuNav : ""}
                >
                  {item.subMenu ? (
                    <HeaderMenus
                      name={item.name}
                      subMenu={item.subMenu}
                      isOpen={openIndex === index}
                      onClick={() => handleButtonClick(index)}
                      handleLinkClick={handleLinkClick}
                    />
                  ) : (
                    <Link onClick={handleLinkClick} href={item.link}>
                      <Container style={{ position: "relative" }}>
                        {item.name}
                        {item.name === "Renew Insurance" && (
                          <Badge
                            label="10% cashback"
                            size="small"
                            style={{
                              backgroundColor: "#25AB21",
                              borderRadius: "1.5rem",
                              top: "-25px",
                              left: "25px",
                              position: "absolute",
                              marginTop:"5px"
                            }}
                          />
                        )}
                      </Container>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </Container>
        <Container>
          <Button
            title="Login"
            size="small"
            type="tertiary"
            iconLeft={<IcProfile style={{ color: "white" }} width={20} />}
            style={{ backgroundColor: "var(--primary-color-50)", borderColor: "#FFFFFF",display:"flex",gap:"0.5rem" }}
          />
        </Container>
      </Container>

      <nav className={menuClassName}>
        <ul className={styles.navItems}>
          {menuItems.map((item, index) => (
            <li key={index} className={item.subMenu ? styles.subMenuNav : ""}>
              {item.link ? (
                <Link href={item.link} onClick={() => setMenuOpen(false)}>
                  {item.name}
                </Link>
              ) : (
                <button onClick={() => handleButtonClickMobile(index)}>
                  {item.name}
                  <motion.svg
                    animate={openIndexMobile === index ? "open" : "closed"}
                    variants={{
                      open: { rotate: 180 },
                      closed: { rotate: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55, marginLeft: "4px" }}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.77988 0.342186C9.6389 0.201246 9.44771 0.12207 9.24837 0.12207C9.04902 0.12207 8.85783 0.201246 8.71685 0.342186L4.99546 4.06357L1.27408 0.342186C1.13229 0.20524 0.94238 0.129463 0.745262 0.131176C0.548143 0.132889 0.359584 0.211955 0.220195 0.351344C0.0808067 0.490732 0.00174141 0.679292 2.86102e-05 0.87641C-0.00168419 1.07353 0.0740929 1.26343 0.211038 1.40522L4.46394 5.65813C4.60492 5.79907 4.79611 5.87824 4.99546 5.87824C5.19481 5.87824 5.386 5.79907 5.52698 5.65813L9.77988 1.40522C9.92082 1.26424 10 1.07305 10 0.873705C10 0.674356 9.92082 0.483168 9.77988 0.342186Z"
                      fill="#292460"
                    />
                  </motion.svg>
                </button>
              )}
              {item.subMenu && openIndexMobile === index && (
                <ul className={styles.subMenu}>
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={subItem.link}
                        onClick={() => setMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
