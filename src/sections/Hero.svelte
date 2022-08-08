<svelte:options accessors={true}/>
<script>

    export let DOMElement
    export const name = "Hero"
    export const classname = "hero_div"
</script>

<svelte:head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Ubuntu+Mono&display=swap');
    </style> 
</svelte:head>

<div bind:this={DOMElement} class="hero_div">
    <div class="left_hero">
        <h1 class="title">
            Hi!<br>
            I'm Amine
        </h1>
        <p class="description">I can build stuff.</p>
    </div>
    <div class="right_hero">
        <img id="img1" src="./assets/Cone_hero.png" alt="random shape" width="200" height="auto">
        <img id="img2" src="./assets/Torus_hero.png" alt="random shape" width="300" height="auto">
        <img id="img3" src="./assets/Rock_hero.png" alt="random shape" width="250" height="auto">
    </div>
    
</div>

<style>
    .hero_div{
        margin: 0px;
        padding: 0px;
        display: flex;
        justify-content: space-between;
        background-color: #2D2D2D;
        color: #DDDDDD;
        height: 100vh;
        width: 100%;
    }

    .left_hero{
        position: relative;
        top: 20vh;
    }

    .right_hero{
        position: relative;

    }
   
    #img1{
        position: absolute;
        top: 5vh ;
        right: 20vw;
    }

    #img2{
        position: absolute;
        top: 30vh;
        right: 25vw;

    }

    #img3{
        position: absolute;
        bottom: 5vh;
        right: 10vw;

    }

    .title{
        font-family: "Open Sans", sans-serif;
        margin: 0px 0px 0px 5vw;
        font-size: 6em;
        padding: 5px 0px 5px 0px;
    }

    .description {
        font-family: "League Spartan", monospace;
        margin: 0px 0px 0px 5vw;
        font-size: 2em;
        padding: 5px 0px 5px 0px;
    }


</style>
