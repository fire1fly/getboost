document.addEventListener("DOMContentLoaded", function () {

  const modals = document.querySelectorAll(".m__wrapper");
  const btns = document.querySelectorAll(".btn-open-modal");

  // проходимся по всем кнопкам на страницы, которые должны открывать модалки
  // и сравниваем их data атрибуты, с атрибутами модалки, чтобы открывать соответсвующую
  btns.forEach(btn => {
    btn.addEventListener("click", function () {

      modals.forEach(modal => {
        if (btn.dataset.modal == modal.dataset.modal) {
          modal.classList.add("active");
          document.body.classList.add("noscroll");
        }
      });
    });
  });


  // обработка закрытия модалки на внешний клик и все элементы, имеющие класс "m-close"
  // также обработка случая когда ЛКМ нажата на модалке, а разжата вне модалки, чтобы она не закрывалась
  function handleUpDownClick(modal) {
    let downEl = null;
    let upEl = null;
    let closeBtn = null;

    modal.addEventListener("mousedown", (e) => {
      downEl = e.target.closest(".m");
      closeBtn = e.target.closest(".m-close");
    });

    modal.addEventListener("mouseup", (e) => {
      upEl = e.target.classList.contains("m__wrapper");

      if (closeBtn || (upEl && !(downEl && upEl))) {
        modal.classList.remove("active");
        document.body.classList.remove("noscroll");
      }

    });

  }

  modals.forEach(modalEl => {
    handleUpDownClick(modalEl);
  });

});