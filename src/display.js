function makeButtonsClicable() {
    let btns = Array.from(document.querySelectorAll('li'));
    btns[0].addEventListener('click', displayHome);
    btns[1].addEventListener('click', displayMenu);
    btns[2].addEventListener('click', displayContact);
}

function buildTopBar() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    let topWrapper = document.createElement('div');
    topWrapper.id = 'top-wrapper';
    content.appendChild(topWrapper);

    let header = document.createElement('header');
    header.classList.add('section-background');
    topWrapper.appendChild(header);

    let title = document.createElement('h1');
    title.classList.add('no-margin');
    title.innerText = "Hylian's Restaurant";
    header.appendChild(title);

    let subtext = document.createElement('h5');
    subtext.classList.add('no-margin');
    subtext.innerText = "Just throw it into the pot!";
    header.appendChild(subtext);

    let nav = document.createElement('nav');
    nav.classList.add('section-background');
    topWrapper.appendChild(nav);

    let borderLine = document.createElement('div');
    borderLine.classList.add('border-line');
    nav.appendChild(borderLine);

    let list = document.createElement('ul');
    borderLine.appendChild(list);

    let homeLi = document.createElement('li')
    homeLi.innerText = 'Home';
    list.appendChild(homeLi);

    let menuLi = document.createElement('li')
    menuLi.innerText = 'Menu';
    list.appendChild(menuLi);

    let contactLi = document.createElement('li')
    contactLi.innerText = 'Contact';
    list.appendChild(contactLi);
}

function buildFooter() {
    let footer = document.createElement('footer');
    content.appendChild(footer);
    let footerP = document.createElement('p');
    footerP.classList.add('no-margin');
    footerP.innerText = 'made by aleksishere';
    footer.appendChild(footerP);

    makeButtonsClicable();
}

function displayHome() {

    buildTopBar();

    const textArr = [
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis itaque nostrum atque temporibus. Autem perspiciatis tenetur quaerat, deleniti libero, voluptates fuga accusantium fugiat expedita, explicabo commodi ex eligendi non eaque.',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus rerum eum maxime, distinctio illo alias reprehenderit voluptates saepe doloribus similique laudantium illum corrupti laborum possimus est quasi nisi minus sapiente.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus repellat molestiae corporis dicta laudantium veritatis veniam similique. Quasi consequatur, non, fugiat beatae sed quo repellendus sequi magnam ea maxime quod!'
    ];

    let article = document.createElement('article');
    content.appendChild(article);

    for (let index = 0; index < 3; index++) {
        let tab = document.createElement('div');
        tab.classList.add('tab');
        article.appendChild(tab);

        let tabText = document.createElement('div');
        tabText.classList.add('tab-text');
        tabText.innerText = textArr[index];
        tab.appendChild(tabText);

        let tabImg = document.createElement('div');
        tabImg.classList.add('tab-img');
        tab.appendChild(tabImg);
    }
    buildFooter();
}

function displayMenu() {

    const menu = [
        ['Mushroom Skewer','Steamed Fruit','Buttered Stambulb','Deep-Fried Bird Roast'],
        ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos omnis alias veniam itaque accusantium vitae tempore quos officia voluptate corrupti quas, eveniet eum doloribus, amet ratione? In optio architecto iure.',
         'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, nemo odio dolores aperiam corrupti incidunt et obcaecati magni error ad, eius saepe tenetur porro enim reiciendis placeat! Porro, nisi non?',
         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae atque tempore dicta cum laudantium, asperiores, ratione unde facere quas ea error laboriosam officiis dolor placeat repudiandae necessitatibus mollitia earum eius!',
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere doloremque ipsam, consequatur asperiores quasi aspernatur odit minima assumenda, in voluptate repudiandae voluptates magni eligendi ea, inventore labore optio veniam?'
        ],
        ['https://www.zeldadungeon.net/wiki/images/1/1d/Mushroom_Skewer_-_TotK_icon.png',
         'https://www.zeldadungeon.net/wiki/images/9/93/Steamed_Fruit_-_TotK_icon.png',
         'https://www.zeldadungeon.net/wiki/images/8/82/Buttered_Stambulb_-_TotK_icon.png',
         'https://www.zeldadungeon.net/wiki/images/5/57/Deep-Fried_Bird_Roast_-_TotK_icon.png',
        ],
    ];

    buildTopBar();

    let article = document.createElement('article');
    content.appendChild(article);

    for (let index = 0; index < menu[0].length; index++) {
        let menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        article.appendChild(menuItem);

        let menuitemTextWrapper = document.createElement('div');
        menuitemTextWrapper.classList.add('menu-item-text-wrapper');
        menuItem.appendChild(menuitemTextWrapper);

        let menuTitleParagraph = document.createElement('p');
        menuTitleParagraph.innerText = menu[0][index];
        menuitemTextWrapper.appendChild(menuTitleParagraph);
        
        let menuSpan = document.createElement('span');
        menuSpan.innerText = menu[1][index];
        menuitemTextWrapper.appendChild(menuSpan);

        let imgWrapper = document.createElement('div');
        imgWrapper.classList.add('img-wrapper');
        menuItem.appendChild(imgWrapper);

        let imgMenu = document.createElement('img');
        imgMenu.setAttribute('src', menu[2][index]);
        imgWrapper.appendChild(imgMenu);
    }

    buildFooter();
}

function displayContact() {
    buildTopBar();

    const contact = [
        ['Hey!', 'Thanks!'],
        ['I just want to thank zeldawiki.wiki, zeldadungeon.net, Hylia Serif team and The Odin Project community! And quick reminder that all characters, images are property of Nintendo.',
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum possimus maxime repellat molestiae cumque nam eligendi cum harum ea tempore, magnam quae sit amet totam, corporis aut odit obcaecati.',
        ],
        ['https://cdn.wikimg.net/en/zeldawiki/images/thumb/6/6f/ST_Princess_Zelda_Artwork.png/443px-ST_Princess_Zelda_Artwork.png',
         'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/d/de/ST_Link_Artwork.png',
        ],
    ]

    let article = document.createElement('article');
    content.appendChild(article);

    for (let index = 0; index < contact[0].length; index++) {
        let contactItem = document.createElement('div');
        contactItem.classList.add('contact-item');
        article.appendChild(contactItem);
    
        let textContact = document.createElement('div');   
        contactItem.appendChild(textContact);

        let textContactHeader = document.createElement('p');
        textContactHeader.classList.add('no-margin');
        textContactHeader.innerText = contact[0][index];
        textContact.appendChild(textContactHeader);

        let textContactText = document.createElement('p');
        textContactText.classList.add('no-margin');
        textContactText.innerText = contact[1][index];
        textContact.appendChild(textContactText);

        let imgWrapper = document.createElement('div');
        contactItem.appendChild(imgWrapper);

        let img = document.createElement('img');
        img.setAttribute('src', contact[2][index]);
        imgWrapper.appendChild(img);
    }

    buildFooter();
}

export {displayHome,displayMenu, displayContact};