import { loadScript, asyncRequire } from './util'

const CDN_BASE = 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.21.2/min'

export async function initMonaco () {
  await loadScript(`${CDN_BASE}/vs/loader.min.js`)
  require.config({ paths: { vs: `${CDN_BASE}/vs` } })

  window.MonacoEnvironment = {
    getWorkerUrl: function (workerId, label) {
      return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
        self.MonacoEnvironment = {
          baseUrl: '${CDN_BASE}'
        };
        importScripts('${CDN_BASE}/vs/base/worker/workerMain.js');`
      )}`
    }
  }

  await asyncRequire(['vs/editor/editor.main'])
  return window.monaco
}
