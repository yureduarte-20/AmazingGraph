var links = document.getElementById('links')

function showBar ()  {
    if( links.className == 'links' ){
        links.className += ' active'
    } else {
        links.className  = 'links'
    }
}