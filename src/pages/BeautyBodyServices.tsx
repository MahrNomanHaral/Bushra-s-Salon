import { Helmet } from 'react-helmet-async';
import { PageTransition } from '../components/PageTransition';
import { ServiceCategoryPage } from '../components/ServiceCategoryPage';
import { BEAUTY_BODY_SERVICES_CATEGORY } from '../data/serviceCategories';

export default function BeautyBodyServices() {
  return (
    <PageTransition>
      <Helmet>
        <title>{BEAUTY_BODY_SERVICES_CATEGORY.metaTitle}</title>
        <meta name="description" content={BEAUTY_BODY_SERVICES_CATEGORY.metaDescription} />
      </Helmet>
      <ServiceCategoryPage config={BEAUTY_BODY_SERVICES_CATEGORY} />
    </PageTransition>
  );
}
