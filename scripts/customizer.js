
/**
 * File customizer.js.
 * Theme Customizer enhancements for a better user experience.
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

const $ = window.jQuery
const wp = window.wp

// Site title and description.
wp.customize('blogname', value => {
  value.bind(to => { $('.site-title a').text(to) })
})

wp.customize('blogdescription', value => {
  value.bind(to => { $('.site-description').text(to) })
})

// Header text color.
wp.customize('header_textcolor', value => {
  value.bind(to => {

    if ('blank' === to) {

      $('.site-title a, .site-description')
        .css({
          clip: 'rect(1px, 1px, 1px, 1px)',
          position: 'absolute'
        })

    } else {

      $('.site-title a, .site-description')
        .css({
          clip: 'auto',
          position: 'relative'
        })

      $('.site-title a, .site-description')
        .css({
          color: to
        })
    }
  })
})

// Text color
wp.customize('text_color', value => {
  value.bind(to => {
    $('body, button, input, select, textarea, a.toggle-menu')
      .css({ color: to })
  })
})

// Link color
wp.customize('link_color', value => {
  value.bind(to => {

    const temp = $('.site-title a').css('color')
    $('a').css({ color: to })
    $('.site-title a').css({ color: temp })
  })
})

// Footer Background color
wp.customize('footer_background_color', value => {
  value.bind(to => {
    $('#secondary').css({'background-color': to})
  })
})
