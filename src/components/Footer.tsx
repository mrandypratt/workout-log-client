import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';


export const Footer = () => {

  return (
    <div className="footer">

      <div className="footer-title">
        <h3>Professional Links</h3>
      </div>

      <div className="footer-content">
        <a className="footer-links" href="https://github.com/mrandypratt" target="_blank" rel="noreferrer noopener" style={{margin: 10}}>
          <GitHubIcon fontSize='large' color="inherit" />
        </a>

        <a className="footer-links" href="https://www.linkedin.com/in/andrewpratt37/" target="_blank" rel="noreferrer noopener" style={{margin: 10}}>
          <LinkedInIcon fontSize='large' color="inherit" />
        </a>
      </div>
    </div>
  )
}
