// Burger Menu
const btnMenu = document.querySelector('.header__btn-menu')
const header = document.querySelector('.header')

btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('header__btn-menu--active')

  header.classList.toggle('header--mobile')
})

// Slider with arrows
const sliderArrows = document.querySelector('.slider-arrows')
const slidesArrows = sliderArrows.querySelectorAll('.slider-arrows__item')
const prevArrow = sliderArrows.querySelector('.slider-arrows__arrow--left')
const nextArrow = sliderArrows.querySelector('.slider-arrows__arrow--right')

let slideIndex = 0

prevArrow.addEventListener('click', () => showSlideArrows(-1))

nextArrow.addEventListener('click', () => showSlideArrows(1))

function showSlideArrows(n) {
  slideIndex += n

  if (slideIndex < 0) slideIndex = slidesArrows.length - 1
  if (slideIndex >= slidesArrows.length) slideIndex = 0

  slidesArrows.forEach(item => (item.style.display = 'none'))
  slidesArrows[slideIndex].style.display = 'block'
}
showSlideArrows(0)

// Slider with dots
const sliderDots = document.querySelector('.slider-dots')
const slidesDots = sliderDots.querySelectorAll('.slider-dots__item')
const wrapperDots = sliderDots.querySelector('.slider-dots__nav')

const dots = []

for (let i = 0; i < slidesDots.length; i++) {
  const dot = document.createElement('button')

  dot.dataset.slideTo = i

  dot.classList.add('slider-dots__nav-item')
  if (i == 0) dot.classList.add('slider-dots__nav-item--active')

  if (i != 0) slidesDots[i].style.display = 'none'
  dot.addEventListener('click', showSlideDots)

  wrapperDots.append(dot)
  dots.push(dot)
}

function showSlideDots(e) {
  console.log()

  const slideTo = e.target.dataset.slideTo
  slidesDots[slideTo]

  slidesDots.forEach(item => (item.style.display = 'none'))
  slidesDots[slideTo].style.display = 'block'

  dots.forEach(dot => dot.classList.remove('slider-dots__nav-item--active'))
  e.target.classList.add('slider-dots__nav-item--active')
}
