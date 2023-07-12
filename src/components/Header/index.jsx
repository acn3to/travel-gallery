import logo from './compass.svg';
import search from './magnifying-glass.svg';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<img src={logo} alt="Website logo" className={styles.header__logo} />
			<div className={styles.header__container}>
				<input
					className={styles.header__input}
					type="text"
					name=""
					id=""
					placeholder="What are you looking for?"
				/>
				<img src={search} alt="Magnifying glass icon" className={styles.header__search_icon} />
			</div>
		</header>
	);
};

export default Header;
