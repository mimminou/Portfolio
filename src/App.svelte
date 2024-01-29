<script>
    import Hero from "./sections/Hero.svelte";
    import Navbar from "./components/Navbar.svelte";
    import Projects from "./sections/Projects.svelte";
    import Simple from "./sections/Simple.svelte";
    import Complex from "./sections/Complex.svelte";
    import Languages from "./sections/Languages.svelte";
    import Tools from "./sections/Tools.svelte";
    import Contact from "./sections/Contact.svelte";
    import { onMount } from "svelte";
    import scrollIntoView from "scroll-into-view";

    let HeroSection,
        SimpleSection,
        ComplexSection,
        LanguagesSection,
        ToolsSection,
        ProjectsSection,
        ContactSection;
    let appSections = [];
    let currentElement;
    let currentElementIndex;
    let scrollingState = true;
    let initialY = null;
    let keyCode;

    function touchEvent(yPos) {
        initialY = yPos;
    }

    function touchMoveEvent(yPos) {
        if (initialY === null) return;

        let currentY = yPos;
        let deltaY = initialY - currentY;
        scrolling(deltaY);
        initialY = null;
    }

    function navClicked(event) {
        scrollTo(event.detail.index);
    }

    function handleKeydown(event) {
        keyCode = event.keyCode;
        switch (keyCode) {
            case 38:
                scrollTo("UP");
                break;
            case 40:
                scrollTo("DOWN");
                break;
            case 33:
                scrollTo("UP");
                break;
            case 34:
                scrollTo("DOWN");
                break;
        }
    }

    function scrolling(deltaY) {
        if (deltaY > 10 && scrollingState) {
            scrollTo("DOWN");
        } else if (deltaY < -10 && scrollingState) {
            scrollTo("UP");
        }
    }

    function scrollTo(direction) {
        if (!isNaN(direction)) {
            let index = direction;
            scrollingState = false;
            currentElementIndex = index;
            scrollIntoView(
                appSections[currentElementIndex],
                { cancellable: false },
                () => {
                    scrollingState = true;
                },
            );
            currentElement = appSections.at(currentElementIndex);
        } else {
            if (
                direction === "DOWN" &&
                currentElementIndex < appSections.length - 1
            ) {
                scrollingState = false;
                currentElementIndex += 1;
                scrollIntoView(
                    appSections[currentElementIndex],
                    { cancellable: false },
                    () => {
                        scrollingState = true;
                    },
                );
                currentElement = appSections.at(currentElementIndex);
            } else {
                if (direction === "UP" && currentElementIndex > 0) {
                    scrollingState = false;
                    currentElementIndex -= 1;
                    scrollIntoView(
                        appSections[currentElementIndex],
                        { cancellable: false },
                        () => {
                            scrollingState = true;
                        },
                    );
                    currentElement = appSections.at(currentElementIndex);
                }
            }
        }
    }
    function goToTop() {
        window.scroll(0, 0);
    }

    onMount(() => {
        appSections = [
            HeroSection,
            SimpleSection,
            ComplexSection,
            LanguagesSection,
            ToolsSection,
            ProjectsSection,
        ]; //Remember to add sections here
        currentElement = appSections[0];
        window.scroll(0, 0);
        currentElementIndex = 0;
    });
    history.scrollRestoration = "manual";
</script>

<svelte:window
    on:touchstart={(event) => {
        touchEvent(event.touches[0].clientY);
    }}
    on:touchmove|preventDefault|nonpassive={(event) => {
        touchMoveEvent(event.touches[0].clientY);
    }}
    on:wheel|preventDefault|nonpassive={(event) => {
        scrolling(event.deltaY);
    }}
    on:keydown={handleKeydown}
    on:beforeunload={goToTop}
/>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
    />
    <style>
        @import url("https://fonts.googleapis.com/css2?family=League+Spartan&family=Open+Sans:wght@800&family=Ubuntu&family=Ubuntu+Mono&display=swap");
    </style>
</svelte:head>

<main class="mainContainer">
    <Navbar
        NavBarButtons={appSections}
        on:navClicked={navClicked}
        bind:visibleSection={currentElementIndex}
    />
    <Hero bind:DOMElement={HeroSection} />
    <Simple bind:DOMElement={SimpleSection} />
    <Complex bind:DOMElement={ComplexSection} />
    <Languages bind:DOMElement={LanguagesSection} />
    <Tools bind:DOMElement={ToolsSection} />
    <Projects bind:DOMElement={ProjectsSection} />
</main>

<style>
    :global(body) {
        margin: 0px;
        padding: 0px;
        background-color: #f1f1f1;
    }

    .mainContainer {
        height: 100vh;
        width: 100%;
    }

    .mainContainer {
        overflow-y: scroll;
        scrollbar-width: none; /* Firefox */
    }
    .mainContainer::-webkit-scrollbar {
        /* WebKit */
        width: 0;
        height: 0;
    }
</style>
