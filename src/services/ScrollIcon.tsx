export const ScrollIcon = () => {
  return (
    <>
      <style>{`
      .icon-scroll,
      .icon-scroll:before {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
      .icon-scroll {
        width: 60px;
        height: 100px;
        border: 4px solid #000;
        border-radius: 25px;
      }
      .icon-scroll:before {
        content: '';
        width: 10px;
        height: 20px;
        background: #000;
        margin-left: -2px;
        top: 8px;
        border-radius: 4px;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-name: scroll;
      }
      @keyframes scroll {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: translateY(50px);
        }
      }
      `}</style>
      <div className="icon-scroll" onClick={() => document.querySelector('.icon-scroll').scrollIntoView({ behavior: 'smooth' })}></div>
    </>
  )
}
