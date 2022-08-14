<!-- Languages : Python, Java, HTML, CSS, JavaScript -->
<!---->
<!---->
<!-- Frameworks and libraries :  -->
<!---->
<!--       Python : QT, Django + DRF, Nuitka, BioPython... -->
<!--       Java : Android -->
<!--       Web : Svelte (Front-end), Django (Backend) -->
<!---->
<svelte:options accessors={true}/>
<script>
    
    export let DOMElement
    export const name = "Languages"
    export const classname = "langs_div"
</script>


<div bind:this={DOMElement} class="langs_div">
    <div class="mainStuff">
        <div class="language_div">
            <div class="mainlogo">
                <img src="./assets/python-plain-wordmark 1.png" alt="Python" title="Python">
            </div>

            <div class="detail_content">
                <img src="./assets/qt-original 1.png" alt="QT" title="QT">
                <img src="./assets/django-plain-wordmark 1.png" alt="Django" title="Django">
            </div>

        </div>
        <hr class="separator_bar">
        <div class="language_div">
            <div class="mainlogo">
                <img src="./assets/java-plain-wordmark 1.png" alt="Java" title="Java">
            </div>
            <div class="detail_content">
                <img src="./assets/android-plain 1.png" alt="Android" title="Android">
            </div>
        </div>
 
        <hr class="separator_bar">
        <div class="language_div">
            <div class="mainlogo weblogos">
                <img class="html weblang" src="./assets/html5-plain-wordmark 1.png" alt="HTML" title="HTML">
                <img class="css weblang" src="./assets/css3-plain-wordmark 1.png" alt="CSS" title="CSS">
                <img class="js weblang" src="./assets/javascript-plain 1.png" alt="Javascript" title="JavaScript">
            </div>

            <div class="detail_content">
                <img src="./assets/svelte-plain-wordmark 1.png" alt="Svelte" title="Svelte">

            </div>
        </div>
 
    </div>
    <div class="title">
        <h1>Languages and frameworks I use</h1>
    </div>

</div>


<style>
    .langs_div{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: #212121;
        padding: 0px;
        margin: 0px;
        height: 100vh;
        width: 100%;
    }

    .mainStuff{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
        margin: 0px;

    }

    h1{
        text-align: center;
        padding: 0;
        margin: 0;
    }

    .language_div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:space-between;
        gap: 5vh;
        width: 30vw;
        height: 50vh;
    }

    .mainlogo{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25vw;
        height: 25vh;
    }

    .mainlogo > img {
        max-width: 25vw;
        min-width: 3.5em;
        max-height: 25vh;
        height: auto;
    }

    .weblogos{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .html{
        align-self: flex-start;
    }

    .css {
        align-self: center;
    }

    .js{
        align-self: flex-end;
    }

    .weblang{
        width: 30%;
    }

    .detail_content{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10%;
    }
    
    .detail_content > img {
        max-height: 12vh;
        max-width: 12vw;
        height: auto;
    }

    .separator_bar{
        height: 60vh;
        margin: 0px;
        padding: 0px;
        background-color: #B8B8B8;

   }
    
    h1{
        color: #B8B8B8;
        font-size: 3em;
        font-family: "League Spartan", sans-serif ;
    }

    @media (max-width: 480px){
        .mainStuff{
            flex-direction: column;
            height: 60%;
        }

        .language_div{
            flex-direction: row;
            justify-content: space-evenly;
            flex-wrap: nowrap;
            height: 22vh;
            width: 80%;
        }
        
        .mainlogo > img :not(.weblang) {
            min-width: 6em;
        }
        .mainlogo{
            flex: 0 1 40%;
            width: 50%;
            height: 100%;
        }
   
        .weblogos{
            flex: 0 1 40%;
        }

        .weblang{
            min-width: 45%;
        }

        .detail_content{
            flex-grow: 1;
        }

        .detail_content > img {
            min-width: 4em;
        }

        .separator_bar{
            height: 0;
            margin: 2% 0%;
            width: 80vw;
        }
    }

</style>
