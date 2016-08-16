module.exports = ->
  userAgent = navigator.userAgent or navigator.vendor or window.opera
  if /windows phone/i.test(userAgent)
    return 'Windows Phone'
  if /android/i.test(userAgent)
    return 'Android'
  if /iPad|iPhone|iPod/.test(userAgent) and !window.MSStream
    return 'iOS'
  'unknown'
