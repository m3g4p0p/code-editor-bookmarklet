import { initMonaco } from './monaco'

const language = document.getElementById('language')
const insertBtn = document.getElementById('insert')
const closeBtn = document.getElementById('close')
const text = new URLSearchParams(window.location.search).get('text')

function showBookmarklet () {
  fetch('./dist/bookmarklet.js')
    .then(res => res.text())
    .then(text => {
      const code = document.createElement('code')
      code.textContent = `javascript:${encodeURIComponent(text)}`
      document.body.appendChild(code)
    })
    .catch(console.error)
}

closeBtn.addEventListener('click', () => {
  window.parent.postMessage({ type: 'editor.close' })
})

initMonaco().then(monaco => {
  const editor = monaco.editor.create(document.getElementById('editor'), {
    value: text,
    language: language.value
  })

  language.disabled = false
  insertBtn.disabled = false

  language.addEventListener('change', () => {
    monaco.editor.setModelLanguage(editor.getModel(), language.value)
  })

  insertBtn.addEventListener('click', () => {
    window.parent.postMessage({
      type: 'editor.insert',
      value: editor.getValue(),
      syntax: language.value
    })
  })

  window._editor = editor
})

if (window.parent === window) {
  showBookmarklet()
}
