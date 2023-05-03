document.addEventListener('DOMContentLoaded', () => {

  const onScrollfooter = () => {

    const footer = document.querySelector('.f')

    let prevScroll = window.pageYOffset
    let currentScroll

    window.addEventListener('scroll', () => {

      currentScroll = window.pageYOffset

      const footerHidden = () => footer.classList.contains('_hidden')

      if (currentScroll > prevScroll && !footerHidden()) {
        footer.classList.add('_hidden')
      }
      if (currentScroll < prevScroll && footerHidden()) {
        footer.classList.remove('_hidden')
      }

      prevScroll = currentScroll

    })

  }

  onScrollfooter()

});