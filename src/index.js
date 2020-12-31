import { initMonaco } from './monaco'

const languageSelect = document.getElementById('language')
const themeSelect = document.getElementById('theme')
const insertButton = document.getElementById('insert')
const closeButton = document.getElementById('close')
const params = new URLSearchParams(window.location.search)
const text = decodeURIComponent(params.get('text') || '')
const origin = params.get('origin') || '*'
const theme = params.get('theme')

function showInstructions () {
  const code = document.getElementById('code')

  fetch('./dist/bookmarklet.js')
    .then(res => res.text())
    .then(text => {
      code.textContent = `javascript:(function(){${encodeURIComponent(text)}})()`
      document.body.classList.add('show-sections')
    })
    .catch(console.error)
}

function postMessage (data) {
  window.parent.postMessage(data, origin)
}

closeButton.addEventListener('click', () => {
  postMessage({ type: 'editor.close' })
})

initMonaco().then(monaco => {
  const editor = monaco.editor.create(document.getElementById('editor'), {
    value: text,
    language: languageSelect.value,
    ...theme ? { theme } : null
  })

  languageSelect.disabled = false
  themeSelect.disabled = false
  themeSelect.value = theme || themeSelect.value
  insertButton.disabled = false

  languageSelect.addEventListener('change', () => {
    monaco.editor.setModelLanguage(
      editor.getModel(),
      languageSelect.value
    )
  })

  themeSelect.addEventListener('change', () => {
    monaco.editor.setTheme(themeSelect.value)

    postMessage({
      type: 'editor.theme',
      theme: themeSelect.value
    })
  })

  insertButton.addEventListener('click', () => {
    postMessage({
      type: 'editor.insert',
      value: editor.getValue(),
      syntax: languageSelect.value
    })
  })

  window._editor = editor
})

if (window.parent === window) {
  showInstructions()
}
