import "./SocialBox.css";

function SocialBox() {
  return (
    <div className="socials-sidebar-left">
      <nav>
        <a
          href="https://www.facebook.com/profile.php?id=61583048903446"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-facebook-fill"></i>
        </a>
        <a
          href="https://www.instagram.com/djfreymusic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-instagram-fill"></i>
        </a>
        <a
          href="https://www.tiktok.com/@djfreymusic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-tiktok-fill"></i>
        </a>
        <a
          href="https://www.youtube.com/@djfreyofficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-youtube-fill"></i>
        </a>
        <a
          href="https://soundcloud.com/djfreyofficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="ri-soundcloud-fill"></i>
        </a>
      </nav>
    </div>
  );
}

export default SocialBox;
