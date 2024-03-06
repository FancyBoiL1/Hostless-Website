function createIframe(dataUrl){
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'https://cdn.jsdelivr.net/gh/FancyBoiL1/Completely-Dynamic-Website@master/loader.css';
  /* CSS to remove annoying iframe border.*/
  var iframe = document.createElement('iframe');   
  iframe.sandbox.add('allow-top-navigation');
  iframe.sandbox.add('allow-same-origin');
  iframe.sandbox.add('allow-scripts');
  iframe.sandbox.add('allow-popups');
  iframe.sandbox.add('allow-popups-to-escape-sandbox');
  iframe.sandbox.add('allow-forms');
  iframe.sandbox.add('allow-modals');
  iframe.sandbox.add('allow-orientation-lock');
  iframe.sandbox.add('allow-pointer-lock');
  iframe.sandbox.add('allow-presentation');
  iframe.sandbox.add('allow-pointer-lock');
  iframe.src = dataUrl;
  iframe.allowfullscreen = 'true';
  iframe.allowtransparency='true';
  document.getElementsByTagName("head")[0].appendChild(css);
  document.getElementsByTagName("body")[0].appendChild(iframe);
  window.setInterval(() =>{
    if(iframe.style.width !== window.innerWidth){iframe.style.width = window.innerWidth;}
    if(iframe.style.height !== window.innerHeight){iframe.style.height = window.innerHeight;}
  }, 20);
}
// Used to load the actual page and allow navigation. Without using an iframe, browsers like mozilla firefox and chrome will block the unsafe use of data urls.

function loadJScript(location){
  let script = document.createElement('script');
  script.src = location;
  document.body.appendChild(script);
}
// Used to load scripts from internet sources in a data url. Since there is no local filepath normally <script src='THING'> would be used.
// However, when importing HTML using fetch later on, scripts will not load properly. Thus, this a required step.
