export function loadScript (src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')

    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script)
  })
}

export function asyncRequire (deps) {
  return new Promise(resolve => require(deps, resolve))
}
