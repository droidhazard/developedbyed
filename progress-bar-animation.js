const progressBar = document.querySelector('#progress-bar')
const section = document.querySelector('section')

const animateProgressBar = () => {
  let scrollDistance = -section.getBoundingClientRect().top
  let progressWidth = Math.floor(scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight) * 100)
  progressBar.style.width = `${progressWidth}%`
  // console.log(scrollDistance, progressWidth)
  // console.log(section.getBoundingClientRect())
  if (progressWidth < 0) {
    progressBar.style.width = '0%'
  }
}

window.addEventListener('scroll', animateProgressBar)