document.querySelector('.header form').addEventListener('submit', (event) => {
    event.preventDefault()
});

const notes = document.querySelector('.notes');

function noteStyle(btn, prop, value) {
    switch (prop) {
        case 'align-items':
            document.querySelector(btn).addEventListener('click', () => {
                notes.style.alignItems = value
            })
            break;
        case 'justify-content':
            document.querySelector(btn).addEventListener('click', () => {
                notes.style.justifyContent = value
            })
            break;
        case 'flex-direction':
            document.querySelector(btn).addEventListener('click', () => {
                notes.style.flexDirection = value
            })
            break;
        case 'flex-wrap':
            document.querySelector(btn).addEventListener('click', () => {
                notes.style.flexWrap = value
            })
            break;
    }
}

// align-items
noteStyle('.btn-align-flexstart', 'align-items', 'flex-start');
noteStyle('.btn-align-flexend', 'align-items', 'flex-end');
noteStyle('.btn-align-center', 'align-items', 'center');
// justify-content
noteStyle('.btn-just-right', 'justify-content', 'right');
noteStyle('.btn-just-left', 'justify-content', 'left');
noteStyle('.btn-just-center', 'justify-content', 'center');
// flex-diretion
noteStyle('.btn-align-row', 'flex-direction', 'row');
noteStyle('.btn-align-column', 'flex-direction', 'column');
// flex-wrap
noteStyle('.btn-wrap', 'flex-wrap', 'wrap');
noteStyle('.btn-nowrap', 'flex-wrap', 'nowrap');