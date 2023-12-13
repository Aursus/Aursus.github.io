(() => {
    // 判斷是否為英文
    const isIncludeEN = item => {
      const key = '/en/'
      return item.includes(key)
    }
  
    // 建立 重新導向到不同語言的 url 
    window.loadFullPage = (url) => {
      window.location.href = url
    }
  
    // 重新導向 
    const eventFn = (elements, includeEN) => {
      elements.forEach(item => {
        if (!includeEN || !isIncludeEN(item.href)) {
          item.href = `javascript:loadFullPage('${item.href}');`
        }
      })
    }
  
    // 判斷目前是否為英文
    const nowIncludeEN = isIncludeEN(window.location.href)
  
    // 這邊記得改成你的 url
    const selector = nowIncludeEN
      ? document.querySelectorAll('a[href^="https://aursus.github.io"]')
      : document.querySelectorAll('a[href^="/en/"]')
  
    eventFn(selector, nowIncludeEN)
  })()