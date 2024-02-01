<svelte:options accessors={true} />

<script>
    export let DOMElement;
    export const name = "Languages";
    export const classname = "langs_div";
    import pythonImg from "../assets/python-plain-wordmark 1.png";
    import svelteImg from "../assets/svelte-plain-wordmark 1.png";
    import djangoImg from "../assets/django-plain-wordmark 1.png";
    import weblangs from "../assets/weblangs.svg";
    import goImg from "../assets/Golang.svg";
    import reactImg from "../assets/React.svg";
    import tsImg from "../assets/TS.svg";
</script>

<!-- Languages :  -->
<!---- HTML, CSS, JavaScript, Python, Go, SQL >

<!-- Frameworks and libraries :  -->
<!---- React, Svelte (Front-end)  |  Django, Golang (Backend) -->

<div bind:this={DOMElement} class="langs_div">
    <div class="langs">
        <img src={pythonImg} title="python" alt="python" />
        <img
            src={weblangs}
            title="web languages"
            alt="web languages (HTML, CSS, JS)"
        />
        <img src={svelteImg} title="svelte" alt="svelte" />
        <img src={djangoImg} title="django" alt="django" />
        <img src={goImg} title="go" alt="golang" />
        <img src={reactImg} title="react" alt="react.js" />
        <img src={tsImg} title="typescript" alt="typescript" />
    </div>

    <h1 class="title md:text-5xl text-3xl">Languages and frameworks I use</h1>
</div>

<style>
    .langs_div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: #212121;
        padding: 0px;
        margin: 0px;
        height: 100%;
        width: 100%;
    }
    .langs {
        display: flex;
        flex-direction: row;
        justify-content: center;
        column-gap: 5vw;
        row-gap: 5svh;
        align-items: center;
        flex-wrap: wrap;
    }

    .langs > img {
        max-width: 8em;
        max-height: 128px;
    }

    .title {
        color: #b8b8b8;
        text-align: center;
        padding-left: 2%;
        padding-right: 2%;
        font-family: "League Spartan", sans-serif;
    }

    @media (max-width: 480px) {
        .langs > img {
            max-width: 6em;
            min-width: 3em;
        }
    }
</style>
