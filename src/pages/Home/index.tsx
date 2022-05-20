import { ReactNode, useMemo } from 'react';
import { MainLayout } from '@/layouts/main';
import { flex_container, flex_item } from './Home.module.scss';
import { Slideshow } from '@/components/slideshow';
import { generateStockImages, dimensions } from '@/data/stock-images';
import { BasicCard } from '@/components/cards/basic-card';
import { Timeline } from '@/components/timeline/Timeline';

const Page = () => {
  const images = useMemo(() => generateStockImages(dimensions), []);
  return (
    <div className={flex_container}>
      <Slideshow imageUrls={images} />
      {/* {images.map((url, index) => (
        <BasicCard
          key={`${index}`}
          srcUrl={url}
          title={`Title`}
          subtitle={`Subtitle`}
        />
      ))} */}
      {/* <Timeline
        events={[
          { date: `May 25`, title: `Start Project` },
          { date: `June 10`, title: `Finish Project` },
          { date: `May 25`, title: `Start Project` },
          { date: `June 10`, title: `Finish Project` },
          { date: `May 25`, title: `Start Project` },
          { date: `June 10`, title: `Finish Project` },
        ]}
      /> */}
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
