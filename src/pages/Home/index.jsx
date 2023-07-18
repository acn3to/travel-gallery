import Header from '../../components/Header';
import Menu from '../../components/Menu';
import styles from './Home.module.scss';

const Home = () => {
	return (
		<>
			<Header />
			<main>
				<section className={styles.main_section}>
					<Menu />
					<div className={styles.main_section__image}>
						<h1>My travel gallery</h1>
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
