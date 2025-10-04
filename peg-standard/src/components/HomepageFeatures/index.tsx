import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Start to know PEG',
    image: 'img/meta-matrix-list.png',
    description: (
    <>
      If you are new to PEG, this section introduces what a Predicted Effector Gene (PEG) is, explains the differences between the PEG Evidence Matrix, PEG Metadata, and the PEG List.
    </>),
  },
  {
    title: 'Get Familiar with PEG Standard',
    image: 'img/know-pegasus.jpg',
    description: (
      <>
        This section introduces the core components of the PEG Standard: the Evidence Matrix as the full evidence table, the Metadata as column descriptions, and the PEG List as the summary of significant genes.
      </>
    ),
  },
  {
    title: 'Join the PEG Community',
    image: 'img/joinus.png',
    description: (
      <>
        Here you can find past working group videos and materials, plus details on joining discussions, contributing feedback, and following the roadmap.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
