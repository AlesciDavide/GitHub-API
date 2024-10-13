<script>
import { store } from '../../store.js';
import axios from 'axios';
import SingleProject from '../homepage/SingleProject.vue';

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        SingleProject,
    },
    methods: {
        Projects() {

            if(this.store.search.length > 0){

                axios.get(`https://api.github.com/search/repositories?q=${this.store.search}`)
                    .then((response) => {
                        console.log(response.data.items);
                        this.store.project = (response.data.items);
                    })
                    .catch((err) => {
                        console.error('Errore nella richiesta:', err);
                    });
            }


        }
    },
    mounted() {
        this.Projects();
    }
}
</script>

<template>
    <div>
        <input type="text" placeholder="Cerca una repo" v-model="store.search" @keyup.enter="Projects">
        <button @click="Projects"><i class="fa fa-search"></i></button>

    </div>
    <article v-if="store.search.length > 0" >
        <SingleProject />

    </article>
</template>

<style lang="scss" scoped>
article {
    width: 80vw;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    section {
        width: calc(80vw / 5);
        gap: 20px;
        background-color: aqua;
    }
}

div {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        width: 100%;
        max-width: 220px;
        height: 45px;
        padding: 12px;
        border-radius: 12px;
        border: 1.5px solid lightgrey;
        outline: none;
        transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        box-shadow: 0px 0px 20px -18px;
    }

    input:hover {
        border: 2px solid lightgrey;
        box-shadow: 0px 0px 20px -17px;
    }

    input:active {
        transform: scale(0.95);
    }

    input:focus {
        border: 2px solid grey;
    }

    /* bottone */
    button {
        width: 40px;
        max-width: 220px;
        height: 40px;
        padding: 12px;
        border-radius: 12px;
        border: 1.5px solid lightgrey;
        outline: none;
        transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        box-shadow: 0px 0px 20px -18px;
    }

    button:hover {
        border: 2px solid lightgrey;
        box-shadow: 0px 0px 20px -17px;
    }

    button:active {
        transform: scale(0.95);
    }

    button:focus {
        border: 2px solid grey;
    }
}
</style>