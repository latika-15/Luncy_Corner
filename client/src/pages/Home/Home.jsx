import Navbar from "../../components/Navbar/Navbar";

function Home(){

    return(

        <>

            <Navbar/>

            <section className="section">

                <div className="container fade-up">

                    <h1 className="title">

                        Crafting visual stories
                        <br/>
                        with purpose,
                        <br/>
                        emotion &
                        elegance.

                    </h1>

                    <p className="subtitle">

                        Hi, I'm <strong>Latika Tewari</strong>, the creative mind behind
                        <strong> Luncy Corner</strong>. I design Canva templates,
                        branding, social media creatives, presentations, and visual
                        identities that help brands leave a lasting impression.

                    </p>

                    <button className="btn">

                        View My Work →

                    </button>

                </div>

            </section>

        </>

    )

}

export default Home;