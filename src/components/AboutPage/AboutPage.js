import React, { PureComponent } from 'react'
import { Container } from 'react-bootstrap';
import styles from './AboutPage.module.css';

class AboutPage extends PureComponent {
  render() {
    return (
      <div className={styles.AboutPage}>
        <Container className="mt-3">
          <h1>About</h1>
          <hr />
          <p>
            Search for movies by name. 
            Made with&nbsp;
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer" >React.JS</a> and&nbsp;
            <a href="https://www.themoviedb.org/settings/api" target="_blank" rel="noreferrer" >TMDB Api</a>.  
          </p>
          <p>
            Developer:&nbsp;
            <a href="https://github.com/abharan2002" title="Github @abharan2002" >Abharan</a>
            &nbsp;
            <a href="https://github.com/ujjwal-0745" title="Github @ujjwal-0745" >Ujjwal</a>
            &nbsp;
            <a href="https://github.com/wxomi" title="Github @wxomi" >Anshul</a>
            &nbsp;
            <a href="https://github.com/vishalm31001" title="Github @vishalm31001" >Vishal</a>
            &nbsp;
            <a href="https://github.com/gauravbhainsora " title="Github @gauravbhainsora " >Gaurav</a>
            &nbsp;
            <br />
            <a href="https://github.com/abharan2002/Movie-Search" target="_blank" rel="noreferrer">Fork on GitHub</a>
          </p>
        </Container>
      </div>
    )
  }
}


export default AboutPage;