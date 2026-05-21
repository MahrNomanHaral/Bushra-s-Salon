import type { Metadata } from 'next';
import { ServiceCategoryPage } from '@/src/components/ServiceCategoryPage';
import { SKIN_SERVICES_CATEGORY } from '@/src/data/serviceCategories';
import { ServiceCategoryLayout } from '../components/ServiceCategoryLayout';

export const metadata: Metadata = {
  title: SKIN_SERVICES_CATEGORY.metaTitle,
  description: SKIN_SERVICES_CATEGORY.metaDescription,
};

export const dynamic = 'force-static';

export default function SkinServicesPage() {
  return (
    <ServiceCategoryLayout>
      <ServiceCategoryPage config={SKIN_SERVICES_CATEGORY} />
    </ServiceCategoryLayout>
  );
}
