import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link'; // ✅ use Docusaurus link
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Introduction to Predicted Effector Genes',
    image: 'img/meta-matrix-list.png',
    link: '/docs/home',
    description: (
    <>
      If you are new to PEG, this section introduces what a Predicted Effector Gene (PEG) are and explains the need for standardisation.
    </>),
  },
  {
    title: 'Get Familiar with the PEGASUS Framework',
    image: 'img/know-pegasus.jpg',
    link: '/docs/peg-overview',
    description: (
      <>
        This section introduces the core components of the PEGASUS Standard: the Evidence Matrix as the full evidence table, the Metadata as provenance and column descriptions, and the PEG List as the summary of significant genes.
      </>
    ),
  },
  {
    title: 'Join the PEGASUS Community',
    image: 'img/joinus.png',
    link: '/docs/community/contact',
    description: (
      <>
        Here you can find past working group videos and materials, plus details on joining discussions, contributing feedback, and following the roadmap.
      </>
    ),
  },
];

function Feature({title, image, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={link}>
          <img src={image} className={styles.featureSvg} alt={title} />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Link to={link} className={styles.featureTitleLink}> {/* ✅ clickable title */}
            {title}
          </Link>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
