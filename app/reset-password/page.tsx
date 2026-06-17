import React, { Suspense } from 'react';
import ResetPasswordForm from './ResetPasswordForm';

export const dynamic = 'force-dynamic';

export default function ResetPassword() {
  return (
    <Suspense fallback={<div />}> 
      <ResetPasswordForm />
    </Suspense>
  );
}
