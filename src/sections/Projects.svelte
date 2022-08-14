<svelte:options accessors={true}/>
<script>
    import Sliders from "../components/Slides.svelte"
    export let DOMElement
    export const name = "Projects"
    export const classname = "projects_div"

    const Project = (name, image, technologies) => {
        return {name : name, img : image, techs : technologies} //maybe add description ... sounds usefull
    }

    let PDBaser = Project("PDBaser", "pdbaser.png", ["Python", "TkInter"])
    let AminusPriceChecker = Project("Aminus Price Checker", "Aminus.png",["Java/Android", "Python on desktop side"])
    let projectsList = [PDBaser, AminusPriceChecker]
    

    function slideIndexChanged(event){
        projectName = projectsList.at(event.detail.index).name
        projectTech = projectsList.at(event.detail.index).techs
    }

    $: projectName = ""
    $: projectTech = []

</script>

<div class="projects_div" bind:this={DOMElement}>
    <h1 class="title">Notable projects of mine</h1>
    <div class="container">
    <div class="left_projects">
        <div class="project_content">
            <div class="projectName">
                <h3 style="text-decoration: underline; display: inline-block;">Project:</h3>
                <h5 style="display: block;"> {projectName} </h5>
            </div>
            <div class="projectTech">
                <h3 style="text-decoration: underline; display: inline-block;">Made with:</h3>
                <h5 style="display: block;">{projectTech.join(", ")}</h5>
            </div>

        </div>
                        
    </div>
        <div class="right_projects">
            <Sliders projectsList={projectsList} on:slideChanged={slideIndexChanged}/>   
        </div>
    </div>

</div>

<style>

    .title {
        padding: 0.5em 0.5em;
        margin: 0;
        font-size: 3em;
        font-family: "League Spartan", monospace;
        color: #B8B8B8;
        flex: 0 1 15%;
    }
    :is(h4, h3){
        padding: 0.5em 0.5em;
        margin : 0;
    
    }
    h5{
        color: #c8c8c8 ;
        padding: 0 0.5em;
        margin: 0;
    }
    
    .projects_div{
        margin: 0px;
        padding: 0px;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        background-color: #212121;
    }

    .container{
        flex : 1 1 80%;
        display: flex;
        max-height: 80%;
        align-items: stretch;
        justify-content: space-evenly;
    }
    
    .right_projects{
        display: flex;
        max-width: 50%;
        justify-content: center;
        align-items: flex-start;
    }

    .left_projects{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        font-family: "League Spartan", monospace;
        font-size: 2em;
        width: 30vw;
        color: #B8B8B8;
    }


    @media (max-width: 480px){
        .projects_div{
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
        .title {
            padding: 0.5em 0em;
            text-align: center;
        
        }

        .left_projects{
            align-items: center;
            width: 90%;
            height: 40%;
        }
        .right_projects{
            max-width: 95%;
            width: 95%;
            right: 60%;
        }

        .project_content{
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 5%;
            flex-direction: row;
        }
        
        .projectName{
            width: 40%;
            text-align: center;
        }

        .projectTech{
            width: 40%;
            text-align: center;
        }

        :is(h4, h3){
            flex: 0 1 50%;
            padding: 0;
            margin : 0;
        }
        h5{
            color: #c8c8c8 ;
            padding: 0;
            margin: 0;
        }

        .container{
            flex-direction: column;
            align-items: center;
            justify-content: start;
        }
    }




</style>
