<svelte:options accessors={true} />

<script>
    export let DOMElement;
    export const name = "Hero";
    export const classname = "hero_div";
</script>

<svelte:head>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Ubuntu&family=Ubuntu+Mono&display=swap");
    </style>
</svelte:head>

<div bind:this={DOMElement} class="hero_div">
    <div class="left_hero">
        <h1 class="title greeting">Hi!</h1>
        <h1 class="title name">I'm Amine</h1>
        <p class="description">I can build stuff.</p>
    </div>
    <div class="right_hero">
        <div class="images">
            <img
                id="img1"
                src="./assets/Cone_hero.png"
                alt="random shape"
                height="auto"
            />
            <img
                id="img2"
                src="./assets/Torus_hero.png"
                alt="random shape"
                height="auto"
            />
            <img
                id="img3"
                src="./assets/Rock_hero.png"
                alt="random shape"
                height="auto"
            />
        </div>
    </div>
</div>

<style>
    .hero_div {
        margin: 0px;
        padding: 0px;
        display: flex;
        justify-content: space-between;
        background-color: #2d2d2d;
        color: #dddddd;
        height: 100%;
        width: 100%;
    }

    .left_hero {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        transform: translate(0px, -5vh);
        z-index: 10;
    }

    .right_hero {
        z-index: 9;
        width: 50vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .images {
        display: flex;
        flex-direction: column;
        align-items: center;
        object-fit: contain;
    }

    #img1 {
        width: 14vw;
        max-width: 16vw;
        transform: translate(5vw, 10vh);
    }

    #img2 {
        width: 16vw;
        max-width: 18vw;
        transform: translateX(-5vw);
    }

    #img3 {
        width: 16vw;
        max-width: 18vw;
        transform: translate(5vw, -10vh);
    }

    .title {
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

    @media (max-width: 480px) {
        .hero_div {
            flex-direction: column;
            align-items: center;
            justify-content: start;
        }

        .left_hero {
            text-align: center;
            align-items: center;
            transform: translate(0, 2vh);
        }

        .images {
            justify-content: center;
            align-items: center;
        }

        #img1 {
            max-width: 40vw;
            width: 30vw;
            transform: translate(5vw, 0vh);
        }

        #img2 {
            max-width: 40vw;
            width: 40vw;
            transform: translateX(-10vw);
        }

        #img3 {
            max-width: 40vw;
            width: 35vw;
            transform: translate(10vw, -2vh);
        }

        .title {
            font-size: 3em;
            display: flex;
        }

        .description {
            font-size: 2em;
        }
    }
</style>
