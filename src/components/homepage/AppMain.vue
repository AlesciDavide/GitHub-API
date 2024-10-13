<script>
import {store} from '../../store.js';

export default{
    data() {
        return{
            store,
        }
    },
    
}
</script>

<template>
    <section>
        <article>
            <h1>Cerca Progetti su GitHub</h1>
            <button><router-link to="/project">Vai!!</router-link></button>
        </article>
    </section>
</template>

<style lang="scss" scoped>
    section{
        width: 40vw;
        height: 200px;
        margin: 1rem auto;
        background-color: rgb(100, 100, 255);
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
            article{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: white;
            }
    }
    button{
        border-radius: 20px;
        background-color: white;
        border: 1px solid rgb(223, 224, 255);
        margin: 1rem 0;
        width: 100px;
    }
</style>