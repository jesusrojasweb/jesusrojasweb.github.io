function smoothScroll(target, duration) {
    window.scrollBy(0, -window.innerHeight)
    let targe = document.getElementById(target)
    let targetPosition = targe.getBoundingClientRect().top
    let startPosition = 0
    let distance = targetPosition - startPosition
    let startTime = null

    function animation(currenTime) {
      if (startTime === null) startTime = currenTime
      let timeElepsed = currenTime - startTime
      let run = ease(timeElepsed, startPosition, distance, duration)
      window.scrollTo(0, run)
      if (timeElepsed < duration) requestAnimationFrame(animation)
    }

    function ease(t, b, c, d) {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t + b
      t--
      return (-c / 2) * (t * (t - 2) - 1) + b
    }
       
    requestAnimationFrame(animation)
}