/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!************************!*\
  !*** ./bookmarklet.js ***!
  \************************/
eval("function createIframe () {\n  const { activeElement } = document\n  const { selectionStart, value } = activeElement || {}\n  const text = window.getSelection().toString()\n  const iframe = document.createElement('iframe')\n\n  function destroy () {\n    document.body.removeChild(iframe)\n    window.removeEventListener('message', handleMessage)\n  }\n\n  function insert (data) {\n    activeElement.value = (\n      value.slice(0, selectionStart) +\n      '```' + data.syntax + '\\n' +\n      data.value +\n      '\\n```\\n' +\n      value.slice(selectionStart)\n    )\n  }\n\n  function handleMessage (event) {\n    switch (event.data.type) {\n      case 'editor.close':\n        destroy()\n        break\n\n      case 'editor.insert':\n        destroy()\n\n        if (activeElement) {\n          insert(event.data)\n        }\n\n        break\n    }\n  }\n\n  iframe.src = 'http://127.0.0.1:5500/index.html?text=' + encodeURIComponent(text)\n\n  Object.assign(iframe.style, {\n    position: 'fixed',\n    width: '100vw',\n    height: '100vh',\n    top: '0',\n    left: '0',\n    zIndex: '1000'\n  })\n\n  document.body.appendChild(iframe)\n  window.addEventListener('message', handleMessage)\n}\n\nwindow.createIframe = createIframe\n\n\n//# sourceURL=webpack:///./bookmarklet.js?");
/******/ })()
;