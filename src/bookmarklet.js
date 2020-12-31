function createIframe () {
  const { activeElement } = document
  const { selectionStart, value } = activeElement || {}
  const text = window.getSelection().toString()
  const iframe = document.createElement('iframe')
  const params = new URLSearchParams()

  function destroy () {
    document.body.removeChild(iframe)
    window.removeEventListener('message', handleMessage)
  }

  function insert (data) {
    activeElement.value = (
      value.slice(0, selectionStart) +
      '```' + data.syntax + '\n' +
      data.value +
      '\n```\n' +
      value.slice(selectionStart)
    )
  }

  function handleMessage (event) {
    switch (event.data.type) {
      case 'editor.close':
        destroy()
        break

      case 'editor.insert':
        destroy()

        if (activeElement) {
          insert(event.data)
        }

        break
    }
  }

  params.append('text', encodeURIComponent(text))
  params.append('origin', window.location.origin)
  iframe.src = IFRAME_URL + '?' + params.toString()

  Object.assign(iframe.style, {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    top: '0',
    left: '0',
    zIndex: '1000'
  })

  document.body.appendChild(iframe)
  window.addEventListener('message', handleMessage)
}

window.createIframe = createIframe
createIframe()
