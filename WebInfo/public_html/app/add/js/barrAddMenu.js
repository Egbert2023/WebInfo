document.addEventListener('keyup', function (event) { 
/*
 *	rechts: &#x2BC8;
 *	unten: 	&#x2BC6;
*/
    if (event.keyCode === 9) {
        const collection = document.getElementsByClassName("eamenbutton");
        
        // check for tab taste
        if(collection.length === 0) {
            
        // Start on menu for scan the application
        //const collection = document.getElementsByClassName("jtpl-navigation");
            const collection = document.getElementsByClassName("navbar");
            if(collection) {
                collection[0].focus();
                collection[0].scrollIntoView({behavior: 'smooth'});
            }                
            
            function dropdownExtension () {
                const submenus = document.querySelectorAll('nav li > ul');
                for(let submenu of submenus) {
                    submenu.classList.add('submenu');
                    submenu.insertAdjacentHTML('beforebegin', `
                        <button class="eamenbutton" aria-expanded="false">
                            <span class="visually-hidden">Untermenü auf- und zuklappen</span>
                        </button>
                    `);
                };

                function hideSubmenu() {
                    const ele = document.getElementsByClassName("eavisible");
                    for(let el of ele) {
                        el.classList.remove('eavisible');
                    };	            
                    // aria-expanded
                    const elex = document.querySelectorAll('[aria-expanded="true"]');
                    for(let elx of elex) {
                        elx.setAttribute("aria-expanded", "false");
                    };	            
                }
                
                document.documentElement.addEventListener('click', event => {
                    if (event.target.tagName === 'BUTTON' && event.target.hasAttribute('aria-expanded')) {
                        event.target.setAttribute('aria-expanded', event.target.getAttribute('aria-expanded') !== 'true');
                        let scl = event.target.nextElementSibling.classList;
                        scl.toggle('eavisible');
                    }
                    if (event.target.classList.contains('hoverdown-link')) {
                        hideSubmenu();
                    } 
                });

                document.addEventListener('keyup', (event) => {
                    if (event.key === 'Escape')  {
                        hideSubmenu();
                    }
                    /*if ((event.key === 'Tab') && (!event.target.closest('.visible')) ) {*/
                    if ((event.key === 'Tab') && (!event.target.closest('.eavisible')) ) {
                        hideSubmenu();
                    }            
                });
            };

            const cssRules = `
            nav > ul {
              list-style:none;
                    // Safari hack, see https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html
                    list-style: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E");  
            } 

            .visually-hidden,
            [visually-hidden="true"] {        
                padding: 0 !important;
                border: 0 !important;
                height: 0 !important;
                width: 0 !important;
                overflow: hidden !important;
            }

            .eavisible {
                display: block;
                position: static;
                top: 42px;
            }

            .eamenbutton {
                position: absolute;
                left: -10000px;
                top: -25px;
                display: block;
                padding: 0;
                border: 0;
                height: 10px;
                width: 10px;
                margin: 0;
                overflow: hidden !important;
                background-color: --background-color;
                float: left;
                z-index: 0;
            }
            .eamenbutton:focus { 
                position: static; 
                background-color: --menubutton-color
            }

            :root {
                --background-color: #fff;
                --menubutton-color: #123;
                /*
                --accent1-color: #3e474c;
                --accent2-color: darkred;	
                --text-color: #F7F8F8;
                */
            }`;

            function barrMenuStart() {
                dropdownExtension();
                const stylesheet = document.createElement('style');
                stylesheet.textContent = cssRules;
                document.querySelector('html > head').appendChild(stylesheet);
            }; 

            barrMenuStart();
        }
    }    
});