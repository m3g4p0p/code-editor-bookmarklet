import { loadScript } from './util'

if (window._createEditorIframe) {
  window._createEditorIframe()
} else {
  loadScript(BASE_URL + 'dist/loader.js').then(() => {
    window._createEditorIframe()
  })
}
