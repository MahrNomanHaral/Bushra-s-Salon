import type { Metadata } from 'next';
import { ServiceCategoryPage } from '@/src/components/ServiceCategoryPage';
import { BEAUTY_BODY_SERVICES_CATEGORY } from '@/src/data/serviceCategories';
import { ServiceCategoryLayout } from '../components/ServiceCategoryLayout';

export const metadata: Metadata = {
  title: BEAUTY_BODY_SERVICES_CATEGORY.metaTitle,
  description: BEAUTY_BODY_SERVICES_CATEGORY.metaDescription,
};

export const dynamic = 'force-static';

export default function BeautyBodyServicesPage() {
  return (
    <ServiceCategoryLayout>
      <ServiceCategoryPage config={BEAUTY_BODY_SERVICES_CATEGORY} />
    </ServiceCategoryLayout>
  );
}
