import "./Hero.css";

function Hero() {

    return (

        <section className="hero">

            <div className="container hero-container">

                <div className="hero-left fade-up">

                    <span className="hero-tag">
                        Creative Design Studio
                    </span>

                    <h1>

                        Crafting visual
                        <br />

                        stories with
                        <br />

                        purpose &
                        <br />

                        elegance.

                    </h1>

                    <p>

                        Hi, I'm <strong>Latika Tewari</strong>,
                        founder of <strong>Luncy Corner</strong>.

                        I create branding,
                        Canva templates,
                        social media creatives,
                        presentations,
                        and modern visual experiences.

                    </p>

                    <div className="hero-buttons">

                        <button className="btn">

                            View My Work →

                        </button>

                    </div>

                </div>

                <div className="hero-right">

                    <div className="design-desk">

                        <div className="circle pink"></div>

                        <div className="circle blue"></div>

                        <div className="coffee"></div>

                        <div className="notebook"></div>

                        <div className="pencil"></div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;