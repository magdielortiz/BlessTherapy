var myFullpage = new fullpage('#fullpage', {

  //Scrolling
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: true,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: '#element1, .element2',
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  normalScrollElementTouchThreshold: 5,
  bigSectionsDestination: null,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //Design
  controlArrows: true,
  verticalCentered: true,
  sectionsColor: ['#daede0', '#ffecb9', '#ffecb9', '#f9bbb1', '#daede0','#f9bbb1', '#f9bbb1'],
  fixedElements: '#header, .footer',
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,
  parallax: false,
  parallaxOptions: {
    type: 'reveal',
    percentage: 62,
    property: 'translate',
  },

  //Custom selectors
  sectionSelector: '.section',
  slideSelector: '.slide',

  lazyLoading: true,

  //events
  onLeave: function(origin, destination, direction) {},
  afterLoad: function(origin, destination, direction) {},
  afterRender: function() {},
  afterResize: function(width, height) {},
  afterResponsive: function(isResponsive) {},
  afterSlideLoad: function(section, origin, destination, direction) {},
  onSlideLeave: function(section, origin, destination, direction) {}
});
