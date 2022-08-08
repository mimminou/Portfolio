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
                <div class="weblogosdiv">
                    <img class="html" src="./assets/html5-plain-wordmark 1.png" alt="HTML" title="HTML">
                    <img class="css" src="./assets/css3-plain-wordmark 1.png" alt="CSS" title="CSS">
                    <img class="js" src="./assets/javascript-plain 1.png" alt="Javascript" title="JavaScript">
                </div>
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
        max-height: 25vh;
        height: auto;
    }

    .weblogosdiv{
        position: relative;
    }

    .html{
        width: 6vw;
        position: absolute;
        top: -12vh;
        left: -5vw;
    }

    .css {
        width: 6vw;
        position: absolute;
        top: -7vh;
        left: 0;
    }

    .js{
        width: 5vw;
        position: absolute;
        top: 2vh;
        left: -5vw;
    }

    .detail_content{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 5vw;
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


</style>
