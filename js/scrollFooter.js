document.addEventListener('DOMContentLoaded', () => { // DOM готов к взаимодейтсвию

  const onScrollfooter = () => { // объявляем основную функцию onScrollfooter

    const footer = document.querySelector('.f') // находим footer и записываем в константу

    let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
    let currentScroll // на сколько прокручена страница сейчас (пока нет значения)

    window.addEventListener('scroll', () => { // при прокрутке страницы

      currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу

      const footerHidden = () => footer.classList.contains('_hidden') // узнаем скрыт footer или нет

      if (currentScroll > prevScroll && !footerHidden()) { // если прокручиваем страницу вниз и footer не скрыт
        footer.classList.add('_hidden') // то скрываем footer
      }
      if (currentScroll < prevScroll && footerHidden()) { // если прокручиваем страницу вверх и footer скрыт
        footer.classList.remove('_hidden') // то отображаем footer
      }

      prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент

    })

  }

  onScrollfooter() // вызываем основную функцию onScrollfooter

});