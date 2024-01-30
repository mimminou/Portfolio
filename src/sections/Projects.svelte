<svelte:options accessors={true} />

<script>
    // start using Tailwind because otherwise it will get ugly very quickly, project has many sections so using vanilla CSS is not the best developer experience
    // and is not huge enough to cause problems with tailwind
    import Sliders from "../components/Slides.svelte";
    export let DOMElement;
    export const name = "Projects";
    export const classname = "projects_div";

    const Project = (name, image, technologies, link) => {
        return { name, image, technologies, link }; //maybe add description ... sounds usefull
    };

    const pythonImg = "./assets/python-plain-wordmark 1.png";
    const javaImg = "./assets/java-plain-wordmark 1.png";
    const AndroidImg = "./assets/android-plain 1.png";

    let PDBaser = Project(
        "PDBaser",
        "pdbaser.png",
        [pythonImg],
        "https://github.com/mimminou/PDBASER",
    );
    let AminusPriceChecker = Project(
        "Aminus Price Checker",
        "Aminus.png",
        [javaImg, AndroidImg, pythonImg],
        "",
    );
    let projectsList = [PDBaser, AminusPriceChecker]; // add more stuff here

    $: projectName = "";
    $: projectTech = [];
    $: projectLink = "";

    function slideIndexChanged(event) {
        projectName = projectsList.at(event.detail.index).name;
        projectTech = projectsList.at(event.detail.index).technologies;
        projectLink = projectsList.at(event.detail.index).link;
    }
</script>

<div class="projects_div flex flex-col" bind:this={DOMElement}>
    <h1 class="title">Notable projects of mine</h1>
    <div class="container flex flex-row gap-2">
        <div
            class="left_projects flex h-full flex-col w-1/2 sm:h-1/2 sm:w-full flex-grow-0 flex-shrink-0 basis-[40%]"
        >
            <div class="projectName">
                <h2 class="projectName m-1">
                    {projectName}
                </h2>
                {#if projectLink.length != 0}
                    <a
                        class="projectName"
                        style="color: inherit;"
                        href={projectLink}
                        target="_blank">(Link)</a
                    >
                {/if}
            </div>
            <div class="projectStack">
                <h3>Built With</h3>
                <div class="projectTech">
                    <ul class="projectTechList">
                        {#each projectTech as tech}
                            <li class="listItem">
                                <img class="techImg" src={tech} alt="" />
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
        <div
            class="right_projects flex justify-center items-center flex-grow-0 flex-shrink-0 basis-[60%]"
        >
            <Sliders {projectsList} on:slideChanged={slideIndexChanged} />
        </div>
    </div>
</div>

<style>
    .title {
        padding: 0.5em 0.5em;
        margin: 0;
        font-size: 3em;
        font-family: "League Spartan", monospace;
        color: #b8b8b8;
        flex: 0 1 15%;
    }

    .projectName {
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
    }

    .projects_div {
        margin: 0px;
        padding: 0px;
        height: 100vh;
        width: 100%;
        background-color: #212121;
    }

    .projectStack {
        width: 100%;
        margin: 0%;
        padding: 0px;
    }

    .projectTech {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-direction: row;
    }

    .projectTechList {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: row;
        max-width: 100%;
        flex-flow: wrap;
        gap: 5%;
        list-style: none;
        padding: 0px;
    }

    .listItem {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px;
        margin: 0px;
    }

    .techImg {
        max-width: 100%;
        padding: 0px;
        margin: 0px;
    }

    .left_projects {
        font-family: "League Spartan", monospace;
        font-size: 2em;
        color: #b8b8b8;
    }

    @media (max-width: 480px) {
        .projects_div {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .title {
            padding: 0.5em 0em;
            text-align: center;
        }

        .left_projects {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 90%;
        }

        .projectName {
            width: 40%;
            text-align: center;
        }

        .projectTech {
            width: 100%;
            text-align: center;
        }

        .projectStack {
            display: flex;
            justify-content: center;
            width: 100%;
            align-items: center;
            flex-direction: column;
            margin: 0%;
            padding: 0px;
        }
        .projectTechList {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            max-width: 100%;
        }
        :is(h4, h3) {
            flex: 0 1 50%;
            padding: 0;
            margin: 0;
        }
        h5 {
            color: #c8c8c8;
            padding: 0;
            margin: 0;
        }

        .container {
            flex-direction: column;
            align-items: center;
            justify-content: start;
            height: 100%;
        }
    }
</style>
