interface PreviewIframeOptions {
  project: 'test',
  mountElementId: string
}

const IFRAME_URL = 'http://localhost:8080'

class PreviewIframe {


  init(options: PreviewIframeOptions) {
    const {project, mountElementId} = options
    if (!project || !mountElementId) {
      throw new TypeError('参数不全')
    }
    const iframe = document.createElement('iframe')
    iframe.id = 'lyx_test'
    iframe.src = IFRAME_URL + '?p=' + project
    const dom = document.getElementById(mountElementId)
    if (dom) {
      dom.appendChild(iframe)
      window.addEventListener('message', (e) => {
        // console.log('[info]:', e)
        if (e.origin === 'http://localhost:8080') {
          console.log('[info]:', e)
          console.log('---origin---', e.origin) //子页面URL，这里是http://b.index.com
            console.log('---source---', e.source) // 子页面window对象，全等于iframe.contentWindow
            console.log('---data---', e.data) //子页面发送的消息
        }

        if (e.origin === 'http://localhost:5173') {
          console.log(e)
        }
      })
    }
    // iframe.onload = function() {

    // }
  }
}

const previewIframe = new PreviewIframe()

export default previewIframe