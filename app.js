const personaje = document.getElementById('personaje');
const rocas = document.querySelectorAll('#rocaUno img, #rocaDos img, #rocaTres img, #rocaCuatro img, #rocaCinco img');



let posicionX = 0;
let posicionY = 0;
let velocidad = 10;


document.addEventListener('keydown',(e)=>{
           let tecla = e.key;
           console.log(tecla);

         switch (tecla){
            case 'ArrowLeft':
                posicionX = posicionX - velocidad;
                personaje.style.left = `${posicionX}px`;
            break;

            case 'ArrowRight':

                posicionX = posicionX + velocidad;
                personaje.style.left = `${posicionX}px`;
                
            break;

            case 'ArrowUp':
                posicionY = posicionY - velocidad;
                personaje.style.top = `${posicionY}px`;
            break;

            case 'ArrowDown':
                posicionY = posicionY + velocidad;
                personaje.style.top = `${posicionY}px`;
            break;

         }

        //  rocas.forEach((roca) => {
        //     const rectRoca = roca.getBoundingClientRect();
        //     const rectPersonaje = personaje.getBoundingClientRect();
          
        //     if (
        //       rectRoca.left < rectPersonaje.right ||
        //       rectRoca.right > rectPersonaje.left ||
        //       rectRoca.top < rectPersonaje.bottom ||
        //       rectRoca.bottom > rectPersonaje.top
        //     ) {
        //       alert('Chocaste con una roca!');
        //     }
        //   });
         
          
         console.log(`${posicionX}px`);
         console.log(`${posicionY}px`);

         personaje.style.left = `${posicionX}px`;
         personaje.style.top = `${posicionY}px`;

        let choqueYabajo =`${posicionY}px` === '310px';
        let choqueYarriba = `${posicionY}px` === '-310px';
        let choqueXderecha =`${posicionX}px` === '460px';
        let choqueXizquierda =`${posicionX}px` === '-460px';

        if(choqueYabajo == true || choqueYarriba == true || choqueXderecha == true || choqueXizquierda == true){
            alert('Tocaste el limite !! Tu pierdes jajajaja');
            posicionX = 0;
            posicionY = 0;
            personaje.style.left = `${posicionX}px`;
            personaje.style.top = `${posicionY}px`;
        }


        
})



