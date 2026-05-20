import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';
import { ServiceCategoryPage } from '../components/ServiceCategoryPage';
import { SKIN_SERVICES_CATEGORY } from '../data/serviceCategories';

export default function SkinServices() {
  return (
    <PageTransition>
      <Helmet>
        <title>{SKIN_SERVICES_CATEGORY.metaTitle}</title>
        <meta name="description" content={SKIN_SERVICES_CATEGORY.metaDescription} />
      </Helmet>
      <ServiceCategoryPage config={SKIN_SERVICES_CATEGORY} />
    </PageTransition>
  );
}
