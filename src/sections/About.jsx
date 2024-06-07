const About = () => {
    return (
      <section id="about" className='bodySection'>
        <h2 className="heading">About Me</h2>
        <div className="gridContainer">
          <div className="description">
            <p>Hello, my name is Matthew Carlsen. I'm a 21-year-old software developer based in Wausau, Wisconsin.</p>
            <p>
              I am currently a student at Northcentral Technical College, where I also work as an Instructional Assistant.  
              My interest in technology was sparked at a young age with games like Minecraft.  
              Building block houses led me down the rabbit hole of learning more about computers, eventually assembling my own computer, and now to developing applications for them.  
              I love to learn new things to feed my curiosity, which keeps me fascinated with innovative technology.  
              I enjoy seeking out creative solutions to complex problems, and my current passion lies in artificial intelligence.
            </p>
            <p>
              When I'm not at my computer, I love to get outdoors to hike, kayak, and take spontaneous camping trips.  
              I take delight in picking up and learning about random hobbies, with a recent one being pottery.
            </p>
          </div>
          <div className="imageContainer">
            <picture>
              <img src="PortfolioPhotoV2.png" alt="Matthew Carlsen Photo"></img>
            </picture>
          </div>
        </div>
      </section>
    );
}

export default About;
