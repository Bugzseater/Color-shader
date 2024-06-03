// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <a href="https://github.com/your-username/your-repo" style={styles.link} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" style={styles.icon}></i>
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px 0',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    fontSize: '24px',
    margin: '0 10px',
  },
  icon: {
    fontSize: '24px',
  },
};

export default Footer;
