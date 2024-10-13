<script>
import { store } from '../../store.js';
import axios from 'axios';

export default {
    data() {
        return {
            store,
        }
    },
    
}
</script>

<template>

    <section v-for="project in store.project" :key="project.id">
        <h1>{{ project.name }}</h1>

        <button>
            <a :href="project.html_url" target="_blank">Vai alla repo</a>
        </button>

    </section>
</template>

<style lang="scss" scoped>
section {
    width: calc((80vw / 4) - 50px);
    height: 200px;
    margin: 20px 5px;
    background-color: rgb(106, 106, 255);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    h1 {
        margin-top: 5px;
    }
}
</style>