import home from './home.svg';
import styles from './Menu.module.scss';
import mostLiked from './most-liked.svg';
import mostViewed from './most-viewed.svg';
import news from './news.svg';
import surpiseMe from './surprise-me.svg';

const Menu = () => {
	return (
		<nav className={styles.menu}>
			<ul className={styles.menu__list}>
				<li className={styles.menu__item}>
					<img src={home} alt="" />
					<a href="/">Home</a>
				</li>
				<li className={styles.menu__item}>
					<img src={news} alt="" />
					<a href="/">News</a>
				</li>
				<li className={styles.menu__item}>
					<img src={mostLiked} alt="" />
					<a href="/">Most Liked</a>
				</li>
				<li className={styles.menu__item}>
					<img src={mostViewed} alt="" />
					<a href="/">Most Viewed</a>
				</li>
				<li className={styles.menu__item}>
					<img src={surpiseMe} alt="" />
					<a href="/">Surprise Me</a>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
