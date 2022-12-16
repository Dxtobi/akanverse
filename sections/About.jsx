'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metarverse" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] front-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">METARVERSE </span> Lorem, ipsum
        dolor sit amet consectetur
        adipisicing elit. Cupiditate suscipit et,
        est veritatis, consectetur eius voluptates labore similique obcaecati tempora corporis rerum mollitia.
        Odit, accusamus! Dicta voluptatum cumque unde officia debitis dolore iure quae illo,
        vero sunt adipisci quas corrupti porro,  commodi accusamus! <span className="font-extrabold text-white"> similique necessitatibus in animi </span>
        neque in temporibus quas natus maxime fuga autem! Optio dolore aliquid quae perspiciatis,
        atque ad repudiandae qui <span className="font-extrabold text-white"> nesciunt laudantium non nemo nulla accusamus facere</span> ,
        ducimus reiciendis! Voluptas, facere cum voluptate asperiores provident ex ab totam,
        quod rerum eligendi possimus.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[10px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
