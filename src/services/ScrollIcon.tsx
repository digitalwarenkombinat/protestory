export const ScrollIcon = () => {
  return (
    <>
      <style>{`
      .icon-scroll,
      .icon-scroll:before {
        position: absolute;
      }
      .icon-scroll {
        width: 60px;
        height: 100px;
        left: 50%;
        transform: translateX(-50%);
        border: 4px solid #000;
        border-radius: 25px;
      }
      .icon-scroll:before {
        content: '';
        width: 10px;
        height: 20px;
        background: #000;
        top: 8px;
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
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
