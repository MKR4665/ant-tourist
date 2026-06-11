export function scrollToSectionById(sectionId, navSelector = '.figma-home-nav', offsetExtra = 8) {
  const href = sectionId.startsWith('#') ? sectionId : `#${sectionId}`
  const target = document.querySelector(href)
  if (!target) {
    return false
  }
  const navHeight = document.querySelector(navSelector)?.offsetHeight || 0
  const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - offsetExtra
  window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' })
  return true
}
