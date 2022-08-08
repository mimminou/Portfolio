<!-- TOOLS : Windows, Linux, Git, VSCode, Vim (NeoVim), Android Studio, JetBrains IDEs, Figma... -->
<svelte:options accessors={true}/>
<script>
    import LangCard from "../components/Lang-card.svelte";
    
    let pythonSVG = ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"]
    let javaSVG = ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"]
    let webSVG = ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
    , "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-plain-wordmark.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"] 
    let imgSource = "./assets/"
    export let DOMElement
    export const name = "Tools"
</script>

<div bind:this={DOMElement} class="tools_div">

    <div class="tools">
        <div class="firstRow imgRow">
            <img src="{imgSource}vscode.png" title="VSCode" alt="VSCode">
            <img src="{imgSource}androidstudio-original-wordmark 1.png" title="Android Studio" alt="Android Studio">
            <img src="{imgSource}vim-original 1.png" title="Vim / NeoVim" alt="Vim and NeoVim">
            <img src="{imgSource}jetbrains-original 1.png" title="JetBrains IDEs" alt="JetBrains IDEs">
        </div>

        <div class="secondRow imgRow">
            <img src="{imgSource}git-plain 1.png" title="Git / GitHub" alt="Git / GitHub">
            <img src="{imgSource}windows8-original 1.png" title="Windows" alt="Windows">
            <img src="{imgSource}linux-original 1.png" title="Linux" alt="Linux">
        </div>
    </div>
    <h1 class="title">Tools I use</h1>
</div>


<style>
    .tools_div{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: #D1D1D1;
        gap: 12vh;
        padding: 0px;
        margin: 0px;
        height: 100vh;
        width: 100%;
    } 
    .tools{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 8vh;
        align-items: center;

    }
    .imgRow > img {
        height: 20vh;
    }

    .imgRow{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 10vw;
    }

    .title {
        color: #505050;
        font-size: 3em;
        font-family: "League Spartan", sans-serif ;
    }

</style>
