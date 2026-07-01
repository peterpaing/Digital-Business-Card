function Heading(){
    return (
        <section id="main-heading">
        <h2>Laura Smith</h2>
        <p>Frontend Developer</p>
        <span>laurasmith.website</span>
        <button type="button"><i className="fa-solid fa-envelope"></i>Email</button>
        <button type="button"><i className="fa-brands fa-square-linkedin"></i>LinkedIn</button>
        </section>
    )
}

function Content(){
    return(
            <>
            <section id="main-about">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </section>
            <section id="main-interests">
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </section>
            </>
    )
}


export default function Main(){
    return(
        <>
        <Heading/>
        <Content/>
        </>
    )
}