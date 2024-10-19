let layerShadow = document.getElementById('layshad');
let insetShadow = document.getElementById('inshad');
let neonGlow = document.getElementById('neon');
let threeDShadow = document.getElementById('threed');
let hoverShadow = document.getElementById('hovershad');
let frostedGlass = document.getElementById('frosted');
let softShadow = document.getElementById('soft');
let longShadow = document.getElementById('long');
let boxy = document.getElementById('boxy');
let output = document.getElementById('output');
let curled = document.getElementById('curled');
let gradient = document.getElementById('gradient');

layerShadow.addEventListener('click', showLayerShadow);
insetShadow.addEventListener('click', showInsetShadow);
neonGlow.addEventListener('click', showNeonGlow);
threeDShadow.addEventListener('click', showThreeDShadow);
hoverShadow.addEventListener('mouseenter', showHoverShadow);
hoverShadow.addEventListener('mouseleave', hideHoverShadow);
frostedGlass.addEventListener('click', showFrostedGlass);
softShadow.addEventListener('click', showSoftShadow);
longShadow.addEventListener('click', showLongShadow);
gradient.addEventListener('click', showGradientShadow);

// Helper function to remove all shadow-related classes
function removeShadowClasses(element) {
   element.classList.forEach(className => {
      if (className.includes('-shadow')) {
         element.classList.remove(className);
      }
   });
   element.innerHTML = '';
   element.style.border = '0';
   element.style.background = '';
   element.style.boxShadow = '';
   element.classList.remove('neon-glow');
   output.innerHTML = ''
}
function showLayerShadow(){
   removeShadowClasses(boxy);
   boxy.classList.add('layered-shadow');
   output.innerHTML = '<p>.layered-shadow {<br />&nbsp;&nbsp;&nbsp;&nbsp; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2),<br />&nbsp;&nbsp;&nbsp;&nbsp;4px 4px 10px rgba(0, 0, 0, 0.15),<br />&nbsp;&nbsp;&nbsp;&nbsp;6px 6px 15px rgba(0, 0, 0, 0.1);<br />}</p>';
}
function showInsetShadow(){
   removeShadowClasses(boxy);
   boxy.classList.add('inset-shadow');
   output.innerHTML = '.inset-shadow {<br />&nbsp;&nbsp;&nbsp;&nbsp;box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.3);<br />&nbsp;&nbsp;&nbsp;&nbsp;}';
}
function showNeonGlow(){
   removeShadowClasses(boxy);
   boxy.classList.add('neon-glow');
   output.innerHTML = '.neon-glow {<br />&nbsp;&nbsp;&nbsp;&nbsp;box-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc, 0 0 30px #00ffcc, 0 0 40px #00ffcc;<br />&nbsp;&nbsp;&nbsp;&nbsp;}';
}
function showThreeDShadow(){
   removeShadowClasses(boxy);
   boxy.classList.add('threed-shadow')
   output.innerHTML = '.threed-shadow {<br />&nbsp;&nbsp;&nbsp;&nbsp;box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(0, 0, 0, 0.1);<br />&nbsp;&nbsp;&nbsp;&nbsp;}'
}
function showHoverShadow(){
   removeShadowClasses(boxy);
   boxy.style.boxShadow = '10px 10px 20px rgba(0, 0, 0, 0.5)';
   output.innerHTML = '.hover-shadow {<br />&nbsp;&nbsp;&nbsp;&nbsp;transition: box-shadow 0.3s ease;<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />.hover-shadow:hover {<br />&nbsp;&nbsp;&nbsp;&nbsp;box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);<br />&nbsp;&nbsp;&nbsp;&nbsp;}'
}
function hideHoverShadow(){
   removeShadowClasses(boxy);
   boxy.style.removeProperty('box-shadow');
   output.innerHTML = '';
}
function showFrostedGlass(){
   removeShadowClasses(boxy);
   boxy.style.removeProperty('box-shadow');
   boxy.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
   boxy.style.background = 'rgba(255, 255, 255, 0.2)';
   boxy.style.border = '1px solid rgba(255, 255, 255, 0.2';
   boxy.innerHTML = '<div style="padding: 1rem; font-family: sans-serif; font-size: 4rem; width: fit-content; margin: 0 auto; position: absolute; left: 0; top: 0; height: 15vh; width: 15vh; filter: blur(3px)">HI</div>';
   output.innerHTML = '.frosted-glass {<br />&nbsp;&nbsp;&nbsp;&nbsp;background: rgba(255, 255, 255, 0.2);<br />&nbsp;&nbsp;&nbsp;&nbsp;backdrop-filter: blur(10px);<br />&nbsp;&nbsp;&nbsp;&nbsp;box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);<br />&nbsp;&nbsp;&nbsp;&nbsp;border: 1px solid rgba(255, 255, 255, 0.2)<br />}';
}
function showSoftShadow(){
   removeShadowClasses(boxy);
   boxy.classList.add('soft-shadow');
   output.innerHTML = '.soft-shadow {<br />&nbsp;&nbsp;&nbsp;&nbsp;box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);<br />&nbsp;&nbsp;&nbsp;&nbsp;}';
}

function showLongShadow(){
   removeShadowClasses(boxy);
   boxy.classList.add('long-shadow');
   boxy.style.border = '1px solid black';
   output.innerHTML = '.long-shadow {<br />&nbsp;&nbsp;&nbsp;&nbsp;box-shadow: #999 1px 1px,<br />&nbsp;&nbsp;&nbsp;&nbsp; #999 2px 2px,<br />&nbsp;&nbsp;&nbsp;&nbsp; #999 3px 3px,<br />&nbsp;&nbsp;&nbsp;&nbsp; #999 4px 4px,<br />&nbsp;&nbsp;&nbsp;&nbsp; #999 5px 5px,<br />&nbsp;&nbsp;&nbsp;&nbsp; #999 6px 6px,<br />&nbsp;&nbsp;&nbsp;&nbsp; #999 7px 7px,<br />&nbsp;&nbsp;&nbsp;&nbsp; #999 8px 8px,<br />&nbsp;&nbsp;&nbsp;&nbsp; #999 9px 9px,<br />&nbsp;&nbsp;&nbsp;&nbsp; #999 10px 10px;<br />&nbsp;&nbsp;&nbsp;&nbsp;}';
}

function showGradientShadow(){
   removeShadowClasses(boxy);
   console.log('Gradient clicked');
   boxy.classList.add('gradient-shadow');
   output.innerHTML = `
  .gradient-shadow { opacity: 1; } <br /><br />
  .gradient-shadow::before { <br />
  &nbsp;&nbsp;&nbsp;&nbsp;content: ''; <br />
  &nbsp;&nbsp;&nbsp;&nbsp;z-index: -10; <br />
  &nbsp;&nbsp;&nbsp;&nbsp;position: absolute; <br />
  &nbsp;&nbsp;&nbsp;&nbsp;top: 0; <br />
  &nbsp;&nbsp;&nbsp;&nbsp;left: 0; <br />
  &nbsp;&nbsp;&nbsp;&nbsp;width: 100%; <br />
  &nbsp;&nbsp;&nbsp;&nbsp;height: 100%; <br />
  &nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.7)); <br />
  &nbsp;&nbsp;&nbsp;&nbsp;transform: translateY(10px); <br />
  &nbsp;&nbsp;&nbsp;&nbsp;filter: blur(10px); <br />
}`;
}
