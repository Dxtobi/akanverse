'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

import { footerVariants } from '../utils/motion';
import { socials } from '../constants/index';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          ENTER THE METARVERSE
        </h4>
        <button type="button" className="flex items-center rounded-[32px] gap-[12px] h-fit py-4 p-6 bg-[#25618b]">
          <img src="/headset.svg" alt="" className="w-[24px] h-[24px] object-contain" />
          <span className="font-normal text-[16px] text-white">ENTER METARVERSE </span>
        </button>
      </div>
      <div className="flex flex-row">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className=" flex items-center justify-between flex-wrap gap-4 ">
          <h4 className="font-extrabold text-[24px] text-white">
            Akanbi Joseph
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            MADE WITH LOVE AND FROM TUTORIALS TOO ;)
          </p>
          <div className="flex gap-4">
            {
              socials.map((s) => (
                <img
                  key={s.name}
                  alt={s.name}
                  src={s.url}
                  className="w-24px h-24px cursor-move object-contain"
                  // eslint-disable-next-line no-return-assign
                  onClick={() => window.location.replace(s.link)}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
