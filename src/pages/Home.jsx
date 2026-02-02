import profileImg from "../assets/profile.jpg";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">

        <img src={profileImg} alt="Rudra Shah" className="profile-img" />

        <div className="hero-text">
          <h1>Hi, I'm Rudra Shah 👋</h1>
          <p>React Beginner | Frontend Developer</p>
        </div>
      </div>
    </section>
  );
}

export default Home;







