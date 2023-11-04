import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Header/Header.module.scss";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function HeaderMenus(props) {
  const { name, subMenu, isOpen, onClick, handleLinkClick } = props;

  const hasIcon = subMenu.some((item) => item.icon);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={styles.button}
    >
      <motion.button onClick={onClick}>
        {name}
        <motion.svg
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.77988 0.342186C9.6389 0.201246 9.44771 0.12207 9.24837 0.12207C9.04902 0.12207 8.85783 0.201246 8.71685 0.342186L4.99546 4.06357L1.27408 0.342186C1.13229 0.20524 0.94238 0.129463 0.745262 0.131176C0.548144 0.132889 0.359584 0.211955 0.220195 0.351344C0.0808063 0.490733 0.00174166 0.679292 2.87607e-05 0.87641C-0.00168414 1.07353 0.0740925 1.26343 0.211038 1.40522L4.46394 5.65813C4.60492 5.79907 4.79611 5.87824 4.99546 5.87824C5.19481 5.87824 5.386 5.79907 5.52698 5.65813L9.77988 1.40522C9.92082 1.26424 10 1.07305 10 0.873705C10 0.674356 9.92082 0.483168 9.77988 0.342186Z"
            fill="#292460"
          />
        </motion.svg>
      </motion.button>
      <motion.ul
        className={`${styles.subMenu} ${hasIcon ? styles.icon : ""}`}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 20px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {subMenu.map((item, index) => (
          <motion.li key={index} variants={itemVariants}>
            <Link href={item.link} onClick={handleLinkClick}>
              {item.icon && <Image alt={item.name} src={item.icon} />}
              {item.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
