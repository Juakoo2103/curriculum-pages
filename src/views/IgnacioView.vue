<template>
    <div class="container">
        <h1 class="text-center">
            Ignacio Jara
        </h1>
    <hr>
    <div class="perfil container m-2 text-center">
        <img src="@/assets/basura.jpg" alt="foto" width="280px" height="350px">
    </div>
    <section class="container m-1">
        <div class="descripcion m-1">
            <h3 class="text-center">Sobre mi</h3>
            <p class="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo vitae nihil, voluptas molestias blanditiis similique debitis ea officiis praesentium commodi totam illum vel qui tempora, ipsam officia. Ex, saepe consequuntur.
            </p>
            <br>
            <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reprehenderit quam id repellendus a alias autem unde eos cum facere est laborum, repellat dolorum ab consequuntur voluptatem nihil ipsum ratione.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem deserunt repellendus, optio magni voluptatem suscipit quibusdam assumenda! Dicta culpa exercitationem iure nostrum voluptatem voluptate fuga, perferendis fugit adipisci vitae!
            </p>
        </div>
        <hr>
        <div class="redes m-1 container">
            <h2 class="text-center">
                Redes sociales
            </h2>
            <div class="row container">
                <div class="col-3">
                    <a :href="{FB}">Facebook</a>
                </div>
                <div class="col-3">
                    <a :href="{instagram}">Instagram</a>
                </div>
                <div class="col-3">
                    <a :href="{GH}">GitHub</a>
                </div>
                <div class="col-3">
                    <a :href="{LKDN}">Linkdin</a>
                </div>
            </div>
        </div>
        <hr>
        <div class="experiencias container m-">
            <h3 class="text-center">
                Experiencia laboral
            </h3>
                <ul>
                    <li>Llegue</li>
                    <li>Tarde</li>
                    <li>Sorry</li>
                    <li>Gente</li>
                    <li>>_<</li>
                </ul>
        </div>
    </section>    
</div>
</template>
<script>
export default {
    name: 'Ignacio',
    data(){
        return{
            FB: 'https://www.facebook.com/billieeilish',
            LKDN: 'https://cl.linkedin.com/',
            instagram: 'https://www.instagram.com/selenagomez/',
            GH: 'https://github.com/igykun'
        }
    }
}
</script>
<style scoped>
    a{
        color: inherit;
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
</style>