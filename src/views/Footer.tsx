import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import resume from "./resume.pdf"; // Cannot find module './resume.pdf'.ts(2307)

import "../styles.css"

export const Footer = () => {

  return (
    <div className="footer">

      <div className="footer-title">
        <h3>Professional Links</h3>
      </div>

      <div className="footer-content">
        <a className="footer-links" href="https://github.com/mrandypratt" target="_blank" rel="noreferrer noopener" style={{margin: 10}}>
          <GitHubIcon fontSize='medium' color="inherit" /> Github |
        </a>

        <a className="footer-links" href="https://www.linkedin.com/in/andrewpratt37/" target="_blank" rel="noreferrer noopener" style={{margin: 10}}>
          <LinkedInIcon fontSize='medium' color="inherit" /> LinkedIn |
        </a>

        <a className="footer-links" href={resume} target="_blank" rel="noreferrer noopener" style={{margin: 10}}>
          <FilePresentIcon fontSize='medium' color="inherit"/>Resume
        </a>
      </div>
    </div>
  )
}
