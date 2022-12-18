gsap.registerPlugin(Flip)

const links = document.querySelectorAll('.nav-item a')
const activeNav = document.querySelector('.active-nav')

links.forEach(link => {
  link.addEventListener('click', () => {
    // Turn navs blue
    gsap.to(links, { color: "#252525" })
    if (document.activeElement === link) {
      gsap.to(link, { color: "#385ae0" })
    }

    // Move the line to active item
    const state = Flip.getState(activeNav)
    // console.log(state)
    link.appendChild(activeNav)
    Flip.from(state, {
      duration: 1.25,
      absolute: true,
      ease: 'elastic.out(1, 0.5)'
    })
  })
})

// Cards

const cards = document.querySelectorAll('.card')
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    const state = Flip.getState(cards)

    // Add active class to the clicked one and add inactive to the others
    const cardIsActive = card.classList.contains('active')
    cards.forEach((otherCards, otherIndex) => {
      otherCards.classList.remove('active')
      otherCards.classList.remove('is-inactive')
      if (!cardIsActive && index !== otherIndex) {
        otherCards.classList.add('is-inactive')
      }
    })
    if (!cardIsActive) card.classList.add('active')

    Flip.from(state, {
      duration: 1,
      ease: 'expo.out',
      absolute: true,
      // onComplete: () => {
      //   gsap.to('.card p', { y: 500 })
      // }
    })
  })
})