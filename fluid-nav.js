const sections = document.querySelectorAll('section')
const bubble = document.querySelector('.bubble')
const gradients = [
  'linear-gradient(to right, #642B73, #C6426E)',
  'linear-gradient(to right, #159957, #155799)',
  'linear-gradient(to right, #000046, #1CB5E0)'
]

const options = {
  threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options)

function navCheck(entries) {
  entries.forEach(entry => {
    // console.log(entry)
    const className = entry.target.className
    // console.log(className)
    const activeAnchor = document.querySelector(`[data-page=${className}]`)
    const gradientIndex = entry.target.getAttribute('data-index')
    const coords = activeAnchor.getBoundingClientRect()
    // console.log(coords)
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    }
    if (entry.isIntersecting) {
      bubble.style.setProperty('left', `${directions.left}px`)
      bubble.style.setProperty('top', `${directions.top}px`)
      bubble.style.setProperty('width', `${directions.width}px`)
      bubble.style.setProperty('height', `${directions.height}px`)
      bubble.style.background = gradients[gradientIndex]
    }
  })
}

sections.forEach(section => {
  observer.observe(section)
})