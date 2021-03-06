let platform = navigator.platform.toLowerCase()
let ua = navigator.userAgent.toLowerCase()
let UA = ua.match(/(opera|ie|firefox|chrome|version)[s/:]([wd.]+)?.*?(safari|version[s/:]([wd.]+)|$)/) || [null, 'unknown', 0]
let mode = UA[1] === 'ie' && document.documentMode
let browser = {
  name: UA[1] === 'version' ? UA[3] : UA[1],
  version: mode || parseFloat(UA[1] === 'opera' && UA[4] ? UA[4] : UA[2]),
  platform: {
    name: ua.match(/ip(?:ad|od|hone)/) ? 'ios' : (ua.match(/(?:webos|android)/) || platform.match(/mac|win|linux/) || ['other'])[0]
  }
}

browser[browser.name] = true

browser[browser.name + parseInt(browser.version, 10)] = true

browser.platform[browser.platform.name] = true

export default browser
