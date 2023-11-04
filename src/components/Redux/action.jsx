export const updateField = (fieldKey, value) => ({
    type: 'UPDATE_FIELD',
    fieldKey,
    value,
  });

  export const kycDetails = (fieldKey, value) => ({
    type: 'KYC_DETAILS',
    fieldKey,
    value,
  });