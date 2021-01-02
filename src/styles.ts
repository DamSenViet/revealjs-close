export default (`
  .reveal {
    position: relative;
    top: 0;
    left: 0;
  }
  
  .reveal .close {
    transition: opacity 0.15s ease;
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 999;
    
    display: block;
    width: 36px;
    height: 36px;
    padding: 10px;
    border: unset;

    opacity: 0.3;
    background-color: transparent;
    
    outline: unset;
    cursor: pointer;
  }

  .reveal .close:hover {
    opacity: 1;
  }

  .reveal .close::after,
  .reveal .close::before {
    transition: transform 0.15s ease, background-color 0.8s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    
    content: "";
    display: block;
    height: 5px;
    width: 36px;
    border-radius: 0.25em;
    
    background-color: #42AffA;
  }
  
  .reveal .close::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  .reveal .close::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  .reveal .close:hover::after {
    transform: translate(-50%, -50%) rotate(38deg);
  }
  
  .reveal .close:hover::before {
    transform: translate(-50%, -50%) rotate(-38deg);
  }
`)