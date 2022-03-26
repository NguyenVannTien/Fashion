const repSlide = () => {
    const btn__rep = document.querySelectorAll('.grid__column-8-images-irt_replies');
    const click__rep = document.querySelectorAll('.click__rep');
    // btn__rep[0].addEventListener('click',() => {
    //     //toggle Header
    //     click__rep[0].classList.toggle('rep-active');
    // });
    // btn__rep[1].addEventListener('click',() => {
    //     //toggle Header
    //     click__rep[1].classList.toggle('rep-active');
    // });
    // btn__rep[2].addEventListener('click',() => {
    //     //toggle Header
    //     click__rep[2].classList.toggle('rep-active');
    // });

    for(let i=0; i<btn__rep.length; i++)
    {
        btn__rep[i].addEventListener('click',() => {
            click__rep[i].classList.toggle('rep-active');
        }); 
    }
}

repSlide();

const likeSlide = () => {
    const btn__like = document.querySelectorAll('.grid__column-8-images-irt_link');
    const click__like = document.querySelectorAll('.btn__liked');

    
    for(let i=0; i<btn__like.length; i++)
    {
        btn__like[i].addEventListener('click',() => {
            btn__like[i].style.display = "none"
            click__like[i].style.display = "block"
        }); 
        click__like[i].addEventListener('click',() => {
            btn__like[i].style.display = "block"
            click__like[i].style.display = "none"
        }); 
    }
}

likeSlide();

const modalSlide = () => {
    const btn__sub = document.querySelectorAll('.section__position-btn');
    const click__close = document.querySelectorAll('.btn__close');
    const btn_confirm = document.querySelectorAll('.l4__follow-btn')
    const show_modal = document.querySelectorAll('.modal');

    for(let i=0; i<btn__sub.length; i++)
    {
        btn__sub[i].addEventListener('click',() => {
            show_modal[i].style.display = 'block'
            console.log(btn__sub)
            
        }); 
        click__close[i].addEventListener('click',() =>{
            show_modal[i].style.display = 'none'
        });
        btn_confirm[i].addEventListener('click',() =>{
            show_modal[i].style.display = 'none'
           function sayHi() {
                alert('Hi bạn ghé chơi !!!!!');
            }
            setTimeout(sayHi, 1000);
        }); 
    }   
}

modalSlide();



