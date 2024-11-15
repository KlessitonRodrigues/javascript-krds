// USE: cy.on('url:changed', () => cy.window().then(html.startDebug));
export const startDebug = (testWindow: Cypress.AUTWindow) => {
  const testDoc = testWindow.document;
  const debug = (ev: MouseEvent) => {
    console.clear();
    const target = ev.target as HTMLElement;
    target.style.border = '2px solid red';
    console.log('TAG:', target.nodeName);
    console.log('ID:', target.getAttribute('id'));
    console.log('NAME:', target.getAttribute('name'));
    console.log('TYPE:', target.getAttribute('type'));
    console.log('ROLE:', target.getAttribute('role'));
    console.log('HREF:', target.getAttribute('href'));
    console.log('CONTAINS:', target.innerText);
    console.log('CLASS:', target.getAttribute('class'));
    console.log('HTML:', target);
    console.log('PRESS 1 TO PAUSE');
    target.onmouseout = () => (target.style.border = '');
  };
  testDoc.onmouseover = debug;
  testDoc.onkeydown = ev => {
    if (ev.key !== '1') return;
    if (testDoc.onmouseover) testDoc.onmouseover = undefined;
    else testDoc.onmouseover = debug;
    console.log(testDoc.onmouseover ? 'STARTED' : 'PAUSED');
  };
};

