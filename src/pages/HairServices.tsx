import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';
import { ServiceCategoryPage } from '../components/ServiceCategoryPage';
import { HAIR_SERVICES_CATEGORY } from '../data/serviceCategories';

export default function HairServices() {
  return (
    <PageTransition>
      <Helmet>
        <title>{HAIR_SERVICES_CATEGORY.metaTitle}</title>
        <meta name="description" content={HAIR_SERVICES_CATEGORY.metaDescription} />
      </Helmet>
      <ServiceCategoryPage config={HAIR_SERVICES_CATEGORY} />
    </PageTransition>
  );
}
