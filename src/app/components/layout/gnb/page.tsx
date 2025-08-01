import Typography from '@/components/common/Typography';
import BreadCrumb from '@/components/layout/BreadCrumb';

export default function ComponentButtonPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components' },
    { label: 'Layout' },
    { label: 'Global Navigation Bar', href: '/components/layout/gnb' },
  ];

  return (
    <div className="flex size-full flex-col items-start gap-4">
      <BreadCrumb items={breadcrumbItems} />
      <Typography variant="h3">Gnb</Typography>
    </div>
  );
}
