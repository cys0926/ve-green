import React from 'react';

type Props = {
  className?: string;
};

export default function Icon({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 57 66"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M41.0234 15.6946C34.4419 20.8138 28.8377 26.9095 24.3026 33.519C17.2845 42.9314 11.0346 53.0764 9.02291 64.0202C8.884 64.7831 9.50412 65.3308 10.1565 65.3003C17.4325 64.9465 23.5345 62.9778 28.7377 60.678C61.2838 46.2985 57.2142 5.56384 56.4039 0.506252C56.375 0.309524 56.2005 -0.0994991 55.7424 0.0222171C53.3132 0.669012 50.7006 3.2686 41.0234 5.78621C17.782 11.8327 -10.6323 27.0296 4.01732 62.8151C4.32077 63.326 5.54695 63.2906 5.66105 62.8009C9.84311 44.034 23.3989 27.3546 40.6522 15.3606C41.5782 14.7138 42.0726 14.8737 41.0234 15.6946Z" />
    </svg>
  );
}
