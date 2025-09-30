import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Start to know PEG',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
    <>
      If you are new to PEG, this section introduces what a Predicted Effector Gene (PEG) is, explains the differences between the PEG Evidence Matrix, PEG Metadata, and the PEG List.
    </>),
  },
  {
    title: 'Get Familiar with PEG Standard',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        This section introduces the core components of the PEG Standard: the Evidence Matrix as the full evidence table, the Metadata as column descriptions, and the PEG List as the summary of significant genes.
      </>
    ),
  },
  {
    title: 'Join the PEG Community',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Here you can find past working group videos and materials, plus details on joining discussions, contributing feedback, and following the roadmap.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
