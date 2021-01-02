import styles from "./styles";

export default {
  id: 'close',
  init: (deck: any) => {
    const config = deck.getConfig();

    // insert styles
    const stylesElement = document.createElement("style");
    document.head.prepend(stylesElement);
    stylesElement.innerHTML = styles;

    // find the close button
    const closeButtonElement: HTMLButtonElement = document.createElement("button");
    closeButtonElement.classList.add("close");
    console.log(closeButtonElement);

    const revealElement: HTMLDivElement = deck.getRevealElement();
    revealElement.appendChild(closeButtonElement);

    if (revealElement.querySelector("button.close") == null) return;
    closeButtonElement.style.visibility = "hidden";

    const viewportElement: HTMLDivElement = config.embedded ? deck.getViewportElement() : document.documentElement;

    let isShowingCloseButton = document.fullscreenElement === viewportElement;
    const setIsShowingCloseButton = (value: boolean) => {
      isShowingCloseButton = value;
      if (value)
        closeButtonElement.style.visibility = "visible";
      else
        closeButtonElement.style.visibility = "hidden";
    };

    viewportElement.addEventListener("fullscreenchange", () => {
      setIsShowingCloseButton(!isShowingCloseButton);
    });

    closeButtonElement.addEventListener("click", () => {
      document.exitFullscreen();
    });
  },
};
