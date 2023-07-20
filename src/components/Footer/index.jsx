import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__icons}>
				<a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
					<img src={facebook} alt="Facebook icon" />
				</a>
				<a href="https://twitter.com/" target="_blank" rel="noreferrer">
					<img src={twitter} alt="Twitter icon" />
				</a>
				<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
					<img src={instagram} alt="Instagram icon" />
				</a>
			</div>
			<p>Developed with love by @acn3to</p>
		</footer>
	);
};

export default Footer;
