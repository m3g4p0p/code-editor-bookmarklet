import { initMonaco } from './monaco'

const language = document.getElementById('language')
const insertBtn = document.getElementById('insert')
const closeBtn = document.getElementById('close')
const params = new URLSearchParams(window.location.search)
const text = params.get('text')
const origin = params.get('origin')

function showInstructions () {
  const instructions = document.getElementById('instructions')
  const code = document.getElementById('code')

  fetch('./dist/bookmarklet.js')
    .then(res => res.text())
    .then(text => {
      instructions.hidden = false
      code.textContent = `javascript:(function(){${encodeURIComponent(text)}})()`
    })
    .catch(console.error)
}

function postMessage (data) {
  window.parent.postMessage(data, origin)
}

closeBtn.addEventListener('click', () => {
  postMessage({ type: 'editor.close' })
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
    postMessage({
      type: 'editor.insert',
      value: editor.getValue(),
      syntax: language.value
    })
  })

  window._editor = editor
})

if (window.parent === window) {
  showInstructions()
}
