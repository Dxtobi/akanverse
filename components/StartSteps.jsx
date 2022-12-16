import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} min-w-[70px] min-h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="text-white font-bold text-[20px]">
        0{number}
      </p>
    </div>
    <p className="text-[#B0B0B0] font-normal text-[18px] ml-[30px] leading-[32px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
