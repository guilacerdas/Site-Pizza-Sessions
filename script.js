const btn_menu = document.getElementById('btn_menu')

function click() {
    const menu = document.getElementById('navmenu')
    if (menu.classList.contains('hidden')) {
       menu.classList.remove('hidden')
       menu.classList.remove('h-0')
       menu.classList.add('h-screen')
  

   } else {
       menu.classList.remove('h-screen')
       menu.classList.add('hidden')
       menu.classList.add('h-0')
   }

        
    

}

btn_menu?.addEventListener('click', click)