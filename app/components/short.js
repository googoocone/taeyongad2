import style from "./short.module.css";

export default function Short() {
  return (
    <div className={style.container}>
      <video
        src="/shorts.mp4"
        muted
        autoPlay
        controlsList="nodownload"
        loop
      ></video>
    </div>
  );
}
