<script>
import {store} from '../store.js';

export default{
    data() {
        return{
            store,
        }
    },

}
</script>

<template>
    <header>
        <nav>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>

                    <router-link to="/project">Search Project</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header{
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: aqua;
        nav{
            ul{
                display: flex;
                justify-content: center;
                flex-direction: row;
                li{
                    background-color: white;
                    color: black;
                    padding: .3rem;
                    border-radius: 10px;
                    margin: 0 .4rem;
                }
            }
        }
}

  
</style>