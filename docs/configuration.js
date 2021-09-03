var Config = {
    title: "Machine Learning Seminars",
    url: "https://andriygav.github.io/MachineLearningSeminars/",
    navigation: [
        {
            label: "Home",
            link: "index.md",
            type: "static"
        },
        {
            label: "First part",
            navigation: [
                {
                    label: "main",
                    link: "main.html",
                    github: "https://github.com/andriygav/MachineLearningSeminars/blob/master/sem1/main.ipynb",
                    binder: "https://mybinder.org/v2/gh/andriygav/MachineLearningSeminars/master?filepath=sem1/main.ipynb",
                    slides: "main.slides.html"
                }
            ]
        },
        {
            label: "Presentations",
            navigation: [
                {
                    label: "main",
                    link: "main.slides.html"
                }
            ]
        },
        {
            label: "About",
            link: "about.md",
            type: "static"
        }
    ]
};
