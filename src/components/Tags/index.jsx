import styles from './Tags.module.scss';

const Tags = () => {
	return (
		<div className={styles.tags}>
			<p>Filter by tags:</p>
			<ul className={styles.tags__list}>
				<li>Beachs</li>
				<li>Plateaus</li>
				<li>Atlantic forest</li>
				<li>Savanna</li>
			</ul>
		</div>
	);
};

export default Tags;
