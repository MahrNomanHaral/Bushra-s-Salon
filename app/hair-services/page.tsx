import type { Metadata } from 'next';
import { ServiceCategoryPage } from '@/src/components/ServiceCategoryPage';
import { HAIR_SERVICES_CATEGORY } from '@/src/data/serviceCategories';
import { ServiceCategoryLayout } from '../components/ServiceCategoryLayout';

export const metadata: Metadata = {
  title: HAIR_SERVICES_CATEGORY.metaTitle,
  description: HAIR_SERVICES_CATEGORY.metaDescription,
};

export default function HairServicesPage() {
  return (
    <ServiceCategoryLayout>
      <ServiceCategoryPage config={HAIR_SERVICES_CATEGORY} />
    </ServiceCategoryLayout>
  );
}
