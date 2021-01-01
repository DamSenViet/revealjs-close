export default {
  id: 'close',
  init: (deck: any) => {
    const config = deck.getConfig();

    // find the close button
    let closeButtonElement: HTMLButtonElement;
    const revealElement: HTMLDivElement = deck.getRevealElement();

    if (revealElement.querySelector("button.close") == null) return;
    closeButtonElement = <HTMLButtonElement>revealElement.querySelector("button.close");
    closeButtonElement.style.visibility = "hidden";

    const viewportElement: HTMLDivElement = config.embedded ? deck.getViewportElement() : document.documentElement;

    let isShowingCloseButton = document.fullscreenElement === viewportElement;
    const setIsShowingCloseButton = (value: boolean) => {
      isShowingCloseButton = value;
      if (value) {
        closeButtonElement.style.visibility = "visible";
        viewportElement.requestFullscreen();
      }
      else {
        closeButtonElement.style.visibility = "hidden";
        document.exitFullscreen();
      }
    };

    viewportElement.addEventListener("fullscreenchange", () => {
      setIsShowingCloseButton(!isShowingCloseButton);
    });

    closeButtonElement.addEventListener("click", () => {
      document.exitFullscreen();
    });
  },
};
