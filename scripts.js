const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const works = button
      .closest("[data-work-container]")
      .querySelector("[data-works]");

    const activeWork = works.querySelector("[data-active-work]");
    var newIndex = [...works.children].indexOf(activeWork) + offset;

    if (newIndex < 0) newIndex = works.children.length - 1;
    if (newIndex >= works.children.length) newIndex = 0;

    works.children[newIndex].dataset.activeWork = true;
    delete activeWork.dataset.activeWork;
  });
});
