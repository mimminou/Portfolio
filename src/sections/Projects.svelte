<svelte:options accessors={true} />

<script>
    // start using Tailwind because otherwise it will get ugly very quickly, project has many sections so using vanilla CSS is not the best developer experience
    // and is not huge enough to cause problems with tailwind
    import Card from "../components/Card.svelte";
    import pdbaserImg from "../assets/pdbaser.png";
    import lbaImg from "../assets/LBA.png";
    import aminusImg from "../assets/Aminus.png";
    import smartBrainImg from "../assets/SmartBrain.png";

    export let DOMElement;
    export const name = "Projects";
    export const classname = "projects_div";

    const Project = (name, image, technologies, link) => {
        return { name, image, technologies, link }; //maybe add description ... sounds usefull
    };

    let PDBaser = Project(
        "PDBaser",
        pdbaserImg,
        ["Python"],
        "https://github.com/mimminou/PDBASER",
    );
    let AminusPriceChecker = Project(
        "Aminus Price Checker",
        aminusImg,
        ["Java", "Android", "Python"],
        "",
    );
    let Lba = Project(
        "LBA Portfolio",
        lbaImg,
        ["React", "Django", "SQLite"],
        "https://lba-umc.com/",
    );
    let SmartBrain = Project(
        "SmartBrain",
        smartBrainImg,
        ["React", "Golang", "Python", "PostgreSQL"],
        "https://mimminou.github.io/SmartBrain/",
    );
    let projectsList = [PDBaser, Lba, AminusPriceChecker, SmartBrain]; // add more stuff here
</script>

<div
    class="projects_div flex flex-col justify-stretch items-center"
    bind:this={DOMElement}
>
    <h1 class="title sm:p-2 p-0.5 sm:text-6xl text-4xl">Some of my work</h1>
    <div class="flex flex-grow items-stretch">
        <div
            class="flex flex-col sm:flex-row sm:gap-6 gap-2 sm:justify-self-center items-center justify-evenly"
        >
            {#each projectsList as project}
                <Card
                    title={project.name}
                    img={project.image}
                    techs={project.technologies}
                    link={project.link}
                />
            {/each}
        </div>
    </div>
</div>

<style>
    .title {
        margin: 0;
        font-family: "League Spartan", monospace;
        color: #b8b8b8;
    }

    .projects_div {
        margin: 0px;
        padding: 1em 0em;
        height: 100%;
        width: 100%;
        background-color: #212121;
    }

    @media (max-width: 480px) {
        .projects_div {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        :is(h4, h3) {
            flex: 0 1 50%;
            padding: 0;
            margin: 0;
        }
    }
</style>
