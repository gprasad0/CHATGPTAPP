import { borderRadius } from '@mui/system';
import { useTranslation } from 'react-i18next';

export const PlaceHolder = () => {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h4
        style={{ background: '#f1faff', padding: '14px', borderRadius: '4px' }}
      >
        {t('describe')}
      </h4>
    </div>
  );
};
