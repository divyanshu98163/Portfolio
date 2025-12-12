export default function Projects() {
    // Replace with real project data or map over props
    const projects = [
        { title: "Resume Builder", desc: "Resume builder using LLM & templates", link: "https://github.com/divyanshu98163/Resume-Build" },
        { title: "Zerodha Clone", desc: "It is the investing Platform", link: "https://github.com/divyanshu98163/Zerodha" },
    ];

    return (
        <section className="container mx-auto px-4 py-16" id="projects">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((p) => (
                    <article key={p.title} className="p-6 border rounded-lg">
                        <h3 className="font-semibold">{p.title}</h3>
                        <p className="mt-2 text-muted-foreground">{p.desc}</p>
                        <a href={p.link} className="mt-4 inline-block text-primary">View →</a>
                    </article>
                ))}
            </div>
        </section>
    );
}
