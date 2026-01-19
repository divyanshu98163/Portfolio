export default function Projects() {
    const projects = [
        {
            title: "Resume Builder",
            desc: "Resume builder using LLM & templates",
            link: "https://github.com/divyanshu98163/Resume-Build",
        },
        {
            title: "Zerodha Clone",
            desc: "Investing platform UI clone",
            link: "https://github.com/divyanshu98163/Zerodha",
        },
        {
            title: "Diabetes Prediction System",
            desc: "ML-based diabetes prediction with Streamlit UI",
            link: "https://github.com/divyanshu98163/Diabetes-Prediction-system.git",
            demo: "https://divyanshu-diabetes.streamlit.app/",
        },
        {
            title: "Chat-bot",
            desc: "Chat-bot using the manoindia site ",
            link: "https://github.com/divyanshu98163/manoindiachatbot.git",
            demo: "https://manoindiachatbot.vercel.app/", // add deployed link here
        },
    ];

    return (
        <section className="container mx-auto px-4 py-16" id="projects">
            <h2 className="text-2xl font-semibold">Projects</h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((p) => (
                    <article key={p.title} className="p-6 border rounded-lg">
                        <h3 className="font-semibold">{p.title}</h3>
                        <p className="mt-2 text-muted-foreground">{p.desc}</p>

                        <div className="mt-4 flex gap-4">
                            <a
                                href={p.link}
                                target="_blank"
                                className="text-primary"
                            >
                                GitHub →
                            </a>

                            {p.demo && (
                                <a
                                    href={p.demo}
                                    target="_blank"
                                    className="text-green-600"
                                >
                                    Live Demo →
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
