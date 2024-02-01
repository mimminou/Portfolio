<!-- TOOLS : Windows, Linux, Git, VSCode, Vim (NeoVim), Android Studio, JetBrains IDEs, Figma... -->
<svelte:options accessors={true} />

<script>
    import vscodeImg from "../assets/vscode.png";
    import figmaSVG from "../assets/figma-original.svg";
    import vimImg from "../assets/vim-original 1.png";
    import jetBrainsImg from "../assets/jetbrains-original 1.png";
    import gitImg from "../assets/git-plain 1.png";
    import windowsImg from "../assets/windows8-original 1.png";
    import linuxImg from "../assets/linux-original 1.png";
    export let DOMElement;
    export const name = "Tools";
</script>

<div bind:this={DOMElement} class="tools_div">
    <div class="tools">
        <img src={vscodeImg} title="VSCode" alt="VSCode" />
        <img src={figmaSVG} title="Figma" alt="Figma" />
        <img src={vimImg} title="Vim / NeoVim" alt="Vim and NeoVim" />
        <img src={jetBrainsImg} title="JetBrains IDEs" alt="JetBrains IDEs" />
        <img src={gitImg} title="Git / GitHub" alt="Git / GitHub" />
        <img src={windowsImg} title="Windows" alt="Windows" />
        <img src={linuxImg} title="Linux" alt="Linux" />
    </div>
    <h1 class="title md:text-5xl text-3xl">Tools I use</h1>
</div>

<style>
    .tools_div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: #d1d1d1;
        row-gap: 10vh;
        padding: 0px;
        margin: 0px;
        height: 100%;
        width: 100%;
    }

    .tools {
        display: flex;
        flex-direction: row;
        justify-content: center;
        column-gap: 5vw;
        row-gap: 5svh;
        align-items: center;
        flex-wrap: wrap;
    }

    .tools > img {
        max-width: 8em;
        max-height: 128px;
    }

    .title {
        color: #505050;
        text-align: center;
        padding-left: 2%;
        padding-right: 2%;
        font-family: "League Spartan", sans-serif;
    }

    @media (max-width: 480px) {
        .tools > img {
            max-width: 6em;
            min-width: 3em;
        }
    }
</style>
