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
    title: 'Docs',
    Svg: require('@site/static/img/app_documents.svg').default,
    description: (
      <>
        entec-react-assets를 이용하여 Frontend개발 시 초기 세팅 방법 및 업무 개발에 필요한 다양한 문서 템플릿과 작성 가이드를 제공합니다.
      </>
    ),
  },
  {
    title: 'UI Components',
    Svg: require('@site/static/img/ui_component.svg').default,
    description: (
      <>
        업무 화면에서 사용할 수 있는 다양한 UI 컴포넌트를 사용법과 예제코드로 사용하기 쉽게 제공합니다.
      </>
    ),
  },
  {
    title: 'API Reference',
    Svg: require('@site/static/img/api_reference.svg').default,
    description: (
      <>
        entec-react-assets에서 제공하는 공통함수, 객체 등과 유틸 함수들의 상세한 API 문서를 제공합니다.
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
